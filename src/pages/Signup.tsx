import React from "react";
import LoginForm from "../components/forms/LoginForm";

const SignUp: React.FC = () => {
  const handleSignUp = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign in");
      }

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.jwt);

      window.history.pushState(data.user, "", "/");

      const token = localStorage.getItem("token");
      alert(`Logged in with token: ${token}`);
    } catch (error) {
      console.error("Error during sign in:", error);
      alert("Failed to sign in");
    }
  };

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <LoginForm onLogin={handleSignUp} />
    </div>
  );
};

export default SignUp;
