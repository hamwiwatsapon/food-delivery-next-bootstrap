import React from 'react';
import styles from './styles.module.css';

type Props = {
  type: string;
  text: string;
};

const Button: React.FC<Props> = ({ type, text }) => {
  const buttonClass = styles[type] || '';
  return <button className={buttonClass}>{text}</button>;
};

export default Button;
