import React, { Component, Fragment } from "react";

import Post from "./post/Post";
import Axios from "axios";
import Swal from 'sweetalert2';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
// import './order/Order.css';
import './Store.css';

class Store extends Component{
    state = {
         product: [],
         order: [],
            formOrder :{
                id:1,
                name: '',
                price:'',
                image:'',
                customer:'',
                address:'',
                phone:''
            }
    }
    getPostAPI =() =>{
        Axios.get('http://localhost:3004/galon?_sort=id&_order=desc')
        .then((result)=>{
            this.setState({
                product: result.data
            })
        })
    }
    handleDetail =(id) =>{
        //function Histori untuk berpindah halaman
      Axios.get(`http://localhost:3004/galon/${id}`).then((res)=>{ 
          
        this.setState({
            order: res.data
        });
        
        
      })     
    
    }
    handleCustom =(event) =>{
        console.log(event);
        let newBlogSpot = {...this.state.formOrder};
        let order = {...this.state.order}
        
        let timeStamp = new Date().getTime();
        newBlogSpot['id'] =timeStamp;
        newBlogSpot['name'] = order.name;
        newBlogSpot['price'] = order.price;
        newBlogSpot['image'] = "/images/engin-akyurt-PCpoG06fcUI-unsplash.jpg";
        newBlogSpot[event.target.name] = event.target.value;
        this.setState({
            formOrder: newBlogSpot
        });
        console.log(this.state.formOrder);
    }
    postDataToAPI = () =>{
        Axios.post('http://localhost:3004/order',this.state.formOrder).then((res) =>
        {
            console.log(res);
        },(err) =>{
            console.log('error: ',err);
        })
    } 
    saveNewOrder = ()=>{
        this.postDataToAPI();
    }
    alertConfirm = () =>{
        Swal.fire({
            title: 'Anda yakin ingin Order',
            text: "pastikan pesanan dan data anda telah benar",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Order it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Ordered!' 
              )
              
              
            }
          })
          this.saveNewOrder();
          console.log("saved");
    }
    
    
     
     componentDidMount(){
        this.getPostAPI();
      
    }
    render(){
        
      
            return <Fragment>
                <div className="store-container ">
                
                    <div className="box-product">
                        <div className="nav-product">
                            <p className="bar-product active">Galon</p>
                            <p className="bar-product">Botol</p>
                            <p className="bar-product">Gelas</p>
                            <p className="bar-product">Gligen</p>
                        </div>
                        <div className="all-product">
                            {
                                this.state.product.map(
                                    product =>{
                                        return <Post key={product.id} data={product} goDetail={this.handleDetail}></Post>
                                    }
                                )
                            }
                          
                        </div>
                    </div>
                    <div className="invoice">
                        <div className="invoice-title-box">
                            <div className="invoice-title">
                                <span className="circle-invo">Your</span>
                                <span className="invo-text">Invoice</span>
                            </div>
                                
                        </div>
                        <div className="main-invoice">

                                <div className="order">
                                    <div className="tag-order">
                                        <p className="your-order">
                                            Your Order
                                        </p>
                                        
                                    </div>
                                    <div className="post-order">
                                        <div className="img-order">
                                            <div className="img-box">
                                                <img src={this.state.order.image} alt="" className="img-post" />
                                             </div>
                                        </div>
                                        <div className="data-order">
                                            <div className="tag">
                                                <p>Produk</p>
                                             </div>
                                            <div className="tag-ket">
                                                <p className="tag-text">{this.state.order.name}</p> 
                                            </div>
                                            <div className="tag">
                                                <p>Harga</p>
                                            </div>
                                            <div className="tag-ket">
                                                <p className="tag-text">IDR {this.state.order.price}</p> 
                                            </div>
                                            <div className="tag-note">
                                                <p className="note">* pastikan produk yang anda pilih sesuai</p>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                                <div className="form-data">
                                    <div className="tag-order">
                                        <p className="your-order">
                                            Personal Info
                                        </p>
                                    </div>
                                    <div className="input-form">
                                        <form action="" className="input-form">
                                                <label htmlFor="" name="customer" className="label">Nama</label>
                                                <input type="text" name="customer" onChange={this.handleCustom}className="input" placeholder="Masukan Nama Anda.."/>
                                                <label htmlFor="" name="phone" className="label" >Nomor Telepon</label>
                                                <input type="text" name="phone" className="input" onChange={this.handleCustom}placeholder="Masukan Nomor Telephone.." />
                                                <label htmlFor="" name="adrres" className="label">Alamat</label>
                                                <textarea name="address" id="" cols="30" rows="10" className="textarea" 
                                                onChange={this.handleCustom}placeholder="Masukan Alamat Lengkap.."></textarea>
                                                <motion.div className="btn-order" onClick={this.alertConfirm} 
                                                    whileHover={{scale : 1.2}}
                                                > Send Order</motion.div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        <div className="invoice-bg">
                            
                            <div className="img-air2"></div>
                        </div>
                    </div>

                    {/* <div id="store">   
                        {
                            this.state.product.map(
                                product =>{ 
                                    return <Post 
                                    key={product.id} name={product.name}
                                    price={product.price} body={product.body}
                                    data={product}
                                    goDetail={this.handleDetail}
                                    >
                                    </Post>
                                }
                            )
                        }    
                    </div> */}
                    </div>
                    {/*   
                    <div className="order-container">
                     <h3>Invoice</h3> 
                        <div id="order"> 
                        <div className="post-order">
                            <img src={this.state.order.image} alt="" />
                        <div className="ket">
                                <p className="name-order" >{this.state.order.name}</p>
                                <p className="harga-order">{this.state.order.price}</p>
                                <p className="describe-order">{this.state.order.body}</p>
                        </div> 
                   </div> */}
                   
                    {/* <div className="data">
                        
                        <input type="text" name="customer" id="customer" placeholder="Nama" onChange={this.handleCustom} />
                        <input type="text" name="age" placeholder="Nomor HP"onChange={this.handleCustom}  />
                        <textarea name="address" id="" cols="30" rows="10" placeholder="Alamat" onChange={this.handleCustom}></textarea>
                        <button className="btn-order" onClick={this.alertConfirm}>Order</button>
                    </div>
                   </div>
                   </div> */}
                      
               </Fragment>
              
        }
        
    }



export default Store;