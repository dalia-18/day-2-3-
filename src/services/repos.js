import {client} from './client';

export async function getAllRepos(pageNumber = 1) {
  try {
    const response = await client.get('/search/repositories', {
      params: {
        q: 'create:2021-01-01',
        sort: 'stars',
        order: 'desc',
        page: pageNumber,
      },
    });
    if (response) {
      return response.data.items;
    } else {
      [];
    }
  } catch (error) {
    console.log('get repos err', error);
  }
}

//https://api.github.com/search/repositories?q=create:%3E2021-01-01&sort=stars&order=desc&page=1
