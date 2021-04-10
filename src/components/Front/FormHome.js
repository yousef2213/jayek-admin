import React, { useEffect } from 'react';
import LikeImg from '../../images/like.png'; 
import {MdClose} from "react-icons/md"
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { BsCheck } from 'react-icons/bs';
import { useState } from 'react';
import uuid from "react-uuid";



function FormHome() {
    useEffect(() => {
        // showMap()
    }, [])
    const [Resturant, setResturant] = useState([])

    const Open = () => {
        let btn = document.getElementById('changePass');
        btn.classList.add('add-scale-change-pass')
    }
    const Close = () => {
        let btn = document.getElementById('changePass');
        btn.classList.remove('add-scale-change-pass')
    }

    const addResturantBranch = () => {
        let country = document.getElementById("countryList").value;
        let city = document.getElementById("cityList").value;
        let streat = document.getElementById("streatList").value;
        if(country==="" || city === "" || streat === ""){
            alert("Please complete the data.")
        }
        else {
            let obj = {
                id: uuid(),
                country,
                city,
                streat
            }
            let newObj = [...Resturant, obj]
            setResturant(newObj)
            document.getElementById("countryList").value = "";
            document.getElementById("cityList").value = "";
            document.getElementById("streatList").value = "";
        }
    }
    const  handelChange = () => {
        const imgFile = document.querySelector("#create-Logo-formone").files[0];
        const imgResturant = document.getElementById("img-resurant");
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
        document.getElementById("countryList").value = "";
        document.getElementById("cityList").value = "";
        document.getElementById("streatList").value = "";
    }

    const EditResurant = (id) => {
        let item = Resturant.find(item => item.id === id);
        document.getElementById("countryList").value = item.country;
        document.getElementById("cityList").value = item.city;
        document.getElementById("streatList").value = item.streat;
        let filter = Resturant.filter(item => item.id != id);
        setResturant(filter)
    }

    const SaveResurant = () => {
        let name = document.getElementById("RestaurantName").value;
        let type = document.getElementById("RestaurantType").value;
        // let img = document.getElementById("img-resurant").src;   
        let email = document.getElementById("email-form-right").value;
        let phone = document.getElementById("phone-form-right").value;
        let OpeningHoursTo = document.getElementById("Opening-Hours-to").value;
        let OpeningHoursFrom = document.getElementById("Opening-Hours-from").value;
        let minute = document.getElementById("min").value;
        let houre = document.getElementById("hrs").value;

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1zYWJkbzU0QGdtYWlsLmNvbSIsImFjY291bnRJZCI6IjYwMjdkZGUyMTM5MGFmMDBkNDUzMmI1MCIsInJvbGUiOiJSRVNUQVVSQU5UIiwiaWF0IjoxNjEzMjMxNjY5LCJleHAiOjE2MTMzMTgwNjl9.j1QRHXvG3dY6t77RGM2y29taCszxm55Ica7PJ9bYJhY");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(
            {"name":name,
            "phone":phone,
            "locations":[
                {"latitude":20.2,
                "longitude":30.54,
                "street":"23 orabi street",
                "city":"cairo",
                "country":"egypt"
            }],
            "open_hour":10,
            "close_hour":23,
            "pickup_time":{"from":30,"to":90}});

        let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("{{local}}/api/restaurant/update/profile", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }



    
        
     
    
    return (
        <div className="form-home px-3">
            <div className="change-paa" id="changePass">
                <div className="py-5">
                    <MdClose className="close-icon" onClick={Close} />
                    <form>
                        <div className="div-input">
                            <label htmlFor="Currentpassword" className="mb-0 label px-2 text-light">Current password</label>
                            <input type="password" id="Currentpassword" placeholder="Current password" className="font-main input" />
                        </div>
                        <div className="div-input">
                            <label htmlFor="Newpassword" className="mb-0 label px-2 text-light">New password</label>
                            <input type="password" id="Newpassword" placeholder="New password" className="font-main input" />
                        </div>
                        <div className="div-input">
                            <label htmlFor="Confirmnewpassword" className="mb-0 label px-2 text-light">Confirm new password</label>
                            <input type="password" id="Confirmnewpassword" placeholder="Confirm new password" className="font-main input" />
                        </div>
                        <div className="div-input my-4">
                            <input type="button"  value="Save Changes" className="font-main input-btn" />
                        </div>
                    </form>
                </div>
            </div>
            
            <h6 className="px-2 pb-0 pt-3 font-main color-main font-weight-bold">Account Details</h6>
            <hr className="mb-0" />
            <div className="form-parent">
                <div className="form-one">
                    <form>
                        <div className="div-input">
                            <label htmlFor="RestaurantName" className="mb-0 label px-2">Restaurant Name</label>
                            <input type="text" id="RestaurantName" placeholder="Restaurant Name" className="font-main input" />
                        </div>
                        <div className="div-input">
                            <label htmlFor="RestaurantType" className="mb-0 label px-2">Restaurant Type</label>
                            <input type="text" id="RestaurantType" placeholder="Restaurant Type" className="font-main input" />
                        </div>
                        <div className="d-flex justify-content-between">{/* Star Of input file */}
                            <div className="div-input" style={{width:"60%"}}>
                                <label htmlFor="create-Logo-formone" className="mb-0 label px-2">Logo</label>
                                <input type="file" onChange={handelChange} id="create-Logo-formone" className="font-main input" />
                            </div>
                            <div className="div-input align-self-center" style={{width:"30%"}}>
                                <img src={LikeImg} className="rounded" id="img-resurant" width="80" height="80" alt="resturnt" />
                            </div>
                        </div>{/* End Of input file */}
                        <div className="div-input">
                            <label htmlFor="email-form-right" className="mb-0 label px-2">Email</label>
                            <input type="email" id="email-form-right" placeholder="Email" className="font-main input" />
                        </div>
                        <div className="div-input">
                            <label htmlFor="phone-form-right" className="mb-0 label px-2">Mobile Number</label>
                            <input type="number" id="phone-form-right" placeholder="Mobile Number" className="font-main input" />
                        </div>
                        <div className="d-flex justify-content-between">{/* Star Of Hours */}
                            <div className="div-input" style={{width:"45%"}}>
                                <label htmlFor="Opening-Hours-to" className="mb-0 label px-2">Opening Hours</label>
                                <input type="number" id="Opening-Hours-to" placeholder="00 AM" className="font-main input" />
                            </div>
                            <span className="align-self-center font-main pt-3">To</span>
                            <div className="div-input" style={{width:"45%"}}>
                                <label htmlFor="Opening-Hours-from" className="mb-0 label px-2"></label>
                                <input type="number" id="Opening-Hours-from" placeholder="00 PM" className="font-main input" />
                            </div>
                        </div>{/* End Of Hours */}
                    </form>
                </div>
                <div className="form-two">
                    <form>
                    <label  className="mb-0 label px-2 mb-2">Approximate Pick Up Time</label>
                        <div className="d-flex justify-content-between pt-0 mt-0">{/* Star Of Hours */}
                            <div className="div-input pt-0 mt-0" style={{width:"23%"}}>
                                <label htmlFor="min" className="mb-0 label px-2 d-none"></label>
                                <input type="number" id="min" placeholder="00" className="font-main input mt-0" />
                            </div> 
                            <div className="div-input" style={{width:"23%"}}>
                                <label htmlFor="min2" className="mb-0 label px-2 d-none"></label>
                                <input type="number" id="min2" placeholder="Min" disabled className="font-main input mt-0" />
                            </div>
                            <span className="align-self-center font-main">To</span>
                            <div className="div-input" style={{width:"23%"}}>
                                <label htmlFor="hrs" className="mb-0 label px-2 d-none"></label>
                                <input type="number" id="hrs" placeholder="00" className="font-main input mt-0" />
                            </div>
                            <div className="div-input" style={{width:"23%"}}>
                                <label htmlFor="hrs2" className="mb-0 label px-2 d-none"></label>
                                <input type="number" id="hrs2" placeholder="hrs" disabled  className="font-main input mt-0" />
                            </div>
                        </div>{/* End Of Hours */}
                    </form>
                    <div className="div-input">
                        <div className="w-100"> {/* Star Of List Data */}
                            <label  className="mb-0 label px-2 mb-2">Restaurant Branches</label>
                            {/* <div id="map" style={{width:"50px"}}>
                                <MapContainer />
                            </div> */}
                            <table className="table w-100 mt-1">
                                <thead>
                                    <tr className="table-header">
                                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Country</th>
                                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>City</th>
                                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Street</th>
                                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Resturant.map( ({id,country,city,streat}) => {
                                        return (
                                            <tr key={id}>
                                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" className="add-data-input text-center" value={country} disabled />
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" className="add-data-input text-center" value={city} disabled />
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" className="add-data-input text-center" value={streat} disabled />
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center px-1" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <div class="div-input d-flex justify-content-between px-0">
                                                        <MdModeEdit onClick={() => EditResurant(id)} className="edit-icon" style={{fontSize:"20px",cursor:"pointer"}} />
                                                        <MdDelete onClick={() => DelResurant(id)} className="del-icon" style={{fontSize:"20px",cursor:"pointer"}} />
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                    <tr>
                                        <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                            <input type="text" id="countryList" className="add-data-input text-center"/>
                                        </td>
                                        <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                            <input type="text" id="cityList" className="add-data-input text-center"/>
                                        </td>
                                        <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                            <input type="text" id="streatList" className="add-data-input text-center"/>
                                        </td>
                                        <td scope="row" className="font-main text-capitalize head-table text-center px-1" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                            <div className="div-input d-flex justify-content-between px-0">
                                                <BsCheck style={{fontSize:"20px",cursor:"pointer"}} className="edit-icon" onClick={addResturantBranch} />
                                                <IoMdClose style={{fontSize:"20px",cursor:"pointer"}} className="del-icon" onClick={EmptyField} />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>{/* End Of List Data */}
                    </div>
                    <div className="div-input my-4">
                        <p className="font-main mb-1" style={{fontSize:"14px"}}>Change password</p>
                        <p className="font-main" style={{fontSize:"14px"}}>It's a good idea to use a strong password that you don't use elsewhere</p>
                        <input type="button"  value="Change Password" onClick={Open} className="font-main input-btn w-50 d-block ml-auto" />
                        <input type="button"  value="Save" onClick={SaveResurant} className="font-main input-btn my-3 w-50 d-block ml-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}




export default FormHome;
