import React from 'react'


function TabelOffer() {
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
                            <th scope="col" className="thLast font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {List.map( ({id,name,mob,orderNum,orderDoc,req,totalA,payment,status}) => {
                            let btn;
                            if(status === 1){
                                btn = <button className="baged btn btn-success btn-sm w-100" style={{borderRadius:"10px"}}>Ready</button>
                            }else if (status === 2) {
                                btn = <button className="baged btn btn-info  btn-sm w-100" style={{borderRadius:"10px"}}>Delivered</button>
                            }else if (status === 3) {
                                btn = <button className="baged btn btn-warning  btn-sm w-100" style={{borderRadius:"10px"}}>in progress</button>
                            }else if (status === 4) {
                                btn = <button className="baged btn btn-dark  btn-sm w-100" style={{borderRadius:"10px"}}>Rejected</button>
                            }else if (status === 5) {
                                btn = <button className="baged btn btn-danger  btn-sm w-100" style={{borderRadius:"10px"}}>Canceled</button>
                            }else if (status === 6) {
                                btn = <button className="baged btn btn-primary  btn-sm w-100" style={{borderRadius:"10px"}}>Timeout</button>
                            }
                            return (
                                <tr key={id}>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>{name}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>{mob}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>{orderNum}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>{orderDoc}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>{req}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>{totalA}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>{payment}</td>
                                <td scope="row" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>
                                    {btn}
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    )
}

export default TabelOffer
