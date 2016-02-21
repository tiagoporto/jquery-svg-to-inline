# jquery-svg-to-inline

> Jquery plugin to embbed svg inline.

## Example

```html
<object class="svg" type="image/svg+xml" data="htts://somesvg.svg"></object>
```

or
```html
<img src="https://somesvg.svg"  class="svg">
```

Will generate

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="50"/>
</svg>
```


## Usage

```js
$( ".svg" ).svgToInline();
```
