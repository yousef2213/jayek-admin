import React, { useContext } from 'react'
import DatePicker from "react-datepicker";
import { ExportCSV } from '../ExportCvs';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { JayAdminContext } from '../../context/context';
import MaterialTable from 'material-table';
import { BorderAll } from '@material-ui/icons';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import Moment from 'moment';


export default function Orders() {

    const { getAllOrders, OrdersTimes = [] }= useContext(JayAdminContext)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const columns = [
        { field: 'Username', headerName: 'Username', width: 130 },
        { field: 'mob', headerName: 'User Moblie Number', width: 130 },
        {
            field: 'orderN',
            headerName: 'Order Number',
            type: 'number',
            width: 90,
        },
        { field: 'date', headerName: 'Date', width: 130 },

        {
            field: 'total',
            headerName: 'Total Amount',
            width: 160,
        },
        { field: 'payment', headerName: 'Payment Method', width: 130 },

    ];
    
    const rows = [
        { id: 1, mob: '0123456789', Username: 'Jon', orderNq: "#35",date: "11/02/2021",total: "112.5",payment: "online" },
        { id: 2, mob: '0123456789', Username: 'Cersei', orderN: "#42",date: "11/02/2021",total: "112.5",payment: "online",payment: "online" },
        { id: 3, mob: '0123456789', Username: 'Jaime', orderN: "#45",date: "11/02/2021",total: "112.5",payment: "online" },
        { id: 4, mob: '0123456789', Username: 'Arya', orderN: "#16",date: "11/02/2021",total: "112.5",payment: "online" },
        { id: 5, mob: '0123456789', Username: 'Daenerys', orderN: "#552",date: "11/02/2021",total: "112.5",payment: "online" },
        { id: 6, mob: '0123456789', Username: "Daenerys", orderN: "#150",date: "11/02/2021",total: "112.5",payment: "online" },
        { id: 7, mob: '0123456789', Username: 'Ferrara', orderN: "#44",date: "11/02/2021",total: "112.5",payment: "online" },
        { id: 8, mob: '0123456789', Username: 'Rossini', orderN: "#36",date: "11/02/2021",total: "112.5",payment: "online" },
        { id: 9, mob: '0123456789', Username: 'Harvey', orderN: "#65",date: "11/02/2021",total: "112.5",payment: "online" },
    ];

    const fileName = 'Orders';



    if(OrdersTimes.length === 0) {
        return (
            <div className="form-home px-3">
            <h6 className="px-2 pb-0 pt-3 font-main color-main font-weight-bold">Orders</h6>
            <hr className="mb-0" />
            <div className="d-flex justify-content-between align-items-center mt-2 font-main">
                <label  className="mb-0 label px-2">Filter by date:</label>
                <span style={{fontSize:"13px"}} className="font-main">From</span>: <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <span style={{fontSize:"13px"}} className="font-main">To</span>: <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                <button className="btn ml-4 mb-2 btn-find text-light" onClick={() => getAllOrders(startDate,endDate)} >Find</button>
                <div className="ml-auto border-search">
                    {/* <input type="search" placeholder="Search" className="input-search py-0" /> */}
                </div>
            </div>
            <div>
                <div className="w-100 px-0 mx-0">
                    <table className="table">
                        <thead>
                            <tr className="table-header">
                                <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Username</th>
                                <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>User Moblie Number</th>
                                <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Order Number</th>
                                <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Restaurant Name</th>
                                <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Date</th>
                                <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Total Amount</th>
                                <th scope="col" className="font-main text-capitalize head-table text-center" style={{fontSize:"13px"}}>Payment Method</th>
                            </tr>
                        </thead>
                    </table>
                    <h4 className="text-center w-100 font-main py-5">Orders Empty, Search Now By Date ...</h4>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className="form-home px-3">
            <h6 className="px-2 pb-0 pt-3 font-main color-main font-weight-bold">Orders</h6>
            <hr className="mb-0" />
            <div className="d-flex justify-content-between align-items-center mt-2 font-main">
                <label  className="mb-0 label px-2">Filter by date:</label>
                <span style={{fontSize:"13px"}} className="font-main">From</span>: <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <span style={{fontSize:"13px"}} className="font-main">To</span>: <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                <button className="btn ml-4 mb-2 btn-find text-light" onClick={() => getAllOrders(startDate,endDate)} >Find</button>
                <div className="ml-auto border-search d-flex">
                    <ExportCSV csvData={OrdersTimes} fileName={fileName} />
                </div>
            </div>
            <div>
                <div className=" w-100 px-0 mx-0">
                    <MultipleActions OrdersTimes={OrdersTimes} from={startDate} to={endDate} />
                </div>
            </div>
        </div>
    )
}


function MultipleActions(OrdersTimes, from, to) {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#f9b34c',
            },
            secondary: {
                main: '#f9b34c',
            },
            },
        });
    return (
        <MuiThemeProvider theme={theme}>
            <MaterialTable
                options={{
                    search: true,
                    exportButton: true,
                    // selection: true
                    actionsColumnIndex: -1
                }}

                // title={`Results Searching ...`}
                title={`نتائج البحث`}
                columns={[
                    // { title: 'Id', field: '_id' },
                    { title: 'Username', field: 'client.name' },
                    { title: 'User Moblie Number', field: 'client.phone' },
                    { title: 'Order Number', field: 'order_number', type: 'numeric' },
                    {title: 'Restaurant Name',field: 'rest.name'},
                    {title: 'Data',field: 'special_request'},
                    {
                        title: 'Date',
                        // field: 'createdAt',
                        render: rowData => <span> {Moment(rowData.createdAt).format('Y-M-D')} </span>
                    },
                    {title: 'Total Amount',field: 'total_price'},
                    {title: 'Payment Method',field: 'payment_method'},
                ]}
                data={OrdersTimes.OrdersTimes}
                
            />
        </MuiThemeProvider>
    )
}



