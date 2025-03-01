import React, { useEffect } from "react";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";

import FullPage from "../../ui/FullPage";
import Spinner from "../../ui/Spinner";

const LoginProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated && !isLoading) navigate("/dashboard");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!isAuthenticated) return children;
};

export default LoginProtectedRoute;
