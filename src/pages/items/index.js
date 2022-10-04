import Product from "components/Product/Product"
import Head from "next/head"
import styles from 'sass/Items.module.scss'

const Items = () => {
	return (
		<main className={styles['items-container']}>
			<Head>
				<title>Prueba técnica - MELI | Edwin Jorge</title>
				<meta name="description" content="Esta es la solución de Edwin Jorge para la prueba técnica del cargo de Front-end Developer en Mercado Libre." />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Product />
			<Product />
			<Product />
			<Product />
		</main>
	)
}

export default Items