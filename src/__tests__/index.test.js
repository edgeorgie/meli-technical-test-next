import { render, screen } from '@testing-library/react'
import Navbar from 'components/Navbar/Navbar'
import ProductsProvider from 'context/products'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import '@testing-library/jest-dom'
import Items from 'pages/items'

describe('Header', () => {
  it('renders the navbar and breadcrumb', () => {
    render(
      <ProductsProvider>
        <Navbar />
        <Breadcrumb />
      </ProductsProvider>
    )
    
    const header = screen.getByRole('header')

		console.log(header)
	})
})

describe('Product list', () => {
	it('renders the product list', () => {
		render(
			<ProductsProvider>
				<Items />
			</ProductsProvider>
		)

		const items = screen.getByRole('products-list')

		console.log(items)
	})
})