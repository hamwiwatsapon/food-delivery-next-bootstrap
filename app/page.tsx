import styles from "./page.module.css"
import Blog from "@/app/interface/Blog/Blog"
import TopNav from "@/app/interface/TopNav/TopNav"

const Home = () => {
  return (
    <main className={styles.main}>
      <TopNav current="/"/>
      <Blog />
    </main>
  )
}

export default Home