import React, { useContext, useEffect } from 'react'
import LikeImg from '../../images/select.png'; 
import {MdClose} from "react-icons/md"
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { BsCheck, BsFillPlusSquareFill } from 'react-icons/bs';
import { useState } from 'react';
import uuid from "react-uuid";
import { JayAdminContext } from '../../context/context';

export default function ResturantMenua() {

    const {  } = useContext(JayAdminContext)

    let List = [
        {id: 1,
            img: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80",
            name: "Yousef", desc: "desc", cat: "categoryName", price: 13.00},
        {id: 2,
            img: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80",
            name: "Yousef", desc: "desc", cat: "categoryName", price: 13.00,},
        // {id: 3,
        //     img: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80",
        //     name: "Yousef", desc: "desc", cat: "categoryName", price: 13.00, },
        // {id: 4,
        //     img: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80",
        //     name: "Yousef", desc: "desc", cat: "categoryName", price: 13.00,},
        // {id: 5,
        //     img: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80",
        //     name: "Yousef", desc: "desc", cat: "categoryName", price: 13.00,},
    ]

    const CategoriesList = [
        {id: uuid(), name:"nameCat"}
    ]
    const [Resturant, setResturant] = useState(List);
    const [Categories, setCategories] = useState(CategoriesList);

    const addResturantBranch = () => {
        let name = document.getElementById("nameres").value;
        let desc = document.getElementById("descres").value;
        let cat = document.getElementById("catres").value;
        let price = document.getElementById("priceres").value;
        let img = document.getElementById("img-replace-new").src;
        if(name==="" || desc === "" || cat === "" || price === ""){
            alert("Please complete the data.")
        }
        else {
            let obj = {
                id: uuid(),
                img,
                name,
                desc,
                cat,
                price,
            }
            let newObj = [...Resturant, obj]
            setResturant(newObj)
            console.log(newObj);
            document.getElementById("nameres").value = "";
            document.getElementById("descres").value = "";
            document.getElementById("catres").value = "";
            document.getElementById("priceres").value = "";
            document.getElementById("img-replace-new").src = LikeImg;
        }
    }
    const handelChange = () => {
        const imgFile = document.querySelector("#create-Logo-resturant-cat").files[0];
        const imgResturant = document.getElementById("img-replace-new");
        const reader = new FileReader();
        reader.addEventListener("load",function () {
            imgResturant.src = reader.result;
        },false);
        if (imgFile) {
            reader.readAsDataURL(imgFile);
        }
    };

    const DelResurant = (id) => {
        let filter = Resturant.filter(item => item.id != id);
        setResturant(filter)
    }

    const EmptyField = () => {
        document.getElementById("nameres").value = "";
        document.getElementById("descres").value = "";
        document.getElementById("catres").value = "";
        document.getElementById("priceres").value = "";
        document.getElementById("img-replace-new").src = LikeImg;
    }

    const EditResurant = (id) => {
        let item = Resturant.find(item => item.id === id);
        document.getElementById("nameres").value = item.name;
        document.getElementById("descres").value = item.desc;
        document.getElementById("catres").value = item.cat;
        document.getElementById("priceres").value = item.price;
        document.getElementById("img-replace-new").src = item.img;
    
        let filter = Resturant.filter(item => item.id != id);
        setResturant(filter)
    }

    const EmptyCat = () => {
        document.getElementById("name-cat").value = "";
    }
    const EditCat = (id) => {
        let item = Categories.find(item => item.id === id);
        document.getElementById("name-cat").value = item.name;
    
        let filter = Categories.filter(item => item.id != id);
        setCategories(filter)
    }
    const DelCat = (id) => {
        let filter = Categories.filter(item => item.id != id);
        setCategories(filter)
    }





    const ToggleCat = () => {
        document.querySelector('.add_cat_name').classList.toggle('d-none')
    }
    const ToggleCatRes = () => {
        document.querySelector('.add_cat').classList.toggle('d-none')
    }


    const [Itemss] = useState([]);
    let Token = JSON.parse(localStorage.getItem('TokenJay'));
    useEffect(() => {
        getItems();

    }, [])
    const getItems = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://rest-manage.herokuapp.com/api/restaurant/items", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => console.log('error', error));
    }

    

    return (
        <div>
                <div className="form-home px-3">                    
                    <h6 className="px-2 pb-0 pt-3 font-main color-main font-weight-bold">Restaurant Menu</h6>
                    <hr className="mb-0" />
                    <div className="form-parent-menu">
                        <div className="form-one-menu">
                            {/* Start Table */}
                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <label  className="mb-0 label px-2">Menu Items</label>
                                <div className="ml-auto border-search">
                                    <div className="d-flex justify-content-between align-items-center mb-0 px-2">
                                        <input type="search" placeholder="Search" className="input-search py-0 mr-2" />
                                        <BsFillPlusSquareFill style={{cursor:"pointer"}} onClick={ToggleCatRes} />
                                    </div>
                                </div>
                            </div>
                            <div className="all-menu w-100">
                                <table className="table">
                                    <thead>
                                        <tr className="table-header">
                                            <th scope="col" className="font-main text-capitalize head-table text-center thFirst" style={{fontSize:"13px"}}>Image</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>name</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>description</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>offer/category</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>price</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center thLast" style={{fontSize:"13px"}}>action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="par_cat">
                                        {Resturant.map( ({id,img,name,desc,cat,price}) => {
                                            return (
                                                <tr key={id}>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center">
                                                        <img src={img} className="rounded" width="50" height="50" alt="resturnt" />
                                                    </td>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{name}</td>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{desc}</td>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}> {cat} </td>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{price}</td>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                        <div className="div-input d-flex justify-content-between px-0">
                                                            <MdModeEdit onClick={() => EditResurant(id)} className="edit-icon mr-3" style={{fontSize:"20px",cursor:"pointer"}} />
                                                            <MdDelete  className="del-icon" style={{fontSize:"20px",cursor:"pointer"}} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                            <tr className="add_cat d-none">
                                                <td scope="row" className="px-0">
                                                    <div className="div-input par-replace w-100">
                                                        <img src={LikeImg} className="img-replace"  id="img-replace-new" width="50" height="50"/>
                                                        <input type="file" onChange={handelChange} id="create-Logo-resturant-cat" className="px-0 font-main input  py-0 my-2 file-replace" />
                                                    </div>{/* End Of input file */}
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center px-0" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" id="nameres" className="add-data-input text-center"/>
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" id="descres" className="add-data-input text-center"/>
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" id="catres" className="add-data-input text-center"/>
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" id="priceres" className="add-data-input text-center"/>
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center px-1" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <div className="div-input d-flex justify-content-between px-0">
                                                        <BsCheck style={{fontSize:"20px",cursor:"pointer"}} className="edit-icon"  />
                                                        <IoMdClose style={{fontSize:"20px",cursor:"pointer"}} className="del-icon" onClick={EmptyField} />
                                                    </div>
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* End of Table */}
                        </div>
                        
                        
                        
                        <div className="form-two-menu ">
                            <div className="div-input">
                                    <div className="w-100"> {/* Star Of List Data */}
                                        <div className="d-flex justify-content-between align-items-center mt-2 mb-3 px-2">
                                            <label className="mb-0 label px-2">Categories</label>
                                            <BsFillPlusSquareFill style={{cursor:"pointer"}} onClick={ToggleCat} />
                                        </div>
                                    <table className="table w-100 mt-1">
                                        <thead>
                                            <tr className="table-header">
                                                <th className="thFirst font-main text-capitalize head-table text-center" style={{fontSize:"13px",width:"65%"}}>name</th>
                                                <th className="thLast font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Categories.map( ({id,name}) => {
                                                return (
                                                    <tr key={id}>
                                                        <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                            {name}
                                                        </td>
                                                        <td scope="row" className="font-main text-capitalize head-table text-center px-1" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                            <div className="div-input d-flex justify-content-between px-0">
                                                                <MdModeEdit onClick={() => EditCat(id)} className="edit-icon" style={{fontSize:"20px",cursor:"pointer"}} />
                                                                <MdDelete onClick={() => DelCat(id)} className="del-icon" style={{fontSize:"20px",cursor:"pointer"}} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}

                                            <tr className="d-none add_cat_name">
                                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" id="name-cat" className="add-data-input text-center"/>
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center px-1" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <div className="div-input d-flex justify-content-between px-0">
                                                        <BsCheck style={{fontSize:"20px",cursor:"pointer"}} className="edit-icon"/>
                                                        <IoMdClose style={{fontSize:"20px",cursor:"pointer"}} className="del-icon" onClick={EmptyCat} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>{/* End Of List Data */}
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
    )
}
