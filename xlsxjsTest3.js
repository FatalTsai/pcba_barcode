const XLSX = require('xlsx');

// read from a XLS file
let workbook = XLSX.readFile('test.xlsx');

// get first sheet
let first_sheet_name = workbook.SheetNames[0];
let worksheet = workbook.Sheets[first_sheet_name];

// read value in D4 
let cell = worksheet['D4'];
console.log(cell)

// modify value in D4
worksheet['D4'] = 'NEW VALUE from NODE';

// write to new file
XLSX.writeFile(workbook, 'test2.xls');