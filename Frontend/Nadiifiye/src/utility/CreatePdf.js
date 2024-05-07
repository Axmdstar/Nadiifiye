// services/reportGenerator.js
import jsPDF from "jspdf";
import "jspdf-autotable";


// define a generatePDF function that accepts a tickets argument
const generatePDF = (table, ReportType) => {
    // initialize jsPDF
    const doc = new jsPDF("landscape");

    const len = Object.keys(table[0]).length;

    // define the columns we want and their titles
    const tableColumn = Object.keys(table[0]).slice(1, len - 1);
    // define an empty array of rows
    const tableRows = [];

    // for each ticket pass all its data into an array
    table.forEach(t => {
        const tableData = [ 
        ... Object.values(t).slice(1, len - 1)
        ];
        tableRows.push(tableData);
    });

    
    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    
    
    doc.save(`${ReportType}_report.pdf`);
};

export default generatePDF;