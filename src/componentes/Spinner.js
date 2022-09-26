import styles from "./css/Spinner.module.css"
import { FaSpinner } from 'react-icons/fa';
import React from 'react'

export default function Spinner() {
  return (
    <div className={styles.spinner}>
        <FaSpinner size={60} className={styles.movimiento}/>
    </div>
  )
}
