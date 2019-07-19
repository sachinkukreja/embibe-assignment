import React from 'react'
import styles from './Dashboard.module.css'
import { Toolbar } from '../../Components/Toolbar/Toolbar';
import { Card } from '../../Components/Card/Card';
import { BootstrapContainerandRow } from '../../Components/BootstrapContainerandRow';



class Dashboard extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            loading:true,
            students:[]
        }
    }

    componentDidMount(){
        fetch("https://api.myjson.com/bins/1dlper").then(response=>{

        })
    }

    render(){
        if (!this.state.loading)
        return (<h2>Loading...</h2>)

        return(
            <div className={styles.container}>
            <Toolbar />
            <BootstrapContainerandRow>
           {}
            </BootstrapContainerandRow>
            
                        </div>
        )
    }

}
export default Dashboard