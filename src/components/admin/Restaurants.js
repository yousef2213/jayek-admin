import React from 'react'
import { useContext } from 'react';
import { JayAdminContext } from '../../context/context.js';
import { ExportCSV } from '../ExportCvs.js';
import Active from './Active.js'
import DeActive from './DeActive.js'

export default function Restaurants() {
    const { ResturantsActivation } = useContext(JayAdminContext);

    const fileName = 'Resturants';

    return (
        <div className="form-home px-3" style={{maxHeight:"630px"}}>
            <h6 className="px-2 pb-0 pt-3 font-main color-main font-weight-bold">Resturant Offers</h6>
                <hr className="mb-0" />
                <div className="form-parent">
                    <div className="w-100">{/* Star Tabs */}
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item text-center w-25" role="presentation">
                                <a className="nav-link active p-3 mr-3" style={{borderRadius:"14px"}} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                    Activated
                                </a>
                            </li>
                            <li className="nav-item text-center w-25" role="presentation">
                                <a className="nav-link p-3 mr-3" style={{borderRadius:"14px"}} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    Deactivated
                                </a>
                            </li>
                            <div className="ml-auto border-search d-flex algin-items-center">
                                {/* <input type="search" placeholder="Search" className="input-search align-self-center" />
                                <BsDownload className="align-self-center mt-4 ml-2 font-weight-bold" style={{fontSize:'20px',cursor:"pointer"}} /> */}
                                <ExportCSV csvData={ResturantsActivation} fileName={fileName} />
                            </div>
                        </ul>
                            <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active p-0" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <Active />
                            </div>
                            <div className="tab-pane fade p-0" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <DeActive />
                            </div>
                        </div>
                    </div>{/* End TO Tabs */}
                </div>
        </div>
    )
}
