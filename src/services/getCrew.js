import axios from "axios";
import endpoints from "./enpoints";

export const getCrew = async () => {
  try {
    const { data } = await axios.get(endpoints.crew);
    return data;

  } catch (error) {
    console.log(error);
    return error;
  }
};
