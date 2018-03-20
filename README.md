# jQuery SVG to inline ![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/jquery-svg-to-inline">⭐</a> : 😞</code>
</p>

[![Release](https://img.shields.io/npm/v/jquery-svg-to-inline.svg?style=flat-square&label=release)](https://github.com/tiagoporto/jquery-svg-to-inline/releases)
[![Downloads](https://img.shields.io/npm/dt/jquery-svg-to-inline.svg?style=flat-square)](https://www.npmjs.com/package/jquery-svg-to-inline)
[![License](https://img.shields.io/github/license/tiagoporto/jquery-svg-to-inline.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/jquery-svg-to-inline/master/LICENSE)
[![Build Status](https://img.shields.io/travis/tiagoporto/jquery-svg-to-inline.svg?style=flat-square&logo=travis)](https://travis-ci.org/tiagoporto/jquery-svg-to-inline)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/jquery-svg-to-inline.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/jquery-svg-to-inline)
[![Dependencies Status](https://img.shields.io/david/tiagoporto/jquery-svg-to-inline.svg?style=flat-square)](https://david-dm.org/tiagoporto/jquery-svg-to-inline)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/jquery-svg-to-inline.svg?style=flat-square)](https://david-dm.org/tiagoporto/jquery-svg-to-inline?type=dev)

> A jQuery plugin to replace &lt;image&gt; and &lt;object&gt; embed SVG inline.

## Table of Contents

* [Examples](#examples)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Options](#options)
    * [useTriggerClass](#usetriggerclass)
* [License](#license)


## Examples

```html
<object type="image/svg+xml" data="htts://somesvg.svg" class="svg"></object>

<img src="https://somesvg.svg" class="svg">
```

Will be replaced by the linked SVG

```html
<!-- Replaces <object> -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="50"/>
</svg>

<!-- Replaces <img> -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="50" y="20" width="150" height="150" />
</svg>
```


## Getting Started

```
npm install jquery-svg-to-inline
```

## Usage

```js
$('.svg').svgToInline()
```

### Options

#### useTriggerClass

By default the trigger class isn't used on inline svg. If you want to use it, set it to `true`.

```js
$('.svg').svgToInline({useTriggerClass: true})
```

##### Example

```html
<img src="https://somesvg.svg"  class="svg">
```

Will generate

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="svg">
  <circle cx="50" cy="50" r="50"/>
</svg>
```


## License

jQuery SVG to inline is released under the terms of the [MIT license](https://github.com/tiagoporto/jquery-svg-to-inline/blob/master/LICENSE).
