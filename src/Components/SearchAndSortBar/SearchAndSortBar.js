import React from 'react'
import styles from './SearchAndSortBar.module.css'

export const SearchAndSortBar = (props) =>{
    return(<div>
    <input type="text" placeholder="Search" className={styles.input} onChange={props.searchValueChanged}/>
    </div>)
}