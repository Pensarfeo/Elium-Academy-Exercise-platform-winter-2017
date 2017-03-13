#### Student tracking

Elium keeps growing! And we need a system to track the payment of all the students. Improve your app from yesterday’s Exercises by adding a column for total amount due by a student. The end-user should be able to: 
1. Add a student by full name
2. Add the price of the course taken by that student.
3. Add the amount of the payment made by that student.  (Assume only one payment was made)
4. Display the list of students that have been entered.  Include columns for:
    a. the full name of the student.
    c. the price of his/her course.
    d. the amount paid by the student. If the payment is less than the price then the background of the number will be shown in red. If the payment is equal to the amount due, then the background will be green. If the payment exceeds the amount due then the background shall be yellow and an alert should be given with a message: ```Attention Student Paid More```

**Notes:**
1. the input for the full name should have the following attribute ```name = "fullname"```
2. the input for the amount due should have the following attribute ```name = "cost"```
3. the input for the amount paid should have the following attribute ```name = "paid"```