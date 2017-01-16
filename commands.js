//Object.keys(process).forEach((key) => {console.log(key); console.log(process[key])})


// // The stdin 'data' event fires after a user types in a line
exports.pwd = function () {
    process.stdout.write(process.mainModule.filename.split('/').slice(0, -1).join('/'))
    process.stdout.write('\nprompt > ')
  }

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
//
