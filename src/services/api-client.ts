import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1dcd9fd6cdd841fb8804f8891706642e",
  },
});
