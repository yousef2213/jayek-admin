import React, { useContext } from 'react'
import LikeImg from '../../images/select.png'; 
import { IoMdClose } from 'react-icons/io';
import { BsCheck } from 'react-icons/bs';
import { useState } from 'react';
import uuid from "react-uuid";
import { JayAdminContext } from '../../context/context';
import { Tabs } from 'react-bootstrap';

export default function Registration() {

    const { Invitation, Resturants = [], Approvition, DeletingResturant } = useContext(JayAdminContext)

    let List = [
        {id: 1, name: "Burgers King", type: `Fast Food`, email: "yousef@gmail.com", mob: "01011404312"},
        {id: 2, name: "Burgers King", type: "Sandwiches", email: "yousef@gmail.com", mob: "01011404312"},
        {id: 3, name: "Burgers King", type: "Burgers", email: "yousef@gmail.com", mob: "01011404312" },
        {id: 4, name: "Burgers King", type: "type num", email: "yousef@gmail.com", mob: "01011404312"},
        {id: 5, name: "Burgers King", type: "type", email: "yousef@gmail.com", mob: "01011404312"},
    ]

    const CategoriesList = [
        {id: uuid(), name:"nameCat"}
    ]
    const [Resturant, setResturant] = useState(List);

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


    let TabsRegistrtion;
    if(Resturants.length === 0){
        TabsRegistrtion = (
            <div className="w-100">
                <table className="table">
                    <thead>
                        <tr className="table-header">
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>name</th>
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>tpye</th>
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>email</th>
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>mobile number</th>
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>action</th>
                        </tr>
                    </thead>
                </table>
                <h4 className="font-main text-center py-4">Restaurants Registration Empty</h4>
            </div>
        )
    }else {
        TabsRegistrtion = (
            <div className="all-menu w-100">
                <table className="table">
                    <thead>
                        <tr className="table-header">
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>name</th>
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>tpye</th>
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>email</th>
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>mobile number</th>
                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>action</th>
                        </tr>
                    </thead>
                    <tbody className="par_cat">
                        {Resturants.map( ({id,name,type,email,phone}) => {
                            return (
                                <tr key={id}>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{name}</td>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{type}</td>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}> {email} </td>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{phone}</td>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                        <div className="div-input d-flex justify-content-between px-0">
                                            <button className="baged btn btn-success-new mx-2 btn-sm w-100" style={{borderRadius:"10px"}} onClick={() => Approvition(id)}>Activate</button>
                                            <button className="baged btn btn-outline-dark  btn-sm w-100" style={{borderRadius:"10px"}} onClick={() => DeletingResturant(id)} >Reject</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }


    return (
        <div>
            <div>
                <div className="form-home px-3" style={{overflow:"hidden"}}>                    
                    <h6 className="px-2 pb-0 pt-3 font-main color-main font-weight-bold">Resturant Registration</h6>
                    <hr className="mb-0" />
                    <div className="form-parent-menu">
                        <div className="form-one-menu">
                            {/* Start Table */}
                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <label  className="mb-0 label px-2">Restaurants Registration Requests</label>
                                <div className="ml-auto border-search">
                                    <input type="search" placeholder="Search" className="input-search py-0" />
                                </div>
                            </div>

                            {TabsRegistrtion}

                            {/* End of Table */}
                        </div>
                        <div className="form-two-menu">

                            <div className="herder px-3">
                                <h5 className="font-main text-center text-capitalize mt-2">Invite A Restaurant</h5>
                                <p className="font-main text-center text-capitalize mt-3" style={{fontSize:"15px",color:"#7C7D7E"}}>To invite new restaurant to try "Jayek" please enter the restaurant email and the invitation message</p>
                            </div>
                            <form>
                                <div className="">{/* Star Of Request */}
                                    <div className="div-input w-100">
                                        <label htmlFor="titleInvitation" className="mb-0 label px-2"></label>
                                        <input type="email" id="titleInvitation" placeholder="Restaurant Email" className="font-main input" />
                                    </div> 
                                    <textarea style={{width:'100%'}} placeholder="Message" id="msgInvitation" className="font-main input" rows="6"></textarea>
                                </div>{/* End Of Request */}
                            </form>
                            <div className="div-input my-4">
                                <input type="button"  value="Send Invitation" onClick={Invitation}  className="font-main input-btn d-block ml-auto" />
                            </div>                

                        </div>
                    </div>
                </div>        
            </div>
        </div>
    )
}
