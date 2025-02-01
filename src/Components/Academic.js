import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import myGradeFile from "../Assets/My_Grade.xlsx";
import "./Academic.css";

const Academic = () => {
  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(myGradeFile);
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: "array" });

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        setExcelData(jsonData);
      } catch (error) {
        console.log("Error reading Excel file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <br />
      <br />
      <div className="academic-container">
        <div className="academic-header">
          <h1 className="highlight">📜 Academic Achievements</h1>
          <p className="sub-text">
            My academic journey and achievements at HKUST
          </p>
        </div>

        <div className="achievements">
          <h2>🎓 2023/2024 Fall Semester: Dean’s List</h2>
          <p className="tga">
            TGA: <span>3.717</span>
          </p>

          <h2>🎓 2024/2025 Fall Semester: Dean’s List</h2>
          <p className="tga">
            TGA: <span>3.731</span>
          </p>
        </div>

        <hr className="divider" />

        <h2 className="course-title">💫 Course Highlights</h2>
        <div className="table-container">
          <table className="academic-table">
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
      </div>
    </div>
  );
};

export default Academic;
