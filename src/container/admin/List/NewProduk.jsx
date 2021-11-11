import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AdminBtn from "../AdminBtn";


class NewProduk extends Component{
    render(){
        return <Fragment>
            <div className="add-container">
                <div className="admin-nav">
                
                </div>
                    <div className="add-subContainer">
                        <div className="adminBox-one">
                            <div className="profile-box">
                            <p className="admin-text">Tambah Produk</p>
                            <p className="admin-subText">Welcome to dashboard Admin</p>
                            </div>
                        </div>
                   <div className="tambah">
                            <form className="add-produk">
                                <label className="label-add" htmlFor="" name="name">Nama Produk : </label>
                                <input type="text" name="name" placeholder="Nama Produk" className="input-add" onChange={this.handleCustom} />
                                <label className="label-add" htmlFor="" name="price">Harga Produk : </label>
                                <input type="text" name="price" placeholder="Harga Produk" className="input-add"
                                onChange={this.handleCustom}/>
                                
                                <button onClick={this.saveNewData} className="btn-add">Save</button>
                            </form>
                           
                        </div>
                       <AdminBtn></AdminBtn>
                    </div>
            </div>
        </Fragment>
    }
}

export default NewProduk;