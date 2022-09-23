import axios from "axios";

export const updateAvatar = (url, info, file, callback) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("name", info.name);
  axios
    .post(url, formData)
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      callback(error);
    });
};
export const loginUser = (url, body, callback) => {
  axios
    .post(url, body)
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      callback(error);
    });
};
