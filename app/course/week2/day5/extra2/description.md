#### Rollodex

In this project you will use Javascript, jQuery and Bootstrap and CSS styling to create a data entry system with a map feature and data persistence. It is a long project that will continue into your weekend if you have time over the weekend. This project has no test attached.

----

#### Rolodex Phase 1:

1. Create an HTML form with three fields: Name, Email, and Address. There should be a “Submit” button. When the info is submmited you should display the information sent and display the addess using the Google Maps API with an Iframe.
    **Notes:** If you use the onsubmit event for the form, make sure to use ```event.preventdefault()``` method. Otherwise the form will allways reload the page resentting all the js and data you had saved on it.

1. Since we also want to be able to add the information of more than one; when the form is summitted also create a button with the text “Person 1”; where the number is indicative of who many profiles where added and unique for each profile. When this button is pressed the information of the nth person added will be shown. Only one person at the time should be shown as in the example.
    **Notes:** For now focus on creating the button for only one profile.

4. Now we will add true dynamism. To keep track of each person Submit should now create a Javascript object “Person1” which stores the info {name:  email:  address:  id:  } so that the “Person 1” button can retrieve this info and display it even after the input boxes have been cleared by the entry. Keep all the information of each profile in a global object called Store. All the profiles can be saved on the Store directly on in a sub-Object. whoever you decise to store your data Make sure the object you use has as keys the id of the profiles, and each profile has withing itself an ```id``` key.

#### Rolodex Phase 2:

Allow the entry to add new “persons” to the system and to edit the existing “persons”

1. Each entry gets stored in memory and gets assigned a numbered button by the user's id.
2. You should be able to select the entry by clicking on a button
3. Edit the entry using the white input boxes and go back without refreshing the page
4. After an entry is edited keep track of name changes both on the entry page and on the button to select entries
5. If the entry has an address use Google maps iframe to show where she lives; if not, no address should be shown.

***Notes on Phase 2:***

1. Start from the beginning of the recommended steps
2. Objects are useful to store information
3. You might need to use parseInt.
4. For enabling the back button when editing you should stop the bubbling process. In jQuery this can be easily done by returning false at the end of the functions that gets triggered on the action. If you are curious you can read a little summary in this [stack overflow post](http://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false/#answers)
5. To get all the keys of the Object use the following command.

***Extra:***
If you have some extra time you can add the following features

1. Form validation
2. You should add conditions to your form so that the entry cannot submit, for example, a badly formatted email.
3. Dynamic forms: Add a button that allows you to add fields to the form so that new entries can add more information, like a bio, or last job…
