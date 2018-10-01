import apiConfig from '../config/api';

const sendRequest = (url, method = 'GET') =>
  fetch(`${apiConfig.endpoint}${url}`, {
    method,
  })
    .then(res => res.json());

const get = url => sendRequest(url);
const remove = url => sendRequest(url, 'DELETE');

export default {
  get,
  remove,
};
