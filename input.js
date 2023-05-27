let connection;

const setupInput = (conn) => {
  connection = conn;
//};
//const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


stdin.on("data", handleUserInput);
const handleUserInput = function () {
  // your code here
};

module.exports = {setupInput}