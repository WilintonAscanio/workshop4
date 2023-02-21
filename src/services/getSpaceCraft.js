import axios from "axios";
import endpoints from "./enpoints";

export const getSpaceCraft = async (name) => {
  try {
    const { data } = await axios.get(`${endpoints.technology}?name=${name}`);
    return data
  } catch (error) {
    console.log(error);
    return error;
  }
};