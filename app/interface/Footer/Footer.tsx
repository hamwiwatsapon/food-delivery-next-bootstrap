import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.nav}>
      <Image className={styles.img} src='/logo.svg' alt='logo' width={206} height={101} />
      <div className={styles.divicon}>
        <Link className={styles.icon} href="#twitter">
          <Image className={styles.img} src='/twitter.svg' alt='twitter' width={41} height={41} />
        </Link>
        <Link className={styles.icon} href="#facebook">
          <Image className={styles.img} src='/facebook.svg' alt='facebook' width={41} height={41} />
        </Link>
        <Link className={styles.icon} href="#ig">
          <Image className={styles.img} src='/ig.svg' alt='ig' width={41} height={41} />
        </Link>
      </div>
      <p>Copywright 2020 Bella Onojie.com</p>
    </div>
  )
}

export default Footer