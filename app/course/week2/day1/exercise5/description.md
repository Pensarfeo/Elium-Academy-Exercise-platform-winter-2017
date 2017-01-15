#### Universe with new

Implement the previous exercise using a constructor function called universe. I this case whe should be able to initialize the initial a mmount of energy.

**Example:**

```jsx
var protoUniverse = function universe (initialEnergy) {
    ...
}

Universe = new protoUniverse(10)

Universe.total("matter") // -10
Universe.total("energy") // 10

Universe.destroy("matter", 5)
Universe.total("matter") // -15
Universe.total("energy") // 15

Universe.destroy("matter", 5)
Universe.total("energy") // -20
Universe.total("matter") // 20
```

**Notes:** to succeffully accomplish the tests make sure to match the signs properly