import React, { Component, Fragment } from "react";

import axios from "axios";
import './Order.css';

let customer;

const handleChange = (event)=>{

} 

const Order = (order) =>{
    
    console.log(order)
    
        return <Fragment>
            <div id="order"> <div className="post-order">
                        <img src="" alt="" />
                        <div className="ket"><p className="name-order" >{order.data.name}</p>
                        <p className="harga-order">{order.data.price}</p>
                        <p className="describe-order">{order.data.body}</p></div>
                        
                   </div>
                   <div className="data">
                       
                       <input type="text" name="nama" id="customer" placeholder="nama" onChange={handleChange}/>
                       <input type="text" name="umur" placeholder="umur" onChange={handleChange} />
                       <textarea name="alamat" id="" cols="30" rows="10" placeholder="alamat" onChange={handleChange}></textarea>
                       <button>Order</button>
                   </div>
                   </div>
               
        </Fragment>
    }
Order.defaultProps={
    name: 'none',
    price: 'none',
    body: 'none'
}

export default Order;
