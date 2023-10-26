import React from 'react'
import { useQuery } from 'react-query'
import { getAllProperties } from '../utils/api'

export const useProperties = () => {

  const {data, isError, isLoading, refetch} = useQuery(
    "allProperties", 
    getAllProperties,
    {refetchOnWindowFocus: false}
  )
  //As in the below return statement object destructuring is happening hence **curly braces is necessary to give and not () braces**
  return {
    data, isError, isLoading, refetch
  };
};
