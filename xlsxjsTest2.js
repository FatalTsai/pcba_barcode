const xlsx=require('xlsx')


var workbook = xlsx.readFile('out.xlsx');
var sheetNames=workbook.SheetNames;
console.log(sheetNames)
var worksheet = workbook.Sheets[sheetNames[0]]
//console.log("fuck")
//console.log(worksheet);

worksheet['A8']={ t: 's',
v: 'fuck',
r: '<t>fuck</t><phoneticPr fontId="1" type="noConversion"/>',
h: 'fuck',
w: 'fuck' };

worksheet['!ref']='A1:E8'
console.log(worksheet)

let wb = xlsx.utils.book_new()

xlsx.utils.book_append_sheet(wb, worksheet, 'SheetJS')
xlsx.writeFile(workbook, 'out.xlsx')

