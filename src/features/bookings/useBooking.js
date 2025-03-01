import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    data: booking = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    //by default react query tries to fetch data three times in case if it fails in the begining
    retry: false,
  });

  return { booking, isLoading, error };
}
