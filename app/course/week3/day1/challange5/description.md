#### Bank App

write an app, following the api of the bank server you aready created in /week2/day1/challange6.
The server needs to be able to create accounts and with one account we should be able to deposit, withdraw, get the balance and delete the account.

**API**

URL                           | return                                           | comments
-                             | -                                                | -
/account/new/:ammount         | account nr :accountID create with :ammount euros | It must unique, no matter the number of calls
/:accountID/withdraw/:ammount | :ammount euros taken from account nr :accountID  | if :accountID not found return "Account not found"
/:accountID/deposit/:ammount  | :ammount euros added to account nr :accountID    | if :accountID not found return "Account not found"
/:accountID/balance           | The balance of account nr :accountID is ## euros | if :accountID not found return "Account not found"
/:accountID/delete            | Account nr :accountID deleted                    | if :accountID not found return "Account not found"
/*                            | 404 resource not found                           | what to do in case we match to anything else
