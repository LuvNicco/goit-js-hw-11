import axios from "axios";

const API_KEY = "57649118-62b94d4ad4ce8d06ecb5f28ce";

export function getImagesByQuery(query) {
  return axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  }).then(response => response.data);
}