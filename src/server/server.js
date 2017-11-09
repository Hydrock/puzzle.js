'use strict';

// directories
const directories = require('./helpers/directories.js');
// get config
const getConfig = require('./helpers/get-config.js');
// get components
const getComponents = require('./helpers/get-components.js');
// save tmp congigs
const saveTmpFiles = require('./helpers/saveTmpFiles.js');

// formatComponents.js
const formatComponents = require('./helpers/formatComponents.js');

// app webserver
const webserver = require('./helpers/webserver.js');

/* ------------ */

(async () => {

  // get project config json
  const projectConfig = await getConfig();

  // get components json
  const components = await getComponents();

  // format components data for client
  const formattedComponents = formatComponents(components);

  // save temp configs
  await saveTmpFiles(projectConfig, formattedComponents);

  webserver();

})()