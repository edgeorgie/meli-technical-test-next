import Navbar from 'components/Navbar/Navbar'
import ProductsProvider from 'context/products'
import 'sass/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
		<ProductsProvider>
			<Navbar />
			<Component {...pageProps} />
		</ProductsProvider>
	)
}

export default MyApp
