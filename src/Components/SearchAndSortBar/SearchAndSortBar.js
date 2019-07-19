import React from 'react'
import styles from './SearchAndSortBar.module.css'

export const SearchAndSortBar = (props) =>{
    return(<div>
    <input type="text" placeholder="Search" className={styles.input} onChange={props.searchValueChanged}/>
    <div className={styles.smallButton} onClick={props.toggleAlphabeticalSort}>{"A <-> Z"}</div>
    <div className={styles.smallButton} onClick={props.toggleMarksSort}>{"1 <-> 100"}</div>
    </div>)
}