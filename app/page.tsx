import styles from "./page.module.css"
import BlogTop from "@/app/interface/BlogTop/BlogTop"
import BlogBottom from "./interface/BlogBottom/BlogBottom"
import TopNav from "@/app/interface/TopNav/TopNav"
import ContentBlog from "@/app/interface/ContentBlog/ContentBlog"
const Home = () => {
  return (
    <main className={styles.main}>
      <TopNav current="/"/>
      <BlogTop 
        toptitle="Food app"
        middletitle="Why stay hungry when you can order form Bella Onojie"
        detail="Download the bella onoje's food app now on"
        typebt1="oval"
        typebt2="suboval"
        textbt1="Playstore"
        textbt2="App store"
        bg="/homebg.svg"
        img="/phone.png"
      />
      <div className={styles.heading}>
        <h1>How the app works</h1>
      </div>
      <ContentBlog 
        title="Create/login to an existing account to get started" 
        process="Create an account" 
        detail="An account is created with your email and a desired password" 
        reverse={false} 
        img="/create_act.png"
      />
      <ContentBlog 
        title="Shop for your favorites meal as e dey hot." 
        process="Explore varieties" 
        detail="Shop for your favorite meals or drinks and enjoy while doing it." 
        reverse 
        img="/varieties.png"
      />
      <ContentBlog 
        title="When you done check out and get it delivered" 
        process="Checkout" 
        detail="When you done check out and get it delivered with ease." 
        reverse={false}
        img="/checkout.png"
      />
      <BlogBottom 
        middletitle="Download the app now."
        detail="Available on your favorite store. Start your premium experience now"
        typebt1="square"
        typebt2="subsquare"
        textbt1="Playstore"
        textbt2="App store"
        bg="/bottombg.svg"
      />
    </main>
  )
}

export default Home