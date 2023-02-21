const BASE_URL_API = process.env.REACT_APP_URL_API;

const endpoints = {
    destination : `${BASE_URL_API}destinations`,
    crew : `${BASE_URL_API}crew`,
    technology : `${BASE_URL_API}technology`
  
}

export default endpoints