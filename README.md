[![Build Status](https://secure.travis-ci.org/akatopo/bespoke-theme-build-wars.png?branch=master)](https://travis-ci.org/akatopo/bespoke-theme-build-wars)

# bespoke-theme-build-wars

A theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js), based on the presentation-build-wars-gulp-vs-grunt presentation &mdash; [View demo](http://akatopo.github.io/bespoke-theme-build-wars)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/akatopo/bespoke-theme-build-wars/master/dist/bespoke-theme-build-wars.min.js
[max]: https://raw.github.com/akatopo/bespoke-theme-build-wars/master/dist/bespoke-theme-build-wars.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  buildWars = require('bespoke-theme-build-wars');

bespoke.from('#presentation', [
  buildWars()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.buildWars()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-build-wars
```

### Bower

```bash
$ bower install bespoke-theme-build-wars
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
