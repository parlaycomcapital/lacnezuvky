const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const workbook = XLSX.readFile(path.join(process.cwd(), 'Snus catalog.xlsx'));
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

// Transform data to our Product interface
const products = data.map((row, index) => ({
  id: `snus-${index + 1}`,
  code: row['Code'] || '',
  category: row['Category'] || 'Unknown',
  name: row['Product Name'] || 'Unknown Product',
  strength: parseFloat(row['MG/Pouch']) || 0,
  prices: {
    tier1: 4.0, // 1-10 pcs = €4 per unit
    tier2: 3.5, // 11-49 pcs = €3.5 per unit
    tier3: 3.0, // 50+ pcs = €3 per unit
  },
  stock: 999, // Default stock
  tags: ['premium'],
  description: `${row['Category']} snus with ${row['MG/Pouch']}mg nicotine strength`,
  flavor: row['Product Name']?.split(' ').slice(1).join(' ') || 'Classic',
}));

// Get unique categories
const categories = [...new Set(products.map(p => p.category))];

console.log(`Imported ${products.length} products from ${categories.length} categories`);
console.log('Categories:', categories);

// Save to JSON file
const outputPath = path.join(process.cwd(), 'lib', 'products-data.json');
fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));

console.log(`\nProducts saved to: ${outputPath}`);
