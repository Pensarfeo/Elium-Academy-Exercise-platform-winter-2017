### Slice

write a function called ```slice``` that can take 3 arguments, the first is an object, the second one is a positive integer, and the third and optinal positive integer. The second argument indicates the order of the key/value pair we want to strat taking from and the second one indicated how many object we want to take after the initial one. We assume as it is common in computer science that the first element is 0 and not 1. If the third argument its not passed it should default to 1. If the third argument its 0 an embty object should be returned.


```jsx
var obj = {a: 1, b: 2, c: 2}

var newObje = slice(obj, 0, 2)
// newObje => {a: 1, b: 2}

var newObje = slice(obj, 2, 2)
// newObje => {c: 2}

var newObje = slice(obj, 5, 2)
// newObje => {}

var newObje = slice(obj, 0)
// newObje => {a: 1}

var newObje = slice(obj, 1)
// newObje => {a: 1}

var newObje = slice(obj, 0, 0)
// newObje => {}
```

Note: if you use numbers as keys JS will automatically rearange them to the beginning of the object. No worries, we will not consider such cases here.