'use strict';

// directories
const directories = require('./helpers/directories.js');
// app webserver
const webserver = require('./helpers/webserver.js');
// get config
const getConfig = require('./helpers/get-config.js');
// get components
const getComponents = require('./helpers/get-components.js');
// save tmp congigs
const saveTmpFiles = require('./helpers/saveTmpFiles.js');

/* ------------ */

// get project config json
const projectConfig = getConfig();

// get components json
let componentsJson;
getComponents.then(data => {
  componentsJson = data;
})

setTimeout(() => {
  saveTmpFiles(projectConfig, componentsJson);
}, 1000)


setTimeout(() => {
  webserver();
}, 2000);