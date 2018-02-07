# keytoiso
Convert JavaScript [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent).code to [ISO 9995 key id](https://en.wikipedia.org/wiki/ISO/IEC_9995#Physical_division_and_reference_grid). 

## install
Add the code below in your `head` tag in the `html` file. The code has to go above any other JavaScript files. 
```html
<script src='keytoiso.js'></script>
```

## usage
```js
document.addEventListener('keydown', function (event) {
  console.log(event.iso);
});
```
