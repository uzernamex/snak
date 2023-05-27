const net = require("net");


const connect = require("./connect");

console.log(connect);
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

//"Say: _____"

stdin.on("data", handleUserInput);
const handleUserInput = function () {
  // your code here
};
///////////////////////////////////

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();