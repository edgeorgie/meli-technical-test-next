import styles from './Breadcrumb.module.scss'

const Breadcrumb = () => (
	<nav className={styles['breadcrumb-container']}>
		<p className={styles['breadcrumb__anchors-container']}>
      <a className={styles['breadcrumb__anchor']}>Categoría</a>
			<a className={styles['breadcrumb__anchor--active']}>Categoría</a>
		</p>
	</nav>
)

export default Breadcrumb
