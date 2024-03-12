import styles from './page.module.css'
import { Poppins, Montserrat } from 'next/font/google'

const poppins = Poppins({
  weight: ['300','400','500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  weight: ['300','400','500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const Home = () => {
  return (
    <main className={`${poppins.className},${montserrat.className},${styles.main}`}>
      TEST
    </main>
  )
}

export default Home