import React, { Component, Fragment } from "react";

//import './Header.css';
 import { BrowserRouter,Route,Link } from "react-router-dom";
import Store from "../store/Store";
import Admin from "../admin/Admin";
import Login from "../admin/Login/Login";
import ListProduk from "../admin/List/ListProduk";
import ListOrder from "../admin/List/ListOrder";
import NewProduk from "../admin/List/NewProduk";

class Header extends Component{
    // scroll = ()=>{
                    
    //             window.addEventListener("scroll",function(){
    //     var header = document.getElementById('header');
    //     header.classList.toggle("sticky",window.scrollY > 0);
    //     })
    //       }
   handleColor = ()=>{
      const a = document.getElementsByClassName("nav-bar");
      a.classList.color = "#002E74";
   }
    componentDidMount(){
        // this.scroll();
        this.handleColor();
    }

    render(){
        return  <BrowserRouter><Fragment>
                     <header id="header" className="flex flex-row w-full h-8 justify-around  py-1 bg-primary text-xs">
                   <p className="logo font-roboto text-white">GalonNo</p>
                    <ul className="flex flex-row w-96 justify-around text-white font-popins text-xs">
                      <Link to="/"><li className="nav-bar">Home</li></Link> 
                      <Link to="/Store"><li className="nav-bar">Store</li></Link>
                      <Link><li to="/admin"className="about nav-bar">Dashboard</li></Link>  
                    </ul>
                      
                    <Link to="/Login" className="ad-text text-white font-popins text-xs opacity-10">Admin</Link>
                    </header>
                   
                    
                     
                     {/* <Route path="/" exact component={Home}></Route> */}
                     <Route path="/Store" exact component={Store}></Route>
                     <Route path="/Admin-page"  component={Admin}></Route>
                     <Route path="/Login" component={Login}></Route> 
                     <Route path="/ListProduk"  component={ListProduk}></Route>
                     <Route path="/ListOrder" component={ListOrder}></Route>
                     <Route path="/addform" component={NewProduk}></Route>
                     
                 
          </Fragment></BrowserRouter> 
        
    }
}

export default Header;