//Lighthouse Lab
//Week 2, Day 3
//Multiplayer Snake Game
//Anil Patel, pair programmed with Arlet Vasquez

const net = require('net');

/**
 * Setup User Interface 
 * Handle user input via stdin function
 */

let conn;

const setupInput = function(connection) {
  conn = connection; 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data" , handleUserInput) 
  return stdin;
}; 

//FUNCTION handleUserInput 
//Registered as "data" callback handler for Function stdin. 

const handleUserInput = function (data) {
  if ('\u0003' === data) { // 
    process.exit();
    } else if('w' === data) {
      conn.write('Move: up');
    } else if('s' === data) {
      conn.write('Move: down');
    } else if('d' === data) {
      conn.write('Move: right');
    } else if('a' === data) {
      conn.write('Move: left');
    } else if('b' === data) {
      conn.write('Say: boo');
     } else if('m' === data) {
        conn.write('Say: mice');
     }
};

//FUNCTION stdin 
// Event Handler
// Register the Event with setupInput function above, BEFORE returning stdin object
// 'Event Listener' such that when data called, event exist
// Register/Capture the data and call the handle  

// Export object using the key setupInput

module.exports = {setupInput}; 