#### Find children

Find all inputs that are descendants of a form and mark them with a dotted red border .
Note: Descendant Selector ("ancestor descendant") selects all elements that are descendants of a given ancestor. A descendant of an element could be a child, grandchild, great-grandchild, and so on, of that element.

Snippet:
```html
<body>
    <form>
        <label for="name">Child of form:</label>
        <input name="name" id="name">
        <fieldset>
            <label for="newsletter">Grandchild of form, child of fieldset:</label>
            <input name="newsletter" id="newsletter">
        </fieldset>
    </form>
    Sibling to form: <input name="none">
</body>
```