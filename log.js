//Y:\MTK0824\build\tmp\deploy\images\auto2712p1v1-ivi_agl>fastboot oem writewifimac  20191022abcd

const fs=require('fs');

//const commandlog="...\n(bootloader) wifi mac write ok 0x20191022abcd\nOKAY [  0.015s]\nfinished. total time: 0.016s";
const commandlog="...\n(bootloader) bt mac write ok 0x20191022abce\nOKAY [  0.014s]\nfinished. total time: 0.015s"
//const commandlog ="fuck"




if(commandlog.indexOf("wifi mac")!=-1)
    var is_wifimac =true
else
    var is_wifimac = false

var address=''
var ptr=commandlog.indexOf('0x')
//console.log("ptr = "+String(ptr))
if(ptr!= -1)
{
   while(commandlog[ptr]!='\n')
   {
       address+=commandlog[ptr++]
   }
}
else
{
    address="NOTEXIST"
}

if(commandlog.indexOf("OKAY")!=-1 )
{
    if(is_wifimac)
    {
        console.log("wifi mac write ok "+address)
        fs.appendFileSync('./log.txt',"wifi mac write ok "+address+'\n')
    }
    else
    {
        console.log("bt mac write ok "+address)
        fs.appendFileSync('./log.txt',"bt mac write ok "+address+'\n')
    }

}

