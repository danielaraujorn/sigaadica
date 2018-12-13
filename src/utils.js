import axios from "axios";
import { HOST } from "./config";

export var request = axios.create({
  baseURL: HOST,
  timeout: 30000,
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*"
    // Accept: "application/json",
    // "Content-Type": "application/json"
  }
});
