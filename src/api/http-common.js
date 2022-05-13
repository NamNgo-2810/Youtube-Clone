import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: {
    "Content-type": "application/json",
  },
});
