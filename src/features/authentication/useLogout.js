import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { logout as logoutApi } from "../../services/apiAuthentication";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading: isLogginOut } = useMutation({
    mutationFn: logoutApi,
    // with the replace set to true, we earse the place that we were there earlier
    onSuccess: (user) => {
      navigate("/login", { replace: true });
      // allows us to remove all data/queries manually from the query cache
      queryClient.removeQueries();
    },
    onError: (err) => toast.error(err),
  });

  return { logout, isLogginOut };
}
