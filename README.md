# generator-bootstrap-compass 

> [Yeoman](http://yeoman.io) generator

![](http://i.imgur.com/JHaAlBJ.png)

## About
This generator creates folder structure to work with Compass and Bootstrap. Also creates Gruntfile with such tasks as "Compile Sass/Compass" and "LiveReload"

```bash
your_project_folder/
|
|-app/
|  |-public/
|  |  |-css/
|  |  |-js/
|  |  |-images/
|  |  |-index.html
|  |-src/
|  |  |-fonts/
|  |  |  |-bootstrap/
|  |  |  |  |-... bootstrap fonts components
|  |  |-javascripts/
|  |  |  |-bootstrap/
|  |  |  |  |-... bootstrap js components
|  |  |  |-bootstrap.js
|  |  |  |-bootstrap-sprockets.js
|  |  |-stylesheets/
|  |  |  |-bootstrap/
|  |  |  |  |-mixins
|  |  |  |  |-... bootstrap scss components
|  |  |  |-pages/
|  |  |  |-_bootstrap.scss
|  |  |  |-_bootstrap-compass.scss
|  |  |  |-_bootstrap-mincer.scss
|  |  |  |-_bootstrap-sprockets.scss
|  |  |  |-_variables.scss
|  |  |  |-main.scss
```

`main.scss` have following imports:
```bash
@import "variables";
@import "bootstrap";
@import "compass/css3";
```
Only `main.scss` will be compiled into `main.css`.
If you don't want to use some bootstrap components, you can at any time change imports in `_bootstrap.scss`.
You can also redefine bootstrap variables in `_variables.scss`.

## Getting Started

To install generator-bootstrap-compass from npm, run:

```bash
$ npm install -g generator-bootstrap-compass
```

Finally, initiate the generator:

```bash
$ yo bootstrap-compass
```

To start Grunt tasks type:

```bash
cd your_project_folder
```
then
```bash
grunt
```



## License

MIT
