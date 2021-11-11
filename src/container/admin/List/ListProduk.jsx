import React, { Component, Fragment } from "react";
import  Axios  from "axios";
import AdminProduct from "../AdminProduct/AdminProduct";
import {motion} from 'framer-motion';
import AdminBtn from "../AdminBtn";

class ListProduk extends Component{
    state = {
        product: [],
        order: [],
        formAdd:{
            id: 1,
            name:'',
            price:'',
            image: ''
        }
   }
   getGalonAPI =() =>{
    Axios.get('http://localhost:3004/galon?_sort=id&_order=desc')
    .then((result)=>{
        this.setState({
            product: result.data
        })
        console.log("load sucses")
    })
   }
   componentDidMount(){
    this.getGalonAPI();
    
    }
    handleRemoveGalon = (data) =>{
        Axios.delete(`http://localhost:3004/galon/${data}`).then((res)=>{
            console.log('success delete ',data);
            this.getGalonAPI();
            })
        }
    

    render(){
        return <Fragment>
            <div className="admin-container">
                <div className="admin-nav">
                
                </div>
                <div className="admin-subContainer">
                        <motion.div className="adminBox-one"
                            whileHover={{scale : 1.1}}
                        >
                            <div className="profile-box">
                            <p className="admin-text">Produk</p>
                            <p className="admin-subText">Welcome to dashboard Admin</p>
                            </div>
                        </motion.div>
                        
                       
                             
                            <div className="all-produk">
                            {this.state.product.map(
                                product =>{
                                    return <AdminProduct key={product.id} data={product} remove={this.handleRemoveGalon}></AdminProduct>
                                }
                            )}</div>

                            <motion.div className="add-link"
                                whileHover={{scale : 1.1}}
                            >
                                <p>Tambahkan Produk Baru</p>
                            </motion.div>
                           
                          <AdminBtn></AdminBtn>
                          
                            
                   
                   </div>
                   
            </div>
        </Fragment>
    }
}

export default ListProduk;