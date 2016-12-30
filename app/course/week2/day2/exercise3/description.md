#### Bank account with new and initial values

Starting from the previous exercise add the possibility to initialize the account to a given initial ammount.
Example:

```jsx
var account = new bankAccount(10)
account.withdraw(2)
account.withdraw(5)
account.deposit(4)
account.deposit(1)
account.balance() // 8
```