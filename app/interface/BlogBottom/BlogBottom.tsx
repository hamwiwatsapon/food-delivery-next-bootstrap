import styles from './styles.module.css'
import Image from 'next/image'
import Button from '../Button/Button'
type Props = {
  middletitle: string;
  detail: string;
  typebt1: string;
  typebt2: string;
  textbt1: string;
  textbt2: string;
  bg: string;
}

const BlogBottom = (props: Props) => {
  return (
    <main>
      <div className={styles.container}>
        <Image className={styles.bg} src={props.bg} alt={props.bg} fill/>
        <div className={styles.content}>
          <h2>{props.middletitle}</h2>
          <h4>{props.detail}</h4>
          <Button type={props.typebt1} text={props.textbt1}/>
          <Button type={props.typebt2} text={props.textbt2}/>
        </div>
      </div>
    </main>
  )
}

export default BlogBottom