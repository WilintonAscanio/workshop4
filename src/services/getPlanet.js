import axios from "axios";
import endpoints from "./enpoints";

export const getPlanet = async (name) => {
  try {
    const { data } = await axios.get(`${endpoints.destination}?name=${name}`);
    return data
  } catch (error) {
    console.log(error);
    return error;
  }
};
