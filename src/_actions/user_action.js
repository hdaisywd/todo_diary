import { LOGIN_USER, REGISTER_USER } from "./types";
import axios from "axios";

export function registerUser(dataToSubmit) {
    const request = axios.post("/api/users/register", dataToSubmit).then((response) => response.data);
  
    return {
      type: REGISTER_USER,
      payload: request,
    };
  }