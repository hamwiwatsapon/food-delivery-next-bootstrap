import Image from 'next/image'
import styles from './styles.module.css'
import { reverse } from 'dns';

type Props = {
  title: string;
  process: string;
  detail: string;
  img: string;
  reverse: boolean;
}

const ContentBlog = (props: Props) => {

  if (props.reverse) {
    return (
      <div className={styles.container_reverse}>
        <Image className={styles.shadow} src={props.img} alt="create_act" width={302} height={525}/>
        <div className={styles.content_reverse}>
          <h3 className={styles.orange}>{props.process}</h3>
          <h2>{props.title}</h2>
          <h4 className={styles.gray}>{props.detail}</h4>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Image className={styles.shadow} src={props.img} alt="create_act" width={302} height={525}/>
      <div className={styles.content}>
        <h3 className={styles.orange}>{props.process}</h3>
        <h2>{props.title}</h2>
        <h4 className={styles.gray}>{props.detail}</h4>
      </div>
    </div>
  )
}

export default ContentBlog