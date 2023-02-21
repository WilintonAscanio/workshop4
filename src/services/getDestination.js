import axios from "axios";
import endpoints from "./enpoints";

export const getDestination = async () => {
  try {
    const { data } = await axios.get(endpoints.destination);
    return data;

  } catch (error) {
    console.log(error);
    return error;
  }
};
