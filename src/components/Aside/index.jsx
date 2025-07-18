import Image from 'next/image';
import styles from './aside.module.css';
//aaaaaa

import logo from './logo.png';

export const Aside = () => {
  return (<aside className={styles.aside}>
      <Image src={logo} alt='th dev'/>

  </aside>)
}