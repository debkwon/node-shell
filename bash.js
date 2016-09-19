// console.log(process);
// console.log(Object.keys(process));
var commands = require("./commands.js");
process.stdout.write('prompt >');
process.stdin.on('data', function(data){
  var cmd = data.toString().trim();//removes newline of the user's input
  //commands is an object containing all usable functions
  //this line runs the function at the user input's key
  var args = cmd.split(" ");
  var done = function(output){
  //showing the output
  process.stdout.write(output);
  //showing the prompt each time
  process.stdout.write('\nprompt > ');
};
  if (commands[args[0]] !== undefined){
   commands[args[0]](done, args.slice(1).join(" "));
  }

  
});