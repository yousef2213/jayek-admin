import React from 'react'

function Requests() {

    let List = [
        {id: 1,name: "Yousef", mob: 23456733, orderNum: 123, orderDoc: "mac book", req: "mac book",totalA: 19000,payment:"Cach",status: 1},
        {id: 2,name: "Yousef", mob: 23456733, orderNum: 123, orderDoc: "mac book", req: "mac book",totalA: 19000,payment:"online",status: 2},
        {id: 3,name: "Yousef", mob: 23456733, orderNum: 123, orderDoc: "mac book", req: "mac book",totalA: 19000,payment:"online",status: 3},
        {id: 4,name: "Yousef", mob: 23456733, orderNum: 123, orderDoc: "mac book", req: "mac book",totalA: 19000,payment:"online",status: 4},
        {id: 5,name: "Yousef", mob: 23456733, orderNum: 123, orderDoc: "mac book", req: "mac book",totalA: 19000,payment:"online",status: 5},
        {id: 6,name: "Yousef", mob: 23456733, orderNum: 123, orderDoc: "mac book", req: "mac book",totalA: 19000,payment:"online",status: 2},
        {id: 7,name: "Yousef", mob: 23456733, orderNum: 123, orderDoc: "mac book", req: "mac book",totalA: 19000,payment:"online",status: 1},
        {id: 8,name: "Yousef", mob: 123456733, orderNum: 123, orderDoc: "mac book", req: "mac book",totalA: 19000,payment:"Cach",status: 1},
        {id: 9,name: "Yousef", mob: 123456733, orderNum: 123, orderDoc: "mac book", req: "mac book",totalA: 19000,payment:"online",status: 2},
    ]
    return (
        <div className="all-orders w-100">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th scope="col" className="thFirst font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>name</th>
                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>mobile number</th>
                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>order number</th>
                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>order details</th>
                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>special request</th>
                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>total amount</th>
                        <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>payment method</th>
                        <th scope="col" className="thLast font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {List.map( ({id,name,mob,orderNum,orderDoc,req,totalA,payment,status}) => {
                        return (
                            <tr key={id}>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{name}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{mob}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{orderNum}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{orderDoc}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{req}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{totalA}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>{payment}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px",verticalAlign: "middle"}}>
                                <div>
                                <button className="baged btn btn-outline-success btn-sm w-75 mb-1 px-0" style={{borderRadius:"10px",padding:"5px"}}>Accept</button>
                                <button className="baged btn btn-outline-dark btn-sm w-75 px-0" style={{borderRadius:"10px",padding:"5px"}}>Reject</button>
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

export default Requests
