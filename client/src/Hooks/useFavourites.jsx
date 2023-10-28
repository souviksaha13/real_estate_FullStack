import React, { useContext, useEffect, useRef } from "react";
import UserDetailContext from "../Context/userDetailContext.js";
import { useQuery } from "react-query";
import { getAllFav } from "../utils/api";
import { useAuth0 } from "@auth0/auth0-react";

const useFavourites = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { user } = useAuth0()

  const { data, isLoading, isError } = useQuery({
    queryKey: "allFavourites",
    queryFn: () => getAllFav(user?.email),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, favourites: data })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

//   queryRef.current = refetch;

//   useEffect(() => {
//     queryRef.current && queryRef.current();
//   }, [userDetails?.token]);
  
  return { data, isError, isLoading};
};

export default useFavourites;