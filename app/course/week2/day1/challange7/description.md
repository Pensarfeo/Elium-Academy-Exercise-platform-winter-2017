### Simple bank account

Write 4 functions called `,```bankAccount`` ```withdraw```, ```deposit``` and balance. That keeps track of the ammount added and removed from a bank account. when called ```bankAccount```. No other variable or function other than these functions should be defined. the ```bankAccount``` and ```deposit``` functions takes no argument and ```withdraw``` and ```deposit``` only take one argument.

Example:

```jsx

bankAccount()
withdraw(2)
withdraw(5)
deposit(4)
deposit(1)
balance() // -2

```

Notes: Use the scope to manage the variables that each functions have access to. Remember that if a function is defined withing an other function it will have access to the scope of the parent function.