import React from "react";
import './AdminPro.css';


const AdminProduct= (props)=>{
    
    
    return <div className="post-product">
        <div className="img-box-ad">
            <img src={props.data.image} alt="" className="img-post-ad" />
        </div>
    
    <div className="stat">
    <div className="keter"><p className="name-ad">{props.data.name}</p>
    <p className="harga-ad">{props.data.price}</p>
    <p className="describe-ad">{props.data.body} </p></div>
    <button className="btn-rem" onClick={() => props.remove(props.data.id)}><i className="sampah"></i> </button>
    </div>
</div>

    
}

export default AdminProduct;