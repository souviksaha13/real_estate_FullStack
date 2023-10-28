import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/footer";
import Header from "../Header/Header"
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import UserDetailContext from "../../Context/userDetailContext";
import useFavourites from "../../Hooks/useFavourites";
import useBookings from "../../Hooks/useBookings";

const Layout = () => {

  useBookings()
  useFavourites()

  const {isAuthenticated, user, getAccessTokenWithPopup} = useAuth0();
  const {setUserDetails} = useContext(UserDetailContext);

  const {mutate} = useMutation({
    mutationKey: [user?.email],
    mutationFn: (/*token*/) => createUser(user?.email /*, token */)
  })

  useEffect(() => {

    const getTokenAndRegister = async() => {
      // const res = await getAccessTokenWithPopup({
      //   authorizationParams: {
      //     audience: "http://localhost:8000",
      //     scope: "openid profile email"
      //   },
      // });
      // localStorage.setItem("access_token", res)
      // setUserDetails((prev) => ({...prev, token: res}))
      // console.log(res); 
      // mutate(res)
    };

    // isAuthenticated && getTokenAndRegister();
    isAuthenticated && mutate()
  }, [isAuthenticated]);

  return (
    <>
      <div style={{background:"black", overflow:"hidden"}}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
