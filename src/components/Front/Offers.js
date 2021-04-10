import React, { useContext, useEffect, useState } from 'react'

function Offers() {

    return (
        <div className="form-home px-3">
            <h6 className="px-2 pb-0 pt-3 font-main color-main font-weight-bold">Resturant Offers</h6>
            <hr className="mb-0" />
            <div className="form-parent">
                <div className="offer-one">
                    <div className="herder">
                        <h5 className="font-main text-center text-capitalize">all offers</h5>
                        <p className="font-main text-center text-capitalize" style={{fontSize:"12px"}}>please, make sure to select all the offers that you want to provide your Resturant</p>
                    </div>
                    <hr />
                    <div className="all-offer">
                        <div className="row mx-0 checkScroll">
                            {/* {Offers.map( ({description,name},i) => {
                                return (
                                    <div key={i} className="col-6 my-2">
                                        <div className="d-flex offer">
                                            <div className="mr-3 align-self-center">
                                                <input type="checkbox" aria-label="Checkbox offer" />
                                            </div>
                                            <div>
                                                <h6>{name}</h6>
                                                <p>{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })} */}
                        </div>
                    </div>
                </div>










                <div className="offer-two">
                    <div className="herder px-3">
                        <h5 className="font-main text-center text-capitalize">have a special offer ?</h5>
                        <p className="font-main text-center text-capitalize" style={{fontSize:"12px"}}>you can send a request to add special offer for your resturant</p>
                    </div>
                    <form>
                        <div className="">{/* Star Of Request */}
                            <div className="div-input w-100">
                                <label htmlFor="titleOffer" className="mb-0 label px-2"></label>
                                <input type="text" id="titleOffer" placeholder="Offer Title" className="font-main input" />
                            </div> 
                            <textarea style={{width:'100%'}} id="descOffer" placeholder="Offer Description" className="font-main input" rows="4"></textarea>
                        </div>{/* End Of Request */}
                    </form>
                    <div className="div-input">
                        {/* <List /> */}
                    </div>
                    <div className="div-input my-4">
                        <input type="button"  value="Send Request"  className="font-main input-btn d-block ml-auto" />
                    </div>
                    <div>
                        <input type="button"  value="Save" className="font-main input-btn mt-5 w-75 d-block ml-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers
