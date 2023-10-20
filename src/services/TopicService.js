import {
  get
} from "../utils/request"

export const getListTopic = async () => {
  const result = await get('topics');
  return result;
}

export const getQuestion = async (id) => {
  const result = await get(`questions?limit=100&page=1&topicId=${id}`);
  return result;
}

export const getTopic = async (id) => {
  const result = await get(`topics?limit=100&page=1&_id=${id}`);
  return result;
}