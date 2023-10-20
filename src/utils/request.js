const API_DOMAIN = "http://localhost:8080/v1/api/";
// "http://localhost:3002/"

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    // mode: 'no-cors',
  });
  const result = await response.json();
  console.log(API_DOMAIN + path, result);
  return result.data;
};

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    // mode: 'no-cors',
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
    // mode: 'no-cors',
    method: "DELETE",
  })
  const result = await response.json();
  console.log(API_DOMAIN + path, result);
  return result.data;
};

export const patch = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    // mode: 'no-cors',
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  });
  const result = await response.json();
  console.log(API_DOMAIN + path, result);
  return result.data;
};