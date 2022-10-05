import { useState, createContext, useContext } from 'react'

const ProductsContext = createContext()

export const useProducts = () => {
	const products = useContext(ProductsContext)
	return products
}

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	const [categories, setCategories] = useState([])

	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts,
				categories,
				setCategories,
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}

export default ProductsProvider
