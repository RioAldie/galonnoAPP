import React, { Component, Fragment } from "react";
import Home from "../home/Home";
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,Routes
  } from "react-router-dom";
import Store from "../store/Store";
import Admin from "../admin/Admin";
import Login from "../admin/Login/Login";
import ListProduk from "../admin/List/ListProduk";
import ListOrder from "../admin/List/ListOrder";
import NewProduk from "../admin/List/NewProduk";

class Head extends Component{
      scroll = ()=>{
                    
                window.addEventListener("scroll",function(){
        var header = document.getElementById('header');
        header.classList.toggle("sticky",window.scrollY > 0);
        })
          }
          componentDidMount(){
              this.scroll();
          }
    render(){
        return  <Fragment>
            <header id="header">
                <div className="logo">
                    <Link to="/home" className="a"><img src="/images/logo.png" alt="" /></Link>
                </div>
                <nav className="nav">
                    <Link to="/home"  className="a">Home</Link>
                    <Link to="/Store"  className="a">Store</Link>
                    <Link to="/Admin"  className="a">Dashboard</Link>
                    <Link to="/Store"  className="a">Contact us</Link>
                </nav>
                <div>
                    <Link to="/Login"  className="a nav-login" >Login</Link>
                </div>
                    
            </header>
                    
            
                    <Routes>
                     <Route path="/Store" element={<Store />} />
                     <Route path="/home/*" element={<Home />} >
                     </Route>
                     <Route path="/" element={<Home />} />
                     <Route path="/ListOrder" element={<ListOrder />} />
                     <Route path="/Admin" element={<Admin />} />   
                     <Route path="/ListProduk" element={<ListProduk />} />
                     <Route path="/NewProduk" element={<NewProduk />} />
                     <Route path="/Login" element={<Login />} />
                     </Routes>
        </Fragment>
    }
}

export default Head;