import axios from "axios";
import endpoints from "./enpoints";

export const getCrewMember = async (name) => {
  try {
    const { data } = await axios.get(`${endpoints.crew}?name=${name}`);
    return data
  } catch (error) {
    console.log(error);
    return error;
  }
};