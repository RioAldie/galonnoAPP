import React, { Component, Fragment } from "react";
import axios from "axios";
import AdminOrder from "../AdminOrder/AdminOrder";
import AdminBtn from "../AdminBtn";
import {motion} from 'framer-motion';

class ListOrder extends Component{
    state = {
        
        order: []
    }
    getOrderAPI =() =>{
        axios.get('http://localhost:3004/order?_sort=id&_order=desc')
        .then((result)=>{
            this.setState({
                order: result.data
            })
        })
    }
    handleConfirmOrder = (data) =>{
        axios.delete(`http://localhost:3004/order/${data}`).then((res)=>{
            console.log('success delete ',data);
            this.getOrderAPI();
            })
        }
    componentDidMount(){
        
        this.getOrderAPI();
    }
    render(){
        return <Fragment>
            <div className="admin-container">
                <div className="admin-nav">
                
                </div>
                <div className="admin-subContainer">
                        <motion.div className="adminBox-one">
                            <div className="profile-box">
                            <p className="admin-text">Orderan</p>
                            <p className="admin-subText">Welcome to dashboard Admin</p>
                            </div>
                        </motion.div>
                    <div className="all-order">{this.state.order.map(
                        order =>{
                            return<AdminOrder key={order.id} data={order} remove={this.handleConfirmOrder}></AdminOrder>
                        })}</div>
                          <div className="add-link">
                                <p>Tambahkan Produk Baru</p>
                            </div>
                           <AdminBtn></AdminBtn>
                </div>
            </div>
        </Fragment>
    }
}
export default ListOrder;