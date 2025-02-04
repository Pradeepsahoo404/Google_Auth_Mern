import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GoogleLogin from "./GoogleLogin.jsx";
import Dashboard from "./Dashboard.jsx";
import PageNotFound from "./PageNotFound.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RefreshHandler from "./RefreshHandler.jsx";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="264344682681-n95vvv1h7vpsdcfkc4bqn53qatu2169s.apps.googleusercontent.com">
        <GoogleLogin />
      </GoogleOAuthProvider>
    );
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />

        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
