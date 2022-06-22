import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">MODELOS</a></li>
          <li><a href="#">CONTATOS</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
