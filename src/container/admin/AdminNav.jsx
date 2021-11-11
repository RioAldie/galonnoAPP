import React from "react";
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';

const AdminNav = () =>{

    return(
        <div className="dash-link"> 
        <div className="dash-list">
                                  
        <NavLink to="/ListOrder">
            <motion.button className="btn-list"
                whileHover={{scale : 1.05 , x : -20}}
            >
            <p>List Order </p>
            <i className="arrow"> <img src="/images/long-arrow-alt-right-solid 1.svg" alt="" /></i>
            </motion.button> 
        </NavLink>
         
        <NavLink to="/ListProduk">
            <motion.button  className="btn-list"
            whileHover={{scale : 1.05 , x : 20}}
            >
            <p>List Product </p>
            <i className="arrow"> <img src="/images/long-arrow-alt-right-solid 1.svg" alt="" /></i>
            </motion.button>
        </NavLink>
  
        
    </div>
    <NavLink to="/NewProduk">
            <motion.div className="add-link"
                whileHover={{scale : 1.1}}
            >
            <p>Tambahkan Produk Baru</p>
            </motion.div>
    </NavLink>
    
    </div>
    )
}

export default AdminNav;