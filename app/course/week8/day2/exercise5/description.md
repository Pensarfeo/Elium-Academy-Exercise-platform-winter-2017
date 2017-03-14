#### Sort by program

Elium is expanding, and we are adding new bootcamps. Now we have Java, Node, PHP & C++.  Add an input field to your form which allows a student to specify the course they are enrolled in. A student can be entered multiple times (for different classes). Display 4 different classlists  with the name of the class at the top of each list as in the example. Also, Make a button that will show a list of all the students with no duplicate names in a separate table.

**Notes:**
1. Use a select tag to choose the course
2. for each table use ```id = "{nameOfCourse}"```; replace the "+" in "c++" with "p" as "cpp"
3. use a ```button``` with ```id = "showAll" ``` for the button that diplays the entire class.
4. Make sure that you are not only hiding the element but removing it from the DOM to make the test pass
5. Set the id of the table with all the student names to ```all``` 


**Notes:** You **must** mount it at the following DOM Node to get your component tested: ```document.getElementsByClassName("jasmine-testground")[0]```.

