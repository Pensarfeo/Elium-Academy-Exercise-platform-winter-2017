#### Universe 

Implement a representation of the universe where matter and energy is conserved. To do so implement one object called universe that contains two objects within: Matter and Energy. If matter is destroyed; that is say we call ```Universe.Matter.destroy(5)```, then the amount of energy in the universe needs to be increased so that if we call ```Universe.Energy.total()``` we should obtain a total value of energy that has increased +5 compared to the energy value previous to calling ```Universe.Matter.destroy(5)```. Of course the total amount of Matter obtained by calling ```Universe.Matter.total()``` has been reduced by 5 compared to the initial value.

1. Implement this objects using context
2. The Matter and Energy object are defined within an object called Universe
3. No other variable should be defined out of the universe object
4. Also implement the create methods for both matter an energy which are opposite to their conterparts
Example:

```jsx

Universe.Matter.total() // 0
Universe.Energy.total() // 0

Universe.Matter.destroy(5) // 0
Universe.Matter.total() // -5
Universe.Energy.total() // 5


Universe.Energy.destroy(-5) // 0
Universe.Matter.total() // -10
Universe.Energy.total() // 10


```

*Notes:* Initially make your universe contain 0 matter and energy. Destroying a negative ammount of energy of matter is equal to creating a possitive a mmount of each and viceversa for creating matter or energy.

*Attention:* The exercises will not past if you retest; try reloading the page instead!