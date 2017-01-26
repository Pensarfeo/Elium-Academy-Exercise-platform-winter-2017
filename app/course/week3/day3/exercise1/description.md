#### Translator with HTML

Rewrite the translator app, but this time give html responces using EJS. Watch out for the new API and better wording :)

**API:**

Method | URL                              | Action 
-      | -------------------------------  | ---------
GET    | /                                | Main sentence page
POST   | /sentence                        | Create new sentence
POST   | /sentence/:sentence/delete       | Delete sentence
GET    | /sentence/:sentence/update       | show update form
POST   | /sentence/:sentence/update       | Update sentence
POST   | /sentence/:sentence              | add translation
POST   | /sentence/:sentence/delete/:lang | delete translation
GET    | /sentence/:sentence/update/:lang | show update form
POST   | /sentence/:sentence/update/:lang | update translation


*Notes:* All POST redirect back to ```"/"```

parameter name | type
-------------- | -----------------------
:lang          | Language code
:sentence      | Sentence to translate in english

---

**Reponces:**

*GET  - /sentence*
Expected to have:
1. A form to add new sentences
```html
<form action = "/sentence/" method="POST">
    <input name="sentence"/>
    <input type="submit" value = "add sentence"/>
</form>
```
2. A list with all the sentences and its translations with buttons to delete, update, sentence and add a translation.
```html
<ul>
    <li sentence = ":sentence1">
        <%= :sentence1 %>
        <!-- Add a button delete this resource and redirect back to  -->
        <!-- Add a button to the update page  -->
        <!-- Add a button to the add translation page  -->
        <ul>
            <li lang=":lang" translation = ":translation">
                :lang => :translation
                <!-- Add a button delete this resource and redirect back to  -->
                <!-- Add a button to the update page for translations  -->
            </li>
            <li>
                ...
            </li>
        </ul>
    </li>
    <li sentence = ":sentence2">
        ...
    </li>
</ul>
```

*GET - /sentence/:sentence/update*
Show a form with only one input field to update the sentence.

*GET - /sentence/:sentence/update/:lang*
Show form with only one input field to update the a translation in a given language. It only has one input field with the new translation.


