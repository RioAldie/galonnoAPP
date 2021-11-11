import React from "react";
import './AdminOr.css';

const AdminOrder = (order)=>{
    return  <div className="order-post">
            <div className="ket-order">
              
              <p className="orderan-text"><span className="b">Nama Barang =   </span> {order.data.name}</p>
              <p  className="orderan-text"><span className="b">Harga       =  </span> {order.data.price}</p>
              <p  className="orderan-text"><span className="b">Pembeli     =  </span> {order.data.customer}</p>
              <p  className="orderan-text"><span className="b">Nomor HP     =  </span> {order.data.phone}</p>
              <p  className="orderan-text"><span className="b">Alamat      =  </span> {order.data.address}</p>
            </div>
              
              <div className="btn-or" onClick={() => order.remove(order.data.id)}>
                <p className="btn-or-text">Confirm</p>
                </div>
            </div>
}

export default AdminOrder;