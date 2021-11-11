import React from "react";
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';

const AdminBtn = () =>{
    return (
       
        <motion.div className="back-btn"
        whileHover = {{scale : 1.1}}
        >
        <NavLink to="/Admin">                
        <div >
        <i className="back-arrow"> <img className="bck" src="/images/long-arrow-alt-right-solid 1.svg" alt=""  /></i>
        </div>
        </NavLink>
        </motion.div>
    )
}

export default AdminBtn;