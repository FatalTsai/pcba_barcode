const exec = require('child_process').exec;
const iconv = require('iconv-lite');

 exec('dir',{encoding:'binaryEncoding'}, function(error, stdout, stderr){
      if(error) {
          //console.error('error: ' + iconv.decode(error,'cp950'));
          console.error('error: '+error)
          return;
      }
      console.log('stdout: ' + iconv.decode(stdout,'cp950'));
      console.log('stderr: ' + typeof stderr);
  });
