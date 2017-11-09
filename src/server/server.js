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

(async function () {

  // get project config json
  const projectConfig = await getConfig();
  // get components json
  let componentsJson = await getComponents;

  await saveTmpFiles(projectConfig, componentsJson);

  await webserver();

  console.log(1)

})();