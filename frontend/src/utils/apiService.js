import apiConfig from "../config/apiConfig.json";
import axios from "axios";

const APIService = {
  fetchPopular: async () => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios(`${apiConfig.API_ROOT}/movies/popular`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
      return e;
    }
  },
  fetchMovieById: async (movieId) => {},
  login: async (email, password) => {
    const { data } = await axios.post(
      `${apiConfig.API_ROOT}/auth/authenticate`,
      {
        email,
        password,
      }
    );
    return data;
  },
  register: async (email, password, name, dateOfBirth) => {
    const { data } = await axios.post(`${apiConfig.API_ROOT}/auth/register`, {
      email,
      password,
      name,
      dateOfBirth,
    });
    return data;
  },
};

export default APIService;
