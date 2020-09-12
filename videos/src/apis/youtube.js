import axios from "axios";

const KEY = "AIzaSyBnk-SeXR_xqFxZSJp0CdWHgGR6B1dWTqg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
