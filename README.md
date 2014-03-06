scaner
======

Stateful function. Almost like reduce, but for repeated calls to a function instead of elements in a list.

## Example

```js
var scaner = require('scaner')

var clickCounter = scaner(0, function (accumilator, current) {
  // Do something with the event (current) that may depend on returned state form last call
  return accumilator + 1
})

document.body.addEventListener('click', clickCounter, false)
```

## To think about
If your accumilator object is any pass by ref value, odd stuff may happend.
