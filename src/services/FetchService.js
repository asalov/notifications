import apiConfig from '../config/api';

const get = url => fetch(`${apiConfig.endpoint}${url}`).then(res => res.json());

export default {
  get,
};
