import { useRouter } from "next/router"
import Image from "next/image"
import styles from './Product.module.scss'

const Product = ({ id, picture, price, title, free_shipping }) => {
	const router = useRouter()

	const handleClick = () => router.push(`/items/${id}`)

  return (
		<>
			<article onClick={handleClick} className={styles['product-container']}>
				<div className={styles['product-info-container']}>
					<Image className={styles['product-info-container__img']} src={picture} width={180} height={180} alt="Producto" />
					<div className={styles['product-info-content']}>
						<h3 className={styles['product-info-content__title']}>
							${price.amount} {price.currency}
							<span className={`${free_shipping ? styles.show : styles.none}`}></span>
						</h3>

						<p className={styles['product-info-description']}>{title}</p>
					</div>
				</div>
				<div className={styles['product-place']}>
					<span>Capital Federal</span>
				</div>
			</article>
			<hr />
		</>
	)
}

export default Product