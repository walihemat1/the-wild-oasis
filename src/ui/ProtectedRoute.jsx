import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "./Spinner";
import FullPage from "./FullPage";

// const FullPage = styled.div`
//   height: 100vh;
//   background-color: var(--color-grey-50);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is No authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },

    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
