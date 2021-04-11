import React from 'react'

import Offers from '../../components/admin/Offer.js'
import Orders from '../../components/admin/Orders.js'

import LogoSide from "../../images/Logo2.png"
import LogoutImg from "../../images/Logout.png"

import {ReactComponent as OfferLogo}  from "../../images/grey/offers.svg";
import {ReactComponent as OrdersLogo}  from "../../images/grey/orders.svg";
import {ReactComponent as RestaurantsLogo}  from "../../images/grey/restaurants.svg";
import {ReactComponent as Rest_regLogo}  from "../../images/grey/rest_reg.svg";



import { useContext } from 'react'
import { JayAdminContext } from '../../context/context'
import Registration from '../../components/admin/Registration'
import Restaurants from '../../components/admin/Restaurants'
import { useEffect } from 'react'

export default function Home() {
    
    const { Logout } = useContext(JayAdminContext);

    useEffect(() => {
        document.querySelectorAll('a.nav-link-test-2').forEach(item => {
            let  sts = item.getElementsByTagName('svg')[0];
            sts.classList.add('logoascomponent2');
        })

    }, [])

    document.querySelectorAll('a.nav-link-test').forEach(item => {
        item.onclick = () => {
            let  sts = item.getElementsByTagName('svg');
            for(var s=0;s<sts.length;s++){
                sts[s].classList.remove('logoascomponent');
            } 
            for(var s=0;s<sts.length;s++){
                let spanText = sts[s].classList.add('logoascomponent');
                console.log(spanText);
            } 
        }
    })

    document.querySelectorAll('a.nav-link-test-2').forEach(item => {
        item.onclick = () => {
            let  sts = item.getElementsByTagName('svg');
            for(var s=0;s<sts.length;s++){
                sts[s].classList.remove('logoascomponent2');
            } 
            for(var s=0;s<sts.length;s++){
                let spanText = sts[s].classList.add('logoascomponent2');
                console.log(spanText);
            } 
        }
    })

    document.querySelectorAll('a.nav-link-test-3').forEach(item => {
        item.onclick = () => {
            let  sts = item.getElementsByTagName('svg');
            for(var s=0;s<sts.length;s++){
                sts[s].classList.remove('logoascomponent3');
            } 
            for(var s=0;s<sts.length;s++){
                let spanText = sts[s].classList.add('logoascomponent3');
                console.log(spanText);
            } 
        }
    })

    
    return (
        <div className="container-fluid bg-main">
            <div>
                <div className="container bg-home bg-main root">
                    <div className="row mx-0">
                        <div className="col-12 mx-auto">
                            <div className="pt-2 pb-0">
                                <div className="row bg-main" >
                                    <div className="col-3 side py-3">
                                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a className="nav-link nav-link-test-2 active mt-3" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                                <Rest_regLogo className="icon-side"  width="25" />
                                                Resturant Registration
                                            </a>
                                            <a className="nav-link nav-link-test mt-3 py-2" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                            <RestaurantsLogo className="icon-side" width="25" />
                                                Restaurants
                                            </a>
                                            <a className="nav-link nav-link-test-2 nav-link-test mt-3 py-2" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                                {/* <img src={log2} alt="log1" width="20" className="mr-3" /> */}
                                                <OfferLogo className="icon-side" width="25" />
                                                Resturant offers
                                            </a>
                                            <a className="nav-link nav-link-test-3 nav-link-test mt-3 py-2" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                                {/* <img src={log3} alt="log1" width="22" className="mr-3" /> */}
                                                <OrdersLogo className="icon-side" width="25" />
                                                orders
                                            </a>
                                        </div>
                                        <div className="logo-side text-center">
                                            <img src={LogoSide} width="40" />
                                            <p className="mb-0 mt-3 font-main" style={{fontSize:"13px"}}> Copyright © {new Date().getFullYear()} Jayek . All Rights Reserved </p>
                                            <hr className="w-75" />
                                            <button className="btn-close font-main" onClick={Logout}>
                                                <img src={LogoutImg} alt="log1" width="20" className="mr-3" />
                                                Logout
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-9">
                                        <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <Registration />
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                            <Restaurants />
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                            <Offers />
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                            <Orders />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
