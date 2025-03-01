import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Guest with #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
  });

  return { mutate, isLoading };
}
