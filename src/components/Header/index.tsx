import Link from 'next/link';

import styles from './header.module.scss'

export default function Header() {
  return (
    <Link href="/">
      <a>
        <img className={styles.logo} src="/images/Logo.svg" alt="logo" />
      </a>
    </Link>
  )
}
