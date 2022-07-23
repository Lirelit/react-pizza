import React from 'react'
import styles from './style.module.scss'

console.log(styles);

export default function NotFoundBlock() {
  return (
    <h2 className={styles.root}>Ничего не найдено :( </h2>
  )
}
