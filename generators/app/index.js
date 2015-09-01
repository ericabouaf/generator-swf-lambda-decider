'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the rad ' + chalk.red('SwfLambdaDecider') + ' generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your decider name',
      default : this.appname // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'swfdomain',
      message : 'SWF domain',
      default : 'testdomain'
    },
    {
      type    : 'input',
      name    : 'swftasklist',
      message : 'Default SWF task list',
      default : 'testtasklist'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copy(
        this.templatePath('_index.js'),
        this.destinationPath('index.js')
      );
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );
      this.fs.copyTpl(
        this.templatePath('lambda-config.js'),
        this.destinationPath('lambda-config.js'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('swf-config.js'),
        this.destinationPath('swf-config.js'),
        this.props
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.npmInstall();
  }
});
