import { useProducts } from 'context/products'
import { useRouter } from 'next/router'
import styles from './Breadcrumb.module.scss'

const Breadcrumb = () => {
	const { categories } = useProducts()
	const { pathname } = useRouter() || { pathname: { text: '' } }

	return (
		<nav role='breadcrumb' className={styles['breadcrumb-container']}>
			<p className={styles['breadcrumb__anchors-container']}>
				{pathname === '/'
					? ''
					: categories?.map((categorie) => {
							return (
								<a key={categorie} className={`${categories.at(-1) === categorie ? styles['breadcrumb__anchor--active'] : styles['breadcrumb__anchor']}`}>
									{categories.at(-1) === categorie ? categorie : categorie + ' >'}
								</a>
							)
					  })}
			</p>
		</nav>
	)
}

export default Breadcrumb
