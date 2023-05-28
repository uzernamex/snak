module.exports = {
  IP: "Localhost",
  PORT: 5500,
};

module.exports = {
  handleUserInput = function(data) {
    if (data === "w") {
      connection.write("Move up")
    } if (data === "a") {
      connection.write("Move left")
    } if (data === "s") {
      connection.write("Move down");
    } if (data === "d") {
      connection.write("Move right");
    } if (data === "ctrl+C") {
      process.exit();
    }
  }
};