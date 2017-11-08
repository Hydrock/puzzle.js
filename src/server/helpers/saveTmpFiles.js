const fs = require('fs');
const directories = require('./directories.js');
const chalk = require('chalk');
const jsonFormat = require('json-format');

module.exports = function (config, components) {

  const pathToTempConfig = directories.appRoot + '/app/tmp/tmp-config.json';
  fs.writeFile(pathToTempConfig, jsonFormat(config), function(err) {
    if (err) {
      console.log(chalk.green('Config not saved'));
    } else {
      console.log(chalk.green('Config saved'));
    }
  });

  const pathToTempComponents = directories.appRoot + '/app/tmp/tmp-components.json';
  fs.writeFile(pathToTempComponents, jsonFormat(components), function(err) {
    if (err) {
      console.log(chalk.green('Config not saved'));
    } else {
      console.log(chalk.green('Config saved'));
    }
  });
}