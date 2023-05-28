let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = { setupInput };


const handleUserInput = function(data) {
  if (data === "w") {
    connection.write("Move up");
  } if (data === "a") {
    connection.write("Move left");
  } if (data === "s") {
    connection.write("Move down");
  } if (data === "d") {
    connection.write("Move right");
  } if (data === "ctrl+C") {
    process.exit();
  }
};
module.exports = { handleUserInput };