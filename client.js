//Lighthouse Lab
//Week 2, Day 3
//Multiplayer Snake Game
//Anil Patel, pair programmed with Desk 00

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

  conn.on('data', (data) => { //when client gets data, write to screen 
    console.log(data); 
  });

  return conn;
}

console.log('Connecting ...');
connect();