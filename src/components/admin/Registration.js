import React, { useContext } from 'react'
import { JayAdminContext } from '../../context/context';

export default function Registration() {

    const { Invitation, Resturants = [], Approvition, DeletingResturant } = useContext(JayAdminContext)


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
