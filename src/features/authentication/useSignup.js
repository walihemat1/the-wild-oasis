import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    // mutationFn: (data) => signupApi(data),
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please very the new account from the user's email address"
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { signup, isLoading };
}
