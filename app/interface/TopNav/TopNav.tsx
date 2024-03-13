'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import { Nav, NavLink, NavItem } from 'react-bootstrap';
import { useState } from 'react';

type Props = {
  current: string;
}

const TopNav = (props: Props) => {
  const [activeKey, setActiveKey] = useState(props.current);

  const handleSelect = (selectedKey:string|null) => {
    if (selectedKey !== null) {
      setActiveKey(selectedKey);
    }
  };

  return (
    <div className={styles.nav}>
      <Image className={styles.img} src='/logo.svg' alt='logo' width={206} height={101} />
      <Nav className={styles.linkbar} defaultActiveKey='/' onSelect={handleSelect}>
        <NavItem>
          <NavLink className={activeKey === '/' ? styles.active : styles.link} href='/'>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeKey === '/product' ? styles.active : styles.link} href='/product'>
            Product
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeKey === '/faq' ? styles.active : styles.link} href='/faq'>
            Faq
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeKey === '/contact' ? styles.active : styles.link} href='/contact'>
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default TopNav;
