import { useState } from "react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from "../../Hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { checkFavourites, updateFavourites } from "../../utils/common";
import { useContext } from "react";
import UserDetailContext from "../../Context/userDetailContext";
import { toFav } from "../../utils/api";
import { useEffect } from "react";

export const Heart = ({id}) => {
    const [heartColor, setHeartColor] = useState("white")
    const {validateLogin} = useAuthCheck()
    const {user} = useAuth0()

    const {
        userDetails: { favourites },
        setUserDetails,
      } = useContext(UserDetailContext);

    const {mutate} = useMutation({
        mutationFn: ()=>toFav(id, user?.email),
        onSuccess: ()=> {
            setUserDetails((prev)=> (
                {
                    ...prev,
                    favourites: updateFavourites(id, prev.favourites)
                }
            ))
        }
    })

    useEffect(() => {
      setHeartColor(()=> checkFavourites(id,favourites))
    }, [favourites])
    

    const handleLike = ()=>{
        if(validateLogin()){
            mutate()
            setHeartColor((prev)=>prev === "#fa3e5f"?"white" : "#fa3e5f")
        }
    }


  return <AiFillHeart size={24} color={heartColor} onClick={(e)=>{
    e.stopPropagation()
    handleLike()
  }} />;
};
