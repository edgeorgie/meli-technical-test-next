import Head from 'next/head'
import styles from 'sass/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prueba técnica - MELI | Edwin Jorge</title>
        <meta name="description" content="Esta es la solución de Edwin Jorge para la prueba técnica del cargo de Front-end Developer en Mercado Libre." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export default Home