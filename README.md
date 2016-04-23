# jquery-svg-to-inline

> Jquery plugin to embbed svg inline.


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

Jquery SVG to inline is released under the terms of the [MIT license](http://opensource.org/licenses/MIT).