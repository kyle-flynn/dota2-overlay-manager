const d2gsi = require("dota2-gsi");
const server = new d2gsi({ port: 9001 });
const selfToken = "killjoy_76561198039309618";

server.events.on("newclient", function (client) {
  if (client.auth && client.auth.token === selfToken) {
    console.log("Your token has been detected. You are connected.");
    client.on("map:game_state", function (state) {
      if (state === "DOTA_GAMERULES_STATE_HERO_SELECTION") {
        // TODO - Update OBS overlay - hide team heroes
      }
      if (state === "DOTA_GAMERULES_STATE_STRATEGY_TIME") {
        // TODO - Update OBS overlay - show team heroes
      }
      if (state === "DOTA_GAMERULES_STATE_TEAM_SHOWCASE") {
        // TODO - Update OBS overlay - disable all overlays
      }
      if (state === "DOTA_GAMERULES_STATE_PRE_GAME") {
        // TODO - Update OBS overlay - show wards overlay
      }
    });
  }
});
