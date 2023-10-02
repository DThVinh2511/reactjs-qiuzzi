const API_DOMAIN = "https://data-qiuzzi-for-reactjs.vercel.app/";

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  const result = await response.json();
  return result;
};

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(options)
    })
    const result = response.json();
    return result;
};

export const del = async (path) => {
  const response = await fetch(`${API_DOMAIN}${path}` , {
      method: "DELETE",
    })
  const result = await response.json();
  return result;
};

export const patch = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(options)
    });
    const result = await response.json();
    return result;
};

