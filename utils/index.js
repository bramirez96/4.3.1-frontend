import axios from "axios";
const a = () => {
  return axios.create({ baseURL: "http://localhost:5000" });
};

export const login = creds => {
  return a().post("/auth/login", creds);
};
export const register = creds => {
  return a().post("/auth/register", creds);
};
export const logout = () => {
  return a().get("/auth/logout");
};
export const getUsers = () => {
  return a().get("/api/users");
};
