### splice

write a function called ```splice``` that can take 3 arguments, the first is an object, the second one is a positive integer, and the third one an optional positive integer. The second argument indicates the position of the key/value pair we want to start taking properties from (slicing) and the second one indicates how many properties we want to take after the initial one. We assume that, as it is common in computer science, the first element of an object is 0 and not 1. If the third argument is not passed it should default to 1. If the third argument is 0 an empty object should be returned.


```jsx
var obj = {a: 1, b: 2, c: 2}

var newObje = splice(obj, 0, 2)
// newObje => {a: 1, b: 2}

var newObje = splice(obj, 2, 2)
// newObje => {c: 2}

var newObje = splice(obj, 5, 2)
// newObje => {}

var newObje = splice(obj, 0)
// newObje => {a: 1}

var newObje = splice(obj, 1)
// newObje => {b: 2}

var newObje = splice(obj, 0, 0)
// newObje => {}
```

Note: if you use numbers as keys JS will automatically rearange them to the beginning of the object. No worries, we will not consider such cases here.