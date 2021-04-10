import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../../images/Logo1.png'
import Banner from '../../images/banner2.png'
import { useContext } from 'react'
import { JayAdminContext } from '../../context/context'

export default function Login() {
    const { Login } = useContext(JayAdminContext)
    return (
        <div className="container-fluid" style={{background:"#2d7873"}}>
            <div className="container">
                <div className="row mx-0">
                    <div className="col-12 col-md-6 sing-in  mx-auto align-self-center d-flex align-items-center justify-content-center">
                        <form className="w-75" onSubmit={(e) => Login(e)}>
                            <div className="text-center my-5">
                                <img src={Logo1} width="80" />
                            </div>
                            <div className="div-input">
                                <input type="email" id="EmailLogin" placeholder="Email" className="font-main input" />
                            </div>
                            <div className="div-input">
                                <input type="password" id="PassLogin" placeholder="Password" className="font-main input" />
                            </div>
                            <div className="div-input">
                                <input type="submit" value="Login" onSubmit={Login} className="font-main input-btn" />
                            </div>
                            <div className="text-center my-3">
                                <Link className="text-light font-main" style={{fontSize:"15px"}} to="/forget-password">Forget Your Password?</Link>
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
