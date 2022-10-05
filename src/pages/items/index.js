import { useProducts } from "context/products"
import Product from "components/Product/Product"
import Head from "next/head"
import styles from 'sass/Items.module.scss'

const Items = () => {
	const { products } = useProducts()

	return (
		<main className={styles['items-container']}>
			<Head>
				<title>Prueba técnica - MELI | Edwin Jorge</title>
				<meta name="description" content="Esta es la solución de Edwin Jorge para la prueba técnica del cargo de Front-end Developer en Mercado Libre." />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{
				products.map(product => {
					return (
						<Product key={product.id} id={product.id} picture={product.picture} price={product.price} title={product.title} free_shipping={product.free_shipping}/>
					)
				})
			}
		</main>
	)
}

export default Items