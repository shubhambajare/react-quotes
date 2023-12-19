export const SEARCH_BY_CATEGORY = 'search by category';
export const SEARCH_BY_QUERY = 'search by query';

export const searchByCategory = (category) => ({ category, type: SEARCH_BY_CATEGORY })
export const searchByQuery = (query) => ({ query, type: SEARCH_BY_QUERY })