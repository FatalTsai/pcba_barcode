const exec = require('child_process').exec;
const iconv = require('iconv-lite');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '....> '
});

rl.prompt();

rl.on('line', (input) => {
    exe(input)
    rl.prompt()
  });

function exe(command)
{
    if(command == undefined  || command == '')
        return

    console.log("command = "+command)
    exec(command,{encoding:'binaryEncoding'}, function(error, stdout, stderr){
      if(error) {
          //console.error('error: ' + iconv.decode(error,'cp950'));
          console.error('error: '+error)
          return;
      }
      console.log('stdout: ' + iconv.decode(stdout,'cp950'));
      console.log('stderr: ' + typeof stderr);
  });
}
