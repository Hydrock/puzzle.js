const jsonfile = require('jsonfile')
const directories = require('./directories.js');
const chalk = require('chalk');

module.exports = function () {
  const configName = '/puzzle.json';
  const pathToConfig = directories.projectFolder + configName;

  try {
    let projectConfig = jsonfile.readFileSync(pathToConfig);
    console.log(chalk.green('Project configuration found'));
    return projectConfig;
  } catch (error) {
    console.log(chalk.red('Project configuration not found'));
    process.exit();
  }
}