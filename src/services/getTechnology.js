import axios from "axios";
import endpoints from "./enpoints";

export const getTechnology = async () => {
  try {
    const { data } = await axios.get(endpoints.technology);
    return data;

  } catch (error) {
    console.log(error);
    return error;
  }
};