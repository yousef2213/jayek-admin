import React, { useEffect, useState } from 'react'
import TabelOffer from '../Tables/TabelOffer.js'
import Requests from '../Tables/Requests.js'
import CurrentOrders from '../Tables/CurrentOrders.js'
import PickUp from '../Tables/PickUp.js'

function Orders() { 


    return (

    <div className="form-home px-3">
        <h6 className="px-2 pb-0 pt-3 font-main color-main font-weight-bold">Resturant Offers</h6>
        <hr className="mb-0" />
        <div className="form-parent">
            <div className="w-100">{/* Star Tabs */}
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active p-3 mr-3" style={{borderRadius:"14px"}} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                            All Orders
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link p-3 mr-3" style={{borderRadius:"14px"}} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                            Orders Requestes
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link p-3 mr-3" style={{borderRadius:"14px"}} id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                            Curent Orders
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link p-3 mr-3" style={{borderRadius:"14px"}} id="pills-contact-tab" data-toggle="pill" href="#pills-order" role="tab" aria-controls="pills-order" aria-selected="false">
                            Orders Pick Up
                        </a>
                    </li>
                    <div className="ml-auto border-search">
                        <input type="search" placeholder="Search" className="input-search" />
                    </div>
                </ul>
                    <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active p-0 " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <TabelOffer  />
                    </div>
                    <div className="tab-pane fade p-0" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Requests  />
                    </div>
                    <div className="tab-pane fade p-0" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <CurrentOrders  />
                    </div>
                    <div className="tab-pane fade p-0" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
                        <PickUp  />
                    </div>
                </div>
            </div>{/* End TO Tabs */}
        </div>
    </div>
    )
}

export default Orders
