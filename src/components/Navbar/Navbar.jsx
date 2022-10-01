import Image from 'next/image'
import Link from 'next/link'
import logo from 'assets/images/Logo_ML@2x.png'
import search_icon from 'assets/icons/search_icon.png'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
		<header>
			<nav className={styles['navbar-container']}>
				<Link href="/">
					<a>
						<Image width={60} height={38} src={logo} alt="Logo de Mercado Libre, manos estrechadas" />
					</a>
				</Link>
				<form className={styles['navbar-form']}>
					<input className={styles['navbar-form__input']} type="text" placeholder="Nunca dejes de buscar" />
					<button className={styles['navbar-form__button']} type="submit">
						<Image width={20} height={20} src={search_icon}></Image>
					</button>
				</form>
			</nav>
			<Breadcrumb />
		</header>
	)
}

export default Navbar