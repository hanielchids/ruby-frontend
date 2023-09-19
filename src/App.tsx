import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const authInfo = useSelector((state: RootState) => state.authInfo);

  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      try {
        if (authInfo.jwt === null && authInfo.isAuthenticated === false) {
          return <Navigate to="/login" />;
        }
      } catch (error) {
        console.error("Error checking token:", error);
      }
    };

    checkTokenAndNavigate();
  }, [authInfo.isAuthenticated, authInfo.jwt]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <PrivateRoute
                isAuthenticated={authInfo.isAuthenticated}
                userId={authInfo.userId}
              >
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
