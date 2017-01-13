#### Flatten

Write a function called ```flatten``` that transform an array of nexted arrays and creates a single array with all the elements of each array, no matter the depth of the nesting.

**Example:**

```jsx
flatten([1,2,3, [2,3,4,[3,4]], [2,[[[4]]]]]) // [1,2,3,2,3,4,3,4,2,4]
```

**Notes:** Start looking into recursivity. To solve this exercise properly you need to create one function that will call itselve if there if an array is found.