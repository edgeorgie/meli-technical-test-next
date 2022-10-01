import Image from "next/image"
import product from 'assets/images/product.png'
import styles from './Product.module.scss'
const Product = () => {
  return (
		<>
			<article className={styles['product-container']}>
				<div className={styles['product-info-container']}>
					<Image className={styles['product-info-container__img']} src={product} width={180} height={180} alt="Producto" />
					<div className={styles['product-info-content']}>
						<h3 className={styles['product-info-content__title']}>$ 2.000</h3>
						<p className={styles['product-info-description']}>Lorem ipsum dolor sit, amet Lorem ipsum dolor sit, amet Lorem ipsum dolor sit, amet</p>
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