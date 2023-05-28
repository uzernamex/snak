const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  conn.setEncoding("utf8");
  conn.on("connect", (server) => {
    console.log("Successfully connected to the game server");
    server.write("Name: MAC");
    return conn;
  });
};
console.log("Connecting ...");
connect();

module.exports = { connect };
