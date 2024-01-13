import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import myGradeFile from '../Assets/My_Grade.xlsx';
import './Academic.css'; 

const Academic = () => {
    const [excelData, setExcelData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(myGradeFile);

          // Convert the response to an ArrayBuffer
          const data = await response.arrayBuffer();
          const workbook = XLSX.read(data, { type: 'array' });

          // Access the first sheet in the Excel file
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          // Update the component's state with the fetched JSON data
          setExcelData(jsonData);
        } catch (error) {
          console.log('Error reading Excel file:', error);
        }
      };
  
      fetchData(); // Invoke fetchData function immediately after the component mounts
    }, []);
  
    return (
      <div>
        <h1 className='result'>2023/2024 Fall Semester: Dean’s List</h1>
        <h1 className='result'>TGA: 3.717</h1>
        <h1 className="centered">Course Highlights💫</h1>
        <table>
          <tbody>
            {excelData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Academic;