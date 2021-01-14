//Lighthouse Lab
//Week 2, Day 3
//Multiplayer Snake Game
//Anil Patel, pair programmed with Arlet Vasquez

//Refactored orginal code

const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const connection = connect();

setupInput(connection);








//module.exports = connect; not needed