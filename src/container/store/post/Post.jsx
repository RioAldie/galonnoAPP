import React from "react";


import './Post.css';

const Post = (produk)=>{
    console.log(produk.data)
            return <div className="post" onClick={()=> produk.goDetail(produk.data.id)}>
                         <div className="img-box">
                              <img src={produk.data.image} alt="" className="img-post" />
                         </div>
                        
                        <p className="post-name">{produk.data.name}</p>
                        <p className="post-harga">IDR <span className="harga">{produk.data.price} </span> </p>
                        {/* <button className="btn-post" onClick={()=> produk.goDetail(produk.data.id)}
                        h-ref="#order" >Order</button> */}
                   </div>
}



export default Post ;