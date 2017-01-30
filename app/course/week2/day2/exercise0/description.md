#### DOM Manipulation with jQuery

Write a function called, deletableElements, that uses jquery to delete all li and ul tags according to the following rule.
Only ```li``` tags with text ```DELETE ME!``` whos parents are ```ul``` can be deleted; and only if the parent has an attribute ```deletable="true"```. If the deletable attribute is set to false the tag should not be deleted; instead if the attribute is set to message we should append a message remove the element and add a div tag with content ``` li tag deleted ```.

```html
<ul>
    <li> DELETE ME!</li>
    <li>
        <ul deletable="false">
            <li>DELETE ME!<li>
        </ul>
        <ul deletable="message">
            <li> I should be safe <li>
        </ul>
    </li>
    <li>
        <ul deletable="false">
            <li>DELETE ME!<li>
        </ul>
        <ul deletable="true">
            <li>DELETE ME!<li>
        </ul>
        <ul deletable="message">
            <li>DELETE ME!<li>
        </ul>
        <ul deletable="true">
            <li> I should be safe too<li>
        </ul>

    </li>
</ul>

```