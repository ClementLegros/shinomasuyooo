import axios from "axios";
export default axios.create({
  baseURL: "https://shinomasuyo.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
