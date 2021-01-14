//Lighthouse Lab
//Week 2, Day 3
//Multiplayer Snake Game
//Anil Patel, pair programmed with Arlet Vasquez

const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  let stdin = process.stdin; 
  let name = "AKP"; 
  stdin.on('data', (input) => {
    conn.write(`${name}: ${input}`);
})

  conn.on('data', (data) => { //when client gets data, write to screen 
    console.log(data);
  });
  //on method needs 2 parameters: name of event, and the event handler for event ie. fn  
  //event handler for connect event; connect is param;    
  conn.on('connect', () => { //no input param for fn
  conn.write("Successfully connected to game server");
  });

  //return "Move UP"
  return conn;
}

console.log('Connecting ...');
connect();

module.exports = connect;