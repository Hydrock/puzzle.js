const fs = require('fs');
const directories = require('./directories.js');
const chalk = require('chalk');
const jsonFormat = require('json-format');

module.exports = function (config, components) {

  // save temp project config
  const pathToTempConfig = directories.appRoot + '/app/tmp/tmp-config.json';
  fs.writeFile(pathToTempConfig, jsonFormat(config), function(err) {
    if (err) {
      console.log(chalk.green('Project config not saved'));
    } else {
      console.log(chalk.green('Project config saved'));
    }
  });

  // save temp components config
  const pathToTempComponents = directories.appRoot + '/app/tmp/tmp-components.json';
  fs.writeFile(pathToTempComponents, jsonFormat(components), function(err) {
    if (err) {
      console.log(chalk.green('Components config not saved'));
    } else {
      console.log(chalk.green('Components config saved'));
    }
  });
}