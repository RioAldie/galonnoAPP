import React, { Component, Fragment } from "react";
import './Home.css';
import { NavLink,Route,Routes } from "react-router-dom";
import Store from "../store/Store";
import {motion} from 'framer-motion';



class Home extends Component{
    
   
    componentDidMount(){
       
    }
    render(){
        return <Fragment>
                    
                <section className="home">
                 
                        <div className="hero">
                                <div className="hero-left">
                                    <motion.div className="circle-yellow"
                                        whileHover={{scale : 0.8}}
                                    >

                                    </motion.div>
                                    <div className="img-model">
                                        <img src="/images/model.png" alt="" />
                                    </div>
                                    <motion.div className="circle-blue"
                                        whileHover={{scale : 0.7}}
                                    >

                                    </motion.div>
                                    <motion.div className="circle-red"
                                        whileHover={{scale : 1.6}}
                                    ></motion.div>
                                </div>
                                <div className="hero-right">
                                    <div className="hero-title">
                                        <p className="h2">Lebih Segar dan Sehat</p>
                                        <p className="h1">More Fresh And Healty</p>
                                        <p className="p">Air Minum dari gunung alami yang di ekstrak dengan teknologi tinggi untuk menjaga kealamian dan kesegaranya</p>
                                    </div>
                                    <div className="img-splash">
                                        <img src="/images/air.png" alt="" />
                                    </div>
                                    <div className="hero-point">
                                        <div className="point-view">
                                            <div className="point"> 
                                            <div className="point-titik"></div></div>
                                            <p className="h4">Seluruh Area Jawa timur</p>
                                        </div>
                                        <div className="point-view">
                                            <div className="point">
                                            <div className="point-titik"></div>
                                            </div>
                                            <p className="h4">Seluruh Area Jawa timur</p>
                                        </div>
                                        <div className="point-view">
                                            <div className="point">
                                            <div className="point-titik"></div>
                                            </div>
                                            <p className="h4">Seluruh Area Jawa timur</p>
                                        </div>
                                    </div>
                                    <NavLink to="/home/toko">
                                    <motion.div className="btn-arrow"
                                        whileHover={{scale : 1.2}}
                                    >
                                        <motion.i className="arr"
                                            
                                        >
                                            <img src="/images/vector 2.svg" alt="" />
                                        </motion.i>
                                    </motion.div>
                                    </NavLink>
                                </div>
                        </div>
                </section>  
                 <Routes>
                 <Route path="/toko" element={<Store />} /> 
                 </Routes>    
                    
                    
               </Fragment>
    }
}

export default Home;