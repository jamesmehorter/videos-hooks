import axios from "axios";

const KEY = "AIzaSyDl8LC33Crmnd_Q3BCDW1vLag4Ua_733lA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
