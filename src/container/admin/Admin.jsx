import React, { Component, Fragment } from "react";
import Axios from 'axios';
import {NavLink} from 'react-router-dom';
import './Admin.css';
import AdminNav from "./AdminNav"; 
import {motion} from 'framer-motion';


class Admin extends Component{
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
        })
    }
    getOrderAPI =() =>{
        Axios.get('http://localhost:3004/order?_sort=id&_order=desc')
        .then((result)=>{
            this.setState({
                order: result.data
            })
        })
    }
    handleRemoveGalon = (data) =>{
        Axios.delete(`http://localhost:3004/galon/${data}`).then((res)=>{
            console.log('success delete ',data);
            this.getGalonAPI();
            })
        }
    handleConfirmOrder = (data) =>{
        Axios.delete(`http://localhost:3004/order/${data}`).then((res)=>{
            console.log('success delete ',data);
            this.getOrderAPI();
            })
        }
        postDataToAPI = () =>{
            Axios.post('http://localhost:3004/galon',this.state.formAdd).then((res) =>
            {
                this.getGalonAPI();
                console.log(res);
            },(err) =>{
                console.log('error: ',err);
            })
        } 
    
    handleCustom =(event) =>{
        console.log(event);
        let newBlogSpot = {...this.state.formAdd};
        let timeStamp = new Date().getTime();
        newBlogSpot['id'] = timeStamp;
        newBlogSpot['image'] = '/images/botol-satu.png';
        newBlogSpot[event.target.name] = event.target.value;
        this.setState({
            formAdd: newBlogSpot
        });
        console.log(this.state.formAdd);
    }
    saveNewData = ()=>{
        this.postDataToAPI();
        
    }
    componentDidMount(){
        this.getGalonAPI();
        this.getOrderAPI();
    }
   
    
    render(){
        
        return <Fragment>
            
            <section id="cont-admin" className="admin-container">
                <div className="admin-nav">
                
                </div>
                <div className="admin-subContainer">
                    <motion.div className="adminBox-one" 
                        whileHover={{scale : 1.1}}
                    >
                        <div className="profile-box">
                        <p className="admin-text">Admin</p>
                        <p className="admin-subText">Welcome to dashboard Admin</p>
                        </div>
                    </motion.div>
                    <div className="adminBox-two">
                        <div className="dash-data">
                            <motion.div className="data-num"
                                whileHover={{scale : 1.05}}
                            >
                                <div className="num-order" >
                                    <div className="number-circle">
                                        <p className="number">8<span className="titik">.</span></p>
                                    </div>
                                    <div className="label-num">
                                        <p className="text-number">
                                            New Order
                                        </p>
                                    </div>
                                </div>
                                <div className="num-order">
                                    <div className="number-circle">
                                        <p className="number">9<span className="titik">.</span></p>
                                    </div>
                                    <div className="label-num">
                                        <p className="text-number">
                                            Product
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="data-sell">
                                <motion.div className="sold-box"
                                whileHover={{scale : 1.1}}
                                >
                                    <div className="sold-icons">
                                        <i className="icons">
                                            <img src="/images/file-invoice-dollar-solid 1.png" alt="" />
                                        </i>
                                    </div>
                                    <div className="sold-text">
                                        <p>2000000</p>
                                    </div>
                                </motion.div>
                                <motion.div className="sold-box"
                                    whileHover={{scale : 1.1}}
                                >
                                    <div className="rate-icons">
                                            <i className="icons">
                                                <img src="/images/sellsy-brands 1.png" alt="" />
                                            </i>
                                        </div>
                                        <div className="sold-text">
                                            <p>2000</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            <AdminNav>

                            </AdminNav>
                           </div>
                        
                    </div>
            </section>
               
               
             
           
        </Fragment>
    }
}

export default Admin;