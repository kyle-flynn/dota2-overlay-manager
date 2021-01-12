var d2gsi = require("dota2-gsi");
var server = new d2gsi();

var clients = [];

server.events.on("newclient", function (client) {
  console.log("New client connection, IP address: " + client.ip);
  if (client.auth && client.auth.token) {
    console.log("Auth token: " + client.auth.token);
  } else {
    console.log("No Auth token");
  }
  clients.push(client);
});

setInterval(function () {
  clients.forEach(function (client, index) {
    if (client.gamestate.hero && client.gamestate.hero.level) {
      console.log(
        "Client " + index + " is level " + client.gamestate.hero.level
      );
    }
  });
}, 1 * 1000); // Every ten seconds
