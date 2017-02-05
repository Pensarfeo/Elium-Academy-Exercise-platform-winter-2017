#### Translator with HTML

Rewrite the translator app, but this time give html responces using EJS. Watch out for the new API and better wording :)

**API:**

Method | URL                               | Action 
-      | -------------------------------   | --------
GET    | /                                 | Main sentence page
POST   | /sentences                        | Create new sentence
GET    | /sentences/:sentence/update       | show update form
POST   | /sentences/:sentence/update       | Update sentence
POST   | /sentences/:sentence/delete       | Delete sentence
GET    | /sentences/:sentence/translate    | Show translation add form
POST   | /sentences/:sentence/translate    | add translation
POST   | /sentences/:sentence/delete/:lang | delete translation
GET    | /sentences/:sentence/update/:lang | show update form
POST   | /sentences/:sentence/update/:lang | update translation


*Notes:* All POST redirect back to ```"/"```

---

**Parameter Names:** these names should also be used in the body of post requests

parameter name | type
-------------- | -----------------------
:lang          | Language code
:sentence      | English sentence to be translated
:translation   | translation of a sentence to a given :lang

---

**Reponces:**

*GET  - /sentences*
Expected to have:
1. A form to add new sentences
```html
<form action = "/sentences/" method="POST">
    <input name="sentence"/>
    <input type="submit" value = "add sentence"/>
</form>
```
2. A list with all the sentences and its translations with buttons to delete, update, sentence and add a translation.
```html
<ul>
    <!-- from to add sentence  -->
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

*GET - /sentences/:sentence/translate*

*GET - /sentences/:sentence/update*
Show a form with only one input field to update the sentence.

*GET - /sentences/:sentence/update/:lang*
Show form with only one input field to update the a translation in a given language. It only has one input field with the new translation.


