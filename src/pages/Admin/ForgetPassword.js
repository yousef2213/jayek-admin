import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../../images/Logo1.png'
import Banner from '../../images/banner2.png'

export default function Forget() {

    const SendEmail = () => {
        let email = document.getElementById('emailForgetAdmin').value;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"email":email});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("{{local}}/api/admin/forget", requestOptions)
        .then(response => response.json())
        .then(result => alert(result.message))
        .catch(error => console.log('error', error));
    }

    return (
        <div className="container-fluid" style={{background:"#2d7873"}}>
            <div className="container">
                <div className="row mx-0">
                    <div className="col-12 col-md-6 sing-in  mx-auto align-self-center d-flex align-items-center justify-content-center">
                        <form className="w-75">
                            <div className="text-center my-5">
                                <img src={Logo1} width="80" />
                            </div>
                            <div className="text-light text-capitalize text-center font-main">
                                <h2>forget password !</h2>
                                <p  style={{fontSize:"12px",padding:"0 90px"}}>
                                    please enter your email to receive a link to create new password via email
                                </p>
                            </div>
                            <div className="div-input">
                                <input type="email" placeholder="Email" id="emailForgetAdmin" className="font-main input" />
                            </div>
                            <div className="div-input">
                                <input type="button" value="send" onClick={SendEmail} className="font-main input-btn" />
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 mx-auto  align-self-center d-flex align-items-center justify-content-center">
                        <div className="my-4">
                            <img src={Banner} width="400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
