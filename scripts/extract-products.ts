import * as XLSX from 'xlsx'
import fs from 'fs'
import path from 'path'

// Read the Excel file
const workbook = XLSX.readFile(path.join(process.cwd(), 'Snus catalog.xlsx'))

// Get the first sheet
const sheetName = workbook.SheetNames[0]
const worksheet = workbook.Sheets[sheetName]

// Convert to JSON
const data = XLSX.utils.sheet_to_json(worksheet)

console.log('Excel file columns:', Object.keys(data[0] || {}))
console.log('\nFirst 3 rows:')
console.log(JSON.stringify(data.slice(0, 3), null, 2))

// This will help identify which columns map to which product fields
export {}
