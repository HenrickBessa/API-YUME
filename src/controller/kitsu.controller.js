import {fetchFromApi} from '../services/kitsu.api.js';

export const getAnimeList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const animeList = await fetchFromApi('anime', page, pageSize);

    res.json({ animeList });
  } catch (err) {
    res.status(500).send('Error fetching anime data from Kitsu API');
  }
};

export const getMangaList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const mangaList = await fetchFromApi('manga', page, pageSize);

    res.json({ mangaList });
  } catch (err) {
    res.status(500).send('Error fetching manga data from Kitsu API');
  }
};

