import Image from 'next/image'
import Head from 'next/head'
import product_detail_img from 'assets/images/product_detail.png'
import styles from 'sass/ProductDetail.module.scss'

const ProductDetail = () => {
  return (
		<main className={styles['product-detail-container']}>
			<Head>
				<title>Prueba técnica - MELI | Edwin Jorge</title>
				<meta name="description" content="Esta es la solución de Edwin Jorge para la prueba técnica del cargo de Front-end Developer en Mercado Libre." />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className={styles['product-detail-principal']}>
				<div className={styles['product-detail-principal__img']}>
					<Image src={product_detail_img} width={680} alt="Product image" />
				</div>

				<div className={styles['product-detail-principal__info']}>
					<span className={styles['product-detail-principal__info--sold-units']}>Nuevo - 234 vendidos</span>
					<h2 className={styles['product-detail-principal__info--name']}>Nombre del producto</h2>
					<h1 className={styles['product-detail-principal__info--price']}>$ 1.000</h1>
					<p className={styles['product-detail-principal__info--cta']} href="#">
						Comprar
					</p>
				</div>
			</section>
			<section className={styles['product-detail-content']}>
				<h3 className={styles['product-detail-content__title']}>Description</h3>
				<p className={styles['product-detail-content__paragraph']}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero ullam porro sint quasi excepturi suscipit perspiciatis in, non accusantium nulla at velit asperiores error! Aperiam
					voluptatem sint laudantium placeat?
				</p>
			</section>
		</main>
	)
}

export default ProductDetail