const API_SEARCH_ENDPOINT = 'https://meli-technical-test-backend-production-78cf.up.railway.app/api/items?q=:'

export const searchItem = async (query) => {
  const res = await fetch(`${API_SEARCH_ENDPOINT}${query}`).then(res => res.json())

  return res
}
