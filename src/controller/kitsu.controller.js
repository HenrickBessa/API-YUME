import axios from 'axios';

const BASE_URL = 'https://kitsu.io/api/edge';

const validatePaginationParams = (page, pageSize) => {
  if (page <= 0 || pageSize <= 0) {
    throw new Error('Page and page size must be positive numbers.');
  }
};

const fetchFromApi = async (endpoint, page , pageSize ) => {
  validatePaginationParams(page, pageSize);

  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        'page[limit]': pageSize,
        'page[offset]': (page - 1) * pageSize,
      },
    });
    return response.data.data.map(item => ({
      id: item.id,
      title: item.attributes.titles.en_jp || 'Title not available',
      synopsis: item.attributes.synopsis,
      coverImage: item.attributes.coverImage?.large,
    }));
  } catch (error) {
    throw new Error(`Error fetching data from Kitsu API (${endpoint}): ${error.message}`);
  }
};

const getAnimeList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const url = `http://localhost:3000/kitsu/manga?page=${page}&pageSize=${pageSize}`;
    const urlanimal = await axios.get(url);
    const animeList = await fetchFromApi('anime', page, pageSize);

    res.json({animeList, urlanimal});
  } catch (err) {
    res.status(500).send('Error fetching anime data from Kitsu API');
  }
};

const getMangaList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const urlManga = `http://localhost:3000/kitsu/anime?page=${page}&pageSize=${pageSize}`;
    const mangaList = await fetchFromApi('manga', page, pageSize);
    res.json({mangaList, urlManga});
  } catch (err) {
    res.status(500).send('Error fetching manga data from Kitsu API');
  }
};

export default {
  fetchFromApi,
  getAnimeList,
  getMangaList
};
