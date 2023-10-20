import {
  getCookie
} from "../helpers/Cookie";
import {
  get,
  patch,
  post
} from "../utils/request"


export const getListAnwsers = async () => {
  const userId = getCookie("id");
  const result = await get(`awnsers?userId=${userId}`);
  return result;
}

export const postAnwsers = async (option) => {
  const result = await post('awnsers', option);
  return result;
}
export const putAnwsers = async (option) => {
  const result = await patch('awnsers', option);
  return result;
}

export const getAnwsers = async (id) => {
  const result = await get(`awnsers?limit=10&page=1&_id=${id}`);
  return result;
}