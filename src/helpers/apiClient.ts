import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
  timeout: 5000,
  withCredentials: true,
});

const get = instance.get;

const post = instance.post;

const apiClient = { get, post };

export default apiClient;
