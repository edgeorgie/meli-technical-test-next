import { useRef, useState } from 'react'
import { searchItem } from 'services/searchItem'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'assets/images/Logo_ML@2x.png'
import search_icon from 'assets/icons/search_icon.png'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import styles from './Navbar.module.scss'

const Navbar = () => {
	const [items, setItems] = useState([])
	const searchRef = useRef()

	const handleChange = async () => {
		const query = searchRef.current.value
		const res = await searchItem(query)

		setItems(res)
	}

  return (
		<header>
			<nav className={styles['navbar-container']}>
				<Link href="/">
					<a>
						<Image width={60} height={38} src={logo} alt="Logo de Mercado Libre, manos estrechadas" />
					</a>
				</Link>
				<form className={styles['navbar-form']}>
					<input ref={searchRef} className={styles['navbar-form__input']} type="text" placeholder="Nunca dejes de buscar" onChange={handleChange} />
					<button className={styles['navbar-form__button']} type="submit">
						<Image width={20} height={20} src={search_icon}></Image>
					</button>
				</form>
			</nav>
			{Boolean(items.length) && (
				<div className={styles['navbar-search-sugestions']}>
					<ul>
						{items.map((item) => {
							return (
								<li key={item.id}>
									<Link href={`items/${item.id}`}>
										<a>{item.title}</a>
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
			)}
			<Breadcrumb />
		</header>
	)
}

export async function getServerSideProps(context) {
	const { query } = context
	const { q = '' } = query

	const { results } = await searchItem({ query: q })

	return {
		query: q,
		results,
	}
}

export default Navbar