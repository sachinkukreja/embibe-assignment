import React from 'react'
import styles from './Login.module.css'

class Login extends React.Component{

handleLogin = ()=>{
   if(this.refs.username.value === "batman" && this.refs.password.value === "brucewayne")
   {
        document.cookie = "EmbibeloginCookie=true;path=/"
        this.props.history.push('/dashboard')
   }
   else{
       alert("Incorerct Id password")
   }
}

render(){
    return (<div>
        <form className={styles.form} >
        <input className={styles.input} placeholder="Username" type="text" ref="username"/>
        <input className={styles.input} placeholder="Password" type="password" ref="password"/>
        <div className={styles.button} onClick={e=>this.handleLogin(e)}>Login</div>
        </form>
    </div>)

}
}
export default Login