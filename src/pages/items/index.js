import Product from "components/Product/Product"
import styles from 'sass/Items.module.scss'

const Items = () => {
   return (
			<main className={styles['items-container']}>
				<Product />
				<Product />
				<Product />
				<Product />
			</main>
		)
}

export default Items