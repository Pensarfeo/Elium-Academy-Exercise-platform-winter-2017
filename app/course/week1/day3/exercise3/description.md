### Better Add to object

Write a function called modifyObject that takes 3 arguments, the first one is the object we want to add to, the second one is an object whose properties we want to add to the first and the third one is a **boolean** that indicates if properties that are already present in the first object should be overwritten or not. If nothing is specified the third parameter should default true and already present properties will be overwritten.
The function should console.log one of these two messages, arrocording if the last argument is true or false.
- "Overwrite mode set"
- "Overwrite mode disabled" 

Example:

```jsx
var obj = {a: 1, b: 2}

modifyObject(obj, {c: 3, b: 4}, true)
// => "Overwrite mode set"
obj // {a: 1, b: 4, c: 3}

modifyObject(obj, {c: 3, b: 4}, false)
// => "Overwrite mode disabled"
obj // {a: 1, b: 2 c: 3}

modifyObject(obj, {c: 3, b: 4})
// => "Overwrite mode set"
obj // {a: 1, b: 4, c: 3}

```