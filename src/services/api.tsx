import axios from "axios";

const baseUrl = "http://localhost:8080/";

export const api = {
  createUser: (body) => axios.post(baseUrl + "user/create", body),
  authenticateUser: (body) => axios.post(baseUrl + "user/authenticate", body)
};
