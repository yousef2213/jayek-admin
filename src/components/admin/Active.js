import React, { useContext } from 'react'
import { JayAdminContext } from '../../context/context';

export default function Active() {
    const { ResturantsActivation = [], DelResturants, DeActivation } = useContext(JayAdminContext);


    if(ResturantsActivation.length === 0) {
        return (
            <div>
                <div className="w-100 px-0 mx-0">
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
                    <h4 className="text-center font-main py-4 text-capitalize">There are no active offers</h4>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="all-menu w-100 px-0 mx-0">
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
                        {ResturantsActivation.map( ({id,name,type,email,phone}) => {
                            return (
                                <tr key={id}>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{name}</td>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{type}</td>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}> {email} </td>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{phone}</td>
                                    <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                        <div className="div-input d-flex justify-content-around px-0 mx-0">
                                            <button className="baged btn btn-deactive btn-sm" style={{borderRadius:"10px"}} onClick={() => DeActivation(id)}>Deactivate</button>
                                            <button className="baged btn btn-outline-del  btn-sm" style={{borderRadius:"10px"}} onClick={() => DelResturants(id)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
