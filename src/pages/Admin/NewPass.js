import React from 'react'
import Logo1 from '../../images/Logo1.png'
import Banner from '../../images/banner2.png'

export default function NewPass(props) {



    const Token = props.match.params.token;
    const SetNewPass = () => {
        let newPass = document.getElementById('newPassAdmin').value;
        let passConf = document.getElementById('newPassAdminConfirm').value;
        // new 

        if(newPass === "" || passConf === ""){
            alert('Please, Complete the data !')
        }else {
            if(newPass !== passConf){
                alert('Please, Check New Password !')
            }else {
                document.querySelector(".loading").classList.remove("hideloader");
                var myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${Token}`);
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({"new_password":newPass,"confirm_password":passConf});

                var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("https://rest-manage.herokuapp.com/api/admin/forget/reset", requestOptions)
                .then(response => response.json())
                .then(result => {
                    document.querySelector(".loading").classList.add("hideloader");
                    alert(result.message)
                })
                .catch(error => {
                    console.log('error', error)
                    document.querySelector(".loading").classList.add("hideloader");
                });

            }
        }
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
                                <h3>new password</h3>
                                <p  style={{fontSize:"12px",padding:"0 90px"}}>
                                    please enter your new password 
                                </p>
                            </div>
                            <div className="div-input">
                                <input type="password" placeholder="New Password" id="newPassAdmin" className="font-main input" />
                            </div>
                            <div className="div-input">
                                <input type="password" placeholder="Confirm Password" id="newPassAdminConfirm" className="font-main input" />
                            </div>
                            <div className="div-input">
                                <input type="button" value="send" onClick={SetNewPass} className="font-main input-btn" />
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
