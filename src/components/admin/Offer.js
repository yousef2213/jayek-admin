import React, { useContext } from 'react'
import LikeImg from '../../images/image.png'; 
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { BsCheck, BsDownload, BsFillPlusSquareFill } from 'react-icons/bs';
import { JayAdminContext } from '../../context/context';
import { IoMdClose } from 'react-icons/io';
import { ExportCSV } from '../ExportCvs2';

export default function Offer() {

    const { AprovedOffer = [], RquestesOffer = [], CreateNewOfferByAdmin, DelOfferById, Domine, handelSearch } = useContext(JayAdminContext);

    const handelChange = () => {
        const imgFile = document.querySelector("#create-Logo-resturant-cat-Admin").files[0];
        const imgResturant = document.getElementById("img-replace-new-Admin");
        const reader = new FileReader();
        reader.addEventListener("load",function () {
            imgResturant.src = reader.result;
        },false);
        if (imgFile) {
            reader.readAsDataURL(imgFile);
        }
    };

    const toglleBtn  = () => {
        document.querySelector('.add_cat').classList.toggle('d-none')
    }

    
    const fileName = 'Coupons';

    return (
        <div>
            <div className="form-home px-3">
                <h6 className="px-2 pb-0 pt-3 font-main color-main font-weight-bold">Offers</h6>
                <hr className="mb-0" />
                <div className="form-parent">
                <div className="offer-admin-one">
                    <div className="all-admin-offer">
                        <div className="d-flex justify-content-between align-items-center mt-0">
                            <label  className="mb-0 label px-2">All Offers</label>
                            <div className="ml-auto border-search d-flex algin-items-center">
                                <input type="search" onKeyUp={(e) => handelSearch(e)} placeholder="Search" className="input-search align-self-center my-0 mb-2" />
                                {/* <BsDownload className="align-self-center mt-0 ml-2 font-weight-bold" style={{fontSize:'20px',cursor:"pointer"}} /> */}
                                <BsFillPlusSquareFill onClick={toglleBtn} className="align-self-center mt-0 ml-2 font-weight-bold" style={{fontSize:'20px',cursor:"pointer"}} />
                                <ExportCSV csvData={AprovedOffer} fileName={fileName} />
                            </div>
                            </div>
                            <div className="w-100 all-menu">
                                <table className="table w-100">
                                    <thead>
                                        <tr className="table-header">
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Image</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>title</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>description</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="par_cat">
                                            <tr className="add_cat d-none">
                                                <td scope="row" className="px-0">
                                                    <div className="div-input par-replace w-100">
                                                        <img src={LikeImg} className="img-replace"  id="img-replace-new-Admin" width="50" height="50"/>
                                                        <input type="file" onChange={handelChange} id="create-Logo-resturant-cat-Admin" className="px-0 font-main input  py-0 my-2 file-replace" />
                                                    </div>{/* End Of input file */}
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center px-0" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" id="nameAdminOffer" className="add-data-input text-center"/>
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <input type="text" id="descAdminOffer" className="add-data-input text-center"/>
                                                </td>
                                                <td scope="row" className="font-main text-capitalize head-table text-center px-1" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                    <div className="div-input d-flex justify-content-center px-0">
                                                        <BsCheck style={{fontSize:"20px",cursor:"pointer"}} className="edit-icon" onClick={() => CreateNewOfferByAdmin()}  />
                                                        {/* <IoMdClose style={{fontSize:"20px",cursor:"pointer"}} className="del-icon" /> */}
                                                    </div>
                                                </td>
                                            </tr>
                                            {AprovedOffer.map( ({image,name,description,_id}, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td scope="row" className="font-main text-capitalize head-table text-center">
                                                            <img src={Domine+"/"+image || LikeImg} className="rounded" width="50" height="50" alt="resturnt" />
                                                        </td>
                                                        <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{name}</td>
                                                        <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{description}</td>
                                                        <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                            <div className="div-input d-flex justify-content-between px-0">
                                                                {/* <MdModeEdit className="edit-icon mr-3" style={{fontSize:"20px",cursor:"pointer"}} /> */}
                                                                <MdDelete  className="del-icon" style={{fontSize:"20px",cursor:"pointer"}} onClick={() => DelOfferById(_id)} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>










                <div className="offer-admin-two mt-4">
                    <div className="all-admin-offer">
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <label  className="mb-0 label px-2">Offers Requests</label>
                            </div>
                            <div className="w-100 all-menu">
                                <table className="table w-100">
                                    <thead>
                                        <tr className="table-header">
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>name</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>title</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>description</th>
                                            <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="par_cat">
                                        {RquestesOffer.map( ({creator,name,description,_id}, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{creator}</td>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{name}</td>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{description}</td>
                                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                                        <div className="div-input d-flex justify-content-between px-0">
                                                            {/* <MdModeEdit className="edit-icon mr-3" style={{fontSize:"20px",cursor:"pointer"}} /> */}
                                                            <MdDelete  className="del-icon" style={{fontSize:"20px",cursor:"pointer"}} onClick={() => DelOfferById(_id)} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
