// server.js
const { IP, PORT } = require("./constants");
const net = require("net");
const server = net.createServer();
server.on("connection", (client) => {
  console.log("New client connected!");

  client.write("Hello from the server!");

  client.setEncoding("utf8"); // interpret data as text

  client.on("data", (data) => {
    console.log("Message from client: ", data);

  client.write("Name: ___")
    

  });
});
server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
// client.js
const net = require("net");
const conn = net.createConnection({
  host: "localhost",
  port: 5500
});
conn.on("data", (data) => {
  console.log("Server says: ", data);
});
conn.on("connect", () => {
  conn.write("Hello from client!");
});
conn.setEncoding("utf8");

//conn.on("move up", (data) => {
//  console.log("Server says: ", data);
//});

/*
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 5500,
   })
    
    conn.on("connect", () => {
      console.log('Successfully connected to game server');
      return "Name: ___"
    });
    


conn.on("connect", () => {
  conn.write("Hello from client!");
});




  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.addListener; {
  console.log (conn)
  };


  return conn;
};

client.setEncoding("utf8"); // interpret data as text
client.on("data", (data) => {
  console.log("Message from client: ", data);
});

console.log("Connecting ...");
connect();

module.exports = {connect}
*/