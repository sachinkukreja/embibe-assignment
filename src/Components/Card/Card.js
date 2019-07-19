import React from 'react'
import styles from './Card.module.css'

export const Card = (props) => {
    return (<div className={props.className }>
        <p className={styles.title}>{props.title?props.title:''}</p>
        <div className={styles.card}>
            {props.children}
        </div>
    </div>)
}
