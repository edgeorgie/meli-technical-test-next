import { render, screen } from '@testing-library/react'
import Navbar from 'components/Navbar/Navbar'
import '@testing-library/jest-dom'
import ProductsProvider from 'context/products'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'


describe('Header', () => {
  it('renders the navbar and breadcrumb', () => {
    // const mock = jest.mock('context/products')
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