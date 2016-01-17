`requires a recent version of node (for spawnSync)`;

process.env.DEBUG = "*";

require("child_process").spawnSync(__dirname + "/../../node_modules/.bin/nodemon", ["app/server"], {
  stdio: "inherit",
});
