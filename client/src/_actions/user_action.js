import { LOGIN_USER, REGISTER_USER } from "./types";
import axios from "axios";

export function registerUser(dataToSubmit) {
    const request = axios.post("/register/user", dataToSubmit).then((response) => response.data);
  
    return {
      type: REGISTER_USER,
      payload: request,
    };
  }

  export function loginUser(dataToSubmit) {
    const request = axios.post("/login/user", dataToSubmit).then((response) => response.data);
  
    return {
      type: LOGIN_USER,
      payload: request,
    };
  }