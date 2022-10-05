import { useState, createContext, useContext } from 'react'

const ProductsContext = createContext()

export const useProducts = () => {
	const products = useContext(ProductsContext)
	return products
}

const ProductsProvider = ({ children }) => {
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])

	return (
		<ProductsContext.Provider
			value={{
				categories,
				setCategories,
				products,
				setProducts,
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}

export default ProductsProvider
