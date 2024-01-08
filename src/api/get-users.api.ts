import axios from "axios";
import { TUser } from "../types/user.type";

const axiousInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
});

export async function getUsers(): Promise<TUser[]> {
  return await axiousInstance
    .get("/users")
    .then((res) => Promise.resolve(res.data));
}
