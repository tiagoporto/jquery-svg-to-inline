# jQuery SVG to inline
[![Build Status](https://travis-ci.org/tiagoporto/jquery-svg-to-inline.svg)](https://travis-ci.org/tiagoporto/jquery-svg-to-inline)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/jquery-svg-to-inline.svg)](https://coveralls.io/github/tiagoporto/jquery-svg-to-inline)
[![Dependencies Status](https://david-dm.org/tiagoporto/jquery-svg-to-inline.svg)](https://david-dm.org/tiagoporto/jquery-svg-to-inline)
[![NPM Downloads](https://img.shields.io/npm/dt/jquery-svg-to-inline.svg)](https://www.npmjs.com/package/jquery-svg-to-inline)
[![Github Release](https://img.shields.io/github/release/tiagoporto/jquery-svg-to-inline.svg)](https://github.com/tiagoporto/jquery-svg-to-inline/releases)
[![Github Issues](https://img.shields.io/github/issues/tiagoporto/jquery-svg-to-inline.svg)](https://github.com/tiagoporto/jquery-svg-to-inline/issues)
[![Github License](https://img.shields.io/github/license/tiagoporto/jquery-svg-to-inline.svg)](https://raw.githubusercontent.com/tiagoporto/jquery-svg-to-inline/master/LICENSE.md)

> A jQuery plugin to replace <image> and <objet> embedding SVG inline.


## Table of Contents

* [Examples](#examples)
* [Usage](#usage)
* [Options](#boilerplate)
    * [useTriggerClass](#usetriggerclass)
* [License](#license)


## Examples

```html
<object class="svg myClass" type="image/svg+xml" data="htts://somesvg.svg"></object>
```
or
```html
<img src="https://somesvg.svg"  class="svg myClass otherClass">
```

Will generate

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="myClass otherClass">
  <circle cx="50" cy="50" r="50"/>
</svg>
```


## Usage

```js
$( ".svg" ).svgToInline();
```

### Options

#### useTriggerClass

By default the trigger class will isn't used on inline svg. If you want use set to `true`.

```js
$( ".svg" ).svgToInline({useTriggerClass: true});
```

##### Example

```html
<img src="https://somesvg.svg"  class="svg myClass otherClass">
```

Will generate

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="svg myClass otherClass">
  <circle cx="50" cy="50" r="50"/>
</svg>
```


## License

Jquery SVG to inline is released under the terms of the [MIT license](https://github.com/tiagoporto/jquery-svg-to-inline/blob/master/LICENSE).