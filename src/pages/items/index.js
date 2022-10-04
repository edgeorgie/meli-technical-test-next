import Product from "components/Product/Product"
import styles from 'sass/Items.module.scss'

const Items = () => {
	return (
		<main className={styles['items-container']}>
			<Head>
				<title>Prueba técnica - MELI | Edwin Jorge</title>
				<meta name="description" content="Esta es la solución de Edwin Jorge para la prueba técnica del cargo de Front-end Developer en Mercado Libre." />
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