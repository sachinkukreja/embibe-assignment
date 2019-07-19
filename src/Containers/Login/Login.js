import React from 'react'

class Login extends React.Component{

handleLogin = (event)=>{
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
        <form>
        <input type="text" ref="username"/>
        <input type="password" ref="password"/>
        <div onClick={e=>this.handleLogin(e)}>Login Button</div>
        </form>
    </div>)

}
}
export default Login