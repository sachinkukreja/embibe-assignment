import React from 'react'
import styles from './Toolbar.module.css'

export const Toolbar = (props) =>{
    return ( <header className={styles.toolbar}>
        <p className={styles.toolbarText}>{props.title?props.title:''}</p>
    </header>)
    }