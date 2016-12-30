#### Universe with new

Implement the previous exercise using a constructor function called universe. I this case whe should be able to initialize the initial a mmount of energy.
Example:

```jsx
var protoUniverse = function universe (initialEnergy) {
    ...
}

universe = new protoUniverse(10)

Universe.Matter.total() // -10
Universe.Energy.total() // 10

Universe.Matter.Destroy(5)
Universe.Matter.total() // -15
Universe.Energy.total() // 15


Universe.Energy.destroy(-5)
Universe.Matter.total() // -20
Universe.Energy.total() // 20
```
