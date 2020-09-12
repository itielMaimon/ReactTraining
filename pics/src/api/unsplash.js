import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Uo0Q-ScuPgrbJGAE2yQ1ivjq45SR05Z_YiNWtrQWizU",
  },
});
