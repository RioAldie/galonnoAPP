/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component, Fragment } from "react";
 import "./Login.css";
import sweet from 'sweetalert2';
import {useNavigate,NavLink} from 'react-router-dom';
import Admin from "../Admin";
import Store from "../../store/Store";

        
class Login extends Component{
    state = {
        auth:{
            username :"a",
            password : 'a' 
        },
        formLogin:{
            username:'',
            pass:''
        }
        
    }
    
    alertCek = () =>{
        sweet.fire({
            position: 'top',
            icon: 'success',
            title: 'Welcome Admin :)',
            showConfirmButton: false,
            timer: 1500
          })
    }
    handleAdmin = (event)=>{
        
        let admin = {...this.state.formLogin};
        admin[event.target.name] = event.target.value;
        
        this.setState({
            formLogin: admin
        });
        
        
   
    }
    
  
    handleLogin (){
        
        const navigate = useNavigate();
        navigate('/');
        console.log('x')
        //  if(this.state.auth.username === this.state.formLogin.username && this.state.auth.password === this.state.formLogin.pass){ 
            
           
            
            
        //  }else{
        //     alert("gagal")
        // }
    }
    
    render(){
       
        
        return <Fragment>
            <section className="login">

            
            <div id="login-container" className="login-container">
                
                <div className="form-login"> 
            <h2 className="log-text">Login</h2>
            <form action="" className="formLogin">  
                <div className="logInput">
                    <label for="username" className="labLogin">Username</label>
                    <input type="text"  name="username" className="login-input" onChange={this.handleAdmin} autoComplete="off"/>
                    
                </div>
                <div className="logInput">
                    <label for="pass" className="labLogin">Password</label>
                     <input type="password"  name="pass" className="login-input"
                     autoComplete="off"  onChange={this.handleAdmin} />
                     
                </div>
                <NavLink to="/admin" >
                <div className="sub-login"  >Login</div>
                </NavLink>
            </form>
        </div>
        </div>
        </section> 
    
        {/* <Routes>
                 <Route path="/min" exact element={<Admin />} /> 
        </Routes> */}
  
           
        </Fragment> 
    }
}
export default Login;