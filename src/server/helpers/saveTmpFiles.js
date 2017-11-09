const fs = require('fs');
const directories = require('./directories.js');
const chalk = require('chalk');
const jsonFormat = require('json-format');

module.exports = function (config, components) {

  let p1 = new Promise( (resolve, reject) => {
    // save temp project config
    const pathToTempConfig = directories.appRoot + '/app/tmp/tmp-config.json';
    fs.writeFile(pathToTempConfig, jsonFormat(config), function(err) {
      if (err) {
        console.log(chalk.green('Project config not saved'));
      } else {
        console.log(chalk.green('Project config saved'));
        resolve();
      }
    });
  })

  let p2 = new Promise( (resolve, reject) => {
    // save temp components config
    const pathToTempComponents = directories.appRoot + '/app/tmp/tmp-components.json';
    fs.writeFile(pathToTempComponents, jsonFormat(components), function(err) {
      if (err) {
        console.log(chalk.green('Components config not saved'));
      } else {
        console.log(chalk.green('Components config saved'));
        resolve();
      }
    });
  })

  return Promise.all([p1, p2]);

}