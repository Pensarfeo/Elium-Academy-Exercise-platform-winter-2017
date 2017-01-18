#### find inputs like

Define a function FindRed that finds all inputs with a value of "Red" and change the text of the next sibling to ``` the value is red!``` 

Snippet:
```html
<div>
    <div>
        <label>
            <input type="radio" name="color"  value="Red">
            <span>value?</span>
            <div></div>
        </label>
    </div>
    <div>
        <label>
            <input type="radio" name="color"  value="Green">
            <span>value?</span>
            <div></div>
        </label>
    </div>
    <div>
        <label>
            <div type="radio" name="color"  value="Red">
            <span>value?</span>
            <div></div>
        </label>
    </div>
    <button id="button1">Click to see the  effect</button>
</div>
```