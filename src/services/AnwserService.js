import { getCookie } from "../helpers/Cookie";
import { get, post } from "../utils/request"


export const getListAnwsers = async () => {
  const userId = getCookie("id");
  const result = await get(`anwsers?userId=${userId}`);
  return result;
}

export const postAnwsers = async (option) => {
  const result = await post('anwsers', option);
  return result;
}

export const getAnwsers = async (id) => {
  const result = await get(`anwsers/${id}`);
  return result;
}