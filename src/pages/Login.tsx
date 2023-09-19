import React from "react";
import LoginForm from "../components/forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthInfo } from "../store/authInfoSlice";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ session: { email: email, password: password } }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      if (!data.jwt) {
        alert("Incorrect password/username");
        throw new Error("JWT token not received.");
      }

      dispatch(
        setAuthInfo({
          isAuthenticated: true,
          userId: data?.user?.id,
          jwt: data?.jwt,
        })
      );
      navigate("/");
    } catch (error: any) {
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
