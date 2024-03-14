import styles from './styles.module.css'
import Image from 'next/image'
import Button from '../Button/Button'
type Props = {
  toptitle: string;
  middletitle: string;
  detail: string;
  typebt1: string;
  typebt2: string;
  textbt1: string;
  textbt2: string;
  img: string;
  bg: string;
}

const BlogTop = (props: Props) => {
  return (
    <main>
      <div className={styles.container}>
        <Image className={styles.bg} src={props.bg} alt={props.bg} fill/>
        <div className={styles.content}>
          <h3>{props.toptitle}</h3>
          <h2>{props.middletitle}</h2>
          <h4>{props.detail}</h4>
          <Button type={props.typebt1} text={props.textbt1}/>
          <Button type={props.typebt2} text={props.textbt2}/>
        </div>
        <div className={styles.img} >
          <Image src={props.img} alt='phone' fill/>
          <div className={styles.shadow} />
        </div>
      </div>
      <div className={styles.linediv}>
        <div className={styles.line} />
      </div>
    </main>
  )
}

export default BlogTop