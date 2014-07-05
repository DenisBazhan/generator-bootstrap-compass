'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var fs = require('fs');


var BootstrapCompassGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');

        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous BootstrapCompass generator!'));

        var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Continue?',
            default: true
        }];

        this.prompt(prompts, function(props) {
            this.someOption = props.someOption;

            done();
        }.bind(this));
    },

    app: function() {
        this.mkdir('app');
        this.mkdir('app/public');
        this.mkdir('app/src');

        /* PUBLIC FOLDER */
        this.mkdir('app/public/css');
        this.mkdir('app/public/js');
        this.mkdir('app/public/images');

        this.copy('_package.json', 'package.json');
        this.copy('Gruntfile.js', 'Gruntfile.js');

        this.copy('index.html', 'app/public/index.html');

        /* SRC FOLDER */
        this.directory('bower_components/bootstrap-sass-official/assets/fonts', 'app/src/fonts');
        this.directory('bower_components/bootstrap-sass-official/assets/javascripts', 'app/src/javascripts');
        this.directory('bower_components/bootstrap-sass-official/assets/stylesheets', 'app/src/stylesheets');

        this.mkdir('app/src/stylesheets/pages');

        this.copy('_variables.scss', 'app/src/stylesheets/_variables.scss');
        this.copy('main.scss', 'app/src/stylesheets/main.scss');

        /* Copy _bootstrap.scss into stylesheets folder */
        this.copy('_bootstrap.scss', 'app/src/stylesheets/_bootstrap.scss');
    },

    projectfiles: function() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
    },

    _rm: function(path) {
        fs.unlink(path, function(err) {
            if (err) throw err;
            console.log('successfully deleted' + path);
        });
    },
    
    remove: function() {
        this._rm('app/src/stylesheets/bootstrap.scss');
        this._rm('app/src/stylesheets/bootstrap/bootstrap.scss');
    },

});

module.exports = BootstrapCompassGenerator;
