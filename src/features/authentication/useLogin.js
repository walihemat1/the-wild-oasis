import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as apiLogin } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => apiLogin(email, password),
    onSuccess: (user) => {
      // allows us to set some data manually to the query cache
      queryClient.setQueryData(["user"], user.user);
      // with the replace set to true, we earse the place that we were there earlier
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => toast.error("Incorrect email or password!"),
  });

  return { login, isLoading };
}
