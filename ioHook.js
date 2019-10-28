'use strict';

var correspond =[];
var keycode = require('keycode'); //npm i keycode
const ioHook = require('iohook');//npm i iohook
const xlsx=require('xlsx');

var barcode="";
var ws_data=[];

var workbook = xlsx.readFile('out.xlsx');
var sheetNames=workbook.SheetNames;
console.log(sheetNames)
var worksheet = workbook.Sheets[sheetNames[0]]
let counter=2;

ioHook.on('keydown', event => {

    var element = keycode.names[  event['rawcode']  ];

    //console.log(keycode.names[  event['rawcode']  ]  ); 
    //console.log(event);
    if(element!='enter'
    )
    {
        barcode+=element;
    }
    else{

        while(worksheet['A'+counter]!=undefined)
            counter++


        console.log(barcode);
        //console.log("fuck off")
        worksheet['A'+counter++]={v:barcode,t:'s'}
      
        worksheet['!ref']='A1:E'+counter
        //console.log(worksheet)

        let wb = xlsx.utils.book_new()

        xlsx.utils.book_append_sheet(wb, worksheet, 'SheetJS')
        xlsx.writeFile(workbook, 'out.xlsx')


        barcode =''
    }

   

});

// Register and start hook
ioHook.start();

// Alternatively, pass true to start in DEBUG mode.
ioHook.start(true);

