const API_DOMAIN = "https://mongodbsdsad.vercel.app/v1/api/";
// "http://localhost:3002/"

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path, {});
  const result = await response.json();
  return result.data;
};

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  })
  const result = await response.json();
  console.log(API_DOMAIN + path, result);
  return result.data;
};

export const del = async (path) => {
  const response = await fetch(`${API_DOMAIN}${path}`, {
    method: "DELETE",
  })
  const result = await response.json();
  return result.data;
};

export const patch = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  });
  const result = await response.json();
  return result.data;
};