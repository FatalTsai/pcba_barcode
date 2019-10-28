const XLSX=require('xlsx');


const ws_data = [
    ['id','name','role','path','state'],
    [1,'Homepage','user','/',1],
    [2,'All article','user','/article',1]
];




const ws = XLSX.utils.aoa_to_sheet(ws_data);

//ws['A8']={v:"fuck",t:'s'}


console.log(ws['A1'])


let wb = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
XLSX.writeFile(wb, 'out.xlsx')

