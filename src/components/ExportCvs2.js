import React from 'react'

import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';

import { BsDownload } from 'react-icons/bs'

export const ExportCSV = ({csvData, fileName}) => {



    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const fileExtension = '.xlsx';



    const exportToCSV = (csvData, fileName) => {

        const ws = XLSX.utils.json_to_sheet(csvData);

        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        const data = new Blob([excelBuffer], {type: fileType});

        FileSaver.saveAs(data, fileName + fileExtension);

    }



    return (
            <>
            <BsDownload className="align-self-center ml-2 font-weight-bold" style={{fontSize:'20px',cursor:"pointer",color:"#757575", fontWeight:"bold"}} onClick={(e) => exportToCSV(csvData,fileName)} />
        </>
    )

}