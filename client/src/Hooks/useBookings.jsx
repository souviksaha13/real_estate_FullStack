import React, { useContext, useEffect, useRef } from "react";
import UserDetailContext from "../Context/userDetailContext.js";
import { useQuery } from "react-query";
import { getAllBookings } from "../utils/api";
import { useAuth0 } from "@auth0/auth0-react";

const useBookings = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const { user } = useAuth0()

  const { data, isLoading, isError } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(user?.email),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, bookings: data })),
    enabled: user !== undefined,
    staleTime: 30000,
  });
  
  return { data, isError, isLoading};
};

export default useBookings;