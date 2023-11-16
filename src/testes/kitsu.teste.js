import kitsuController from '../controller/kitsu.controller.js';

const ListaAnime = async (page, pageSize) => {
  return await kitsuController.fetchFromApi('anime', page, pageSize);
};

const ListaManga = async (page, pageSize) => {
  return await kitsuController.fetchFromApi('manga', page, pageSize);
};

ListaManga(1, 10)
  .then(res => console.log('Dados de Mangá:', res))
  .catch(err => console.error('Erro ao buscar dados da API Kitsu (Mangá):', err));

export default {
  ListaAnime,
  ListaManga
};
