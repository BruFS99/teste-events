import api from 'api';

function getHeroes() {
  return api.get('/characters');
}

export default {
  getHeroes,
};
