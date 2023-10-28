import axios from "axios"; // Library for making HTTP requests
import dayjs from "dayjs"; // Library for working with dates and times
import { toast } from "react-toastify"; // Library for displaying toast notifications

// Create an Axios instance with a base URL. This means that when we use api.get() or other Axios methods, they will automatically use this base URL as the prefix for the URLs we provide.
export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

// Asynchronous function to fetch properties or the custom query function for the useProperties.jsx file
export const getAllProperties = async () => {
  try {
    // Send a GET request to the below endpoint with a timeout
    const response = await api.get("/residency/allresidencies", {
      timeout: 10 * 1000, //the request will time out if it doesn't receive a response within 10 seconds.
    });

    // Check if the response status indicates an error
    if (response.status === 400 || response.status === 500) {
      throw response.data; // Throw an error with response data
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong"); // Display a toast notification for errors
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    // Send a GET request to the below endpoint with a timeout
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000, //the request will time out if it doesn't receive a response within 10 seconds.
    });

    // Check if the response status indicates an error
    if (response.status === 400 || response.status === 500) {
      throw response.data; // Throw an error with response data
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong"); // Display a toast notification for errors
    throw error;
  }
};

export const createUser = async (email /*token*/) => {
  try {
    await api.post(
      `/user/register`,
      { email }
      // can't use jwtCheck because it is blocked by some browsers
      // , {
      //     headers: {
      //         Authorization: `Bearer ${token}`,
      //     }
      // }
    );
  } catch (error) {
    toast.error("Something went wrong, please try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
    // can't use jwtCheck because it is blocked by some browsers
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

//Removing the Booking
export const removeBooking = async (id, email) => {
    try {
      await api.post(
        `/user/cancelBooking/${id}`,
        {
          email,
        },
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
  
      throw error;
    }
  };
  