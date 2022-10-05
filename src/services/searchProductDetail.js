const API_SEARCH_ENDPOINT = 'https://meli-technical-test-backend-production-78cf.up.railway.app/api/items/'

export const searchProductDetail = async (id) => {
  const res = await fetch(`${API_SEARCH_ENDPOINT}${id}`).then((res) => res.json())

	return res.item
}
