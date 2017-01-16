//Object.keys(process).forEach((key) => {console.log(key); console.log(process[key])})
const nprompt = '\nprompt'
const cmds = require('./commands.js')
const fs = require('fs')
process.stdout.write('prompt > ');
//
// // The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    if (cmd === 'pwd') {
        cmds.pwd()
    }
    else if (cmd === 'date'){
            process.stdout.write('today\'s date is: ')
            process.stdout.write((new Date()).toDateString());
            process.stdout.write('\nprompt > ')
        }
    else if (cmd === 'ls') {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                            process.stdout.write(file.toString() + "\n");
                            })
            process.stdout.write("prompt > ");
            });
    }
    else {
        process.stdout.write("Unknown command: Try 'date' or 'pwd' maybe?");
        process.stdout.write('\nprompt > ')
    }
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
//
 });
