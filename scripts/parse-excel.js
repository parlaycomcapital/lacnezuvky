const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const workbook = XLSX.readFile(path.join(process.cwd(), 'Snus catalog.xlsx'));

// Get all sheet names
console.log('Sheet names:', workbook.SheetNames);

// Process each sheet
workbook.SheetNames.forEach((sheetName, index) => {
  console.log(`\n=== Sheet ${index + 1}: ${sheetName} ===`);
  const worksheet = workbook.Sheets[sheetName];
  
  // Convert to JSON
  const data = XLSX.utils.sheet_to_json(worksheet);
  
  console.log('Total rows:', data.length);
  console.log('\nColumns:', Object.keys(data[0] || {}));
  console.log('\nFirst 3 rows:');
  console.log(JSON.stringify(data.slice(0, 3), null, 2));
});
