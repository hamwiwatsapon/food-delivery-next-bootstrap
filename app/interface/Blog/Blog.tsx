import styles from './styles.module.css'
import Image from 'next/image'
import Button from '../Button/Button'
type Props = {}

const Blog = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bgdiv}>
        <Image className={styles.bg} src="/homebg.svg" alt='homebg' fill/>
      </div>
      <div className={styles.content}>
        <h3>Food app</h3>
        <h2>Why stay hungry when</h2>
        <h2>you can order form Bella Onojie</h2>
        <h4>Download the bella onoje&apos;s food app now on</h4>
        <Button type='oval' text='Playstore'/>
        <Button type='suboval' text='App store'/>
      </div>
    </div>
  )
}

export default Blog