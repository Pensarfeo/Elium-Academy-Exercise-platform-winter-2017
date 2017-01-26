### Better Operations

write 4 functions, one called ```sum```, ```subtract```, ```multipy``` and ```divide``` that accordingly execute the operations described by their names for their two arguments. However now we make sure that we never get the wrong parameters.

1. If less than two arguments are passed, the second one whould default to 0 for sum and subtraction but to 1 for multiplication and division
    Example:

    ```jsx
    sum(1, 2) // 3
    sum(1) // 1

    multiply(3, 2) // 6
    multiply(3) // 3

    divide(3, 2) // 1.5
    divide(3) // 3
    ```

2. For divisions make sure that the second argument is never 0, and if it is, return "dividend cannot be 0"; make sure that this does not happen when no argument is passed. Example

    ```jsx
    var divide(3, 0) // denominator cannot be 0
    ```
