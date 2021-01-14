//Lighthouse Lab
//Week 2, Day 3
//Multiplayer Snake Game
//Anil Patel, pair programmed with Arlet Vasquez

/*Refactored orginal code
const { connect } = require('./client');
console.log('Connecting ...');
connect();
*/

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

//FUNCTION stdin 
// Event Handler
// Register the Event with setupInput function above, BEFORE returning stdin object
// 'Event Listener' such that when data called, event exist
// Register/Capture the data and call the handle  

stdin.on("data" , handleUserInput) 

return stdin;
}; 

//FUNCTION handleUserInput 
//Registered as "data" callback handler for Function stdin. 

const handleUserInput = function (data) {
if ('\u0003' === data) { // 
  process.exit();
  }
};




//module.exports = connect; not needed