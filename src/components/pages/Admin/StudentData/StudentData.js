import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainHeader from "../../../mainHeader/mainHeader";
import Footer from "../../../footer/footer";

const ExcelTableDisplay = () => {
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const content = e.target.result;
      parseExcel(content);
    };

    reader.readAsArrayBuffer(file);
  };

  const parseExcel = (data) => {
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheetData = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);

    Papa.parse(sheetData, {
      header: true,
      complete: (parsedData) => {
        // Assuming your Excel file has columns: "First Name", "Last Name", "Email", "Year"
        const requiredColumns = ["First Name", "Last Name", "Email", "Year"];
        const filteredData = parsedData.data.map((row) => {
          return {
            firstName: row[requiredColumns[0]],
            lastName: row[requiredColumns[1]],
            email: row[requiredColumns[2]],
            year: row[requiredColumns[3]],
          };
        });

        setData(filteredData);
        showDataArrivedToast(); // Show the toast when data arrives
      },
    });
  };

  const showDataArrivedToast = () => {
    toast.success('Data has arrived!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // 3 seconds
    });
  };

  return (
      <div>
        <MainHeader />
        <input type="file" onChange={handleFileChange} />
        <table>
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Year</th>
          </tr>
          </thead>
          <tbody>
          {data.map((row, index) => (
              <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.year}</td>
              </tr>
          ))}
          </tbody>
        </table>
        <Footer />
      </div>
  );
};

export default ExcelTableDisplay;
