import axios from 'axios';

const BASE_URL = 'https://kitsu.io/api/edge';

const validatePaginationParams = (page, pageSize) => {
  if (page <= 0 || pageSize <= 0) {
    throw new Error('Page and page size must be positive numbers.');
  }
};

export const fetchFromApi = async (endpoint, page, pageSize) => {
  validatePaginationParams(page, pageSize);

  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        'page[limit]': pageSize,
        'page[offset]': (page - 1) * pageSize,
      },
    });

    return response.data.data.map(item => {
      const { small, medium, large, original } = item.attributes.coverImage || {};
      return {
        id: item.id,
        title: item.attributes.titles.en_jp || 'Title not available',
        synopsis: item.attributes.synopsis,
        coverImage: {
          small: small || 'Small image not available',
          medium: medium || 'Medium image not available',
          large: large || 'Large image not available',
          original: original || 'Original image not available'
        },
      };
    });
  } catch (error) {
    throw new Error(`Error fetching data from Kitsu API (${endpoint}): ${error.message}`);
  }
};

