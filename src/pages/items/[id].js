import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { searchProductDetail } from 'services/searchProductDetail'
import Image from 'next/image'
import Head from 'next/head'
import styles from 'sass/ProductDetail.module.scss'

const ProductDetail = () => {
	const [details, setDetails] = useState([])
	const { query: { id } } = useRouter()

	useEffect(() => {
		(async () => {
			const results = await searchProductDetail(id)
			setDetails(results)
		})()

	}, [id])

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
					<Image src={details?.picture} width={680} height={680} alt={details?.title} />
				</div>

				<div className={styles['product-detail-principal__info']}>
					<span className={styles['product-detail-principal__info--sold-units']}>
						{details.condition ? 'Nuevo' : 'Usado'} - {details.sold_quantity} vendidos
					</span>
					<h2 className={styles['product-detail-principal__info--name']}>{details.title}</h2>
					<h1 className={styles['product-detail-principal__info--price']}>$ {details.price?.amount}</h1>
					<p className={styles['product-detail-principal__info--cta']} href="#">
						Comprar
					</p>
				</div>
			</section>
			<section className={styles['product-detail-content']}>
				<h3 className={styles['product-detail-content__title']}>Descripción del producto</h3>
				<p className={styles['product-detail-content__paragraph']}>{details?.description}</p>
			</section>
		</main>
	)
}

export default ProductDetail