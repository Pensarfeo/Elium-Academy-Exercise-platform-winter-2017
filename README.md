#9.1-React

#### How to use
* run npm install
* run npm start
* start testing your app at <http://localhost:3001>
* Write your solutions in the folder ./exercises. **Attention**: you should only write the react code in this folder. There render method will be handled by the specs!

###Exercices:
In order to succefully compleate all the exercises, your solutions need to match the behavior shown [here](https://eliumacademy.github.io/9.1-react.html) 

1. Create a react component called Hello that outputs “Hello World”. The solution you write will be displayed with the following render:
    ```jsx
    render(
        <Hello/>,
        document.getElementById('app')
    )
    ```
    **Notes:** Export a single react component called Hello 
    ```js
    export {Hello}
    ```

2. Create a react component (called profile) that lists your name, email and address. The fields should be contained with another component called detail. The solution you write will be displayed with the following render:
    ```jsx
    render(
        <Profile>
            <Name/>
            <Email/>
            <Address/>
        </Profile>,
        document.getElementById('app')
    )
    ```
    **Notes:** Export 4 react components as named export with
    ```js
    export {Profile, Name, Email, Address}
    ```

3. Create a react component (called profile) that lists your name, address and email and others. Each field should be controlled by a single component called detail. The solution you write will be displayed with the following render:
    ```jsx
    render(
        <Profile>
            <div><Detail detail={{Name: "Pedro"}} /></div>
            <div><Detail detail={{Email: "pedro@pedro.pedro"}} /></div>
            <div><Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/></div>
        </Profile>,
        document.getElementById('app')
    )
    ```
    **Notes:** Export 2 react components as named export with
    ```js
    export {Profile, Detail}
    ```

4. Starting from Exercise 3, add an input field to the detail component that can change the displayed value of the profile detail when the input value is edited.
    **Notes:** To set a default value for the input field use ``` defaultValue``` prop. Checkout what happens if we use the HTML attribute ``` value``` instead.

5. Starting from Exercise 4, add a submit button so that the info will only be updated when the submit button is clicked. Use a button tag without type submit and bind the event to and onClick event on the button.
    **Notes:** the function that is called once the event is triggered (effectively a callback) will recieve one single argument with info about the event that took place. The event.target will point to the element from which the event originated.

6. Create a react component (called ShowInList) that takes an array of elements and displays it values in a list. The solution you write will be displayed with the following render:
    ```jsx
    render(
        <ShowList list ={[1,2,3,4]}/>,
        document.getElementById('app')
    )
    ```
    **Notes:** Export 1 react components as named export with
    ```js
    export {ShowList}
    ```

7. Starting from Exersice 6 modify the ShowInLIst component so that, if a user hovers on one of the elements, that element will be removed.

8. **Challange 1:** Modify Exercise 5 so that instead of showing the input field from the start, add an Edit button. When the user clicks on the Edit button the detail field will disappear leaving only an input box that has the initial value of the detail displayed, a Save button that will set the value of the detail to the value in the input field and a cancel button to go back without modifying the detail.

9. **Challange 2:** Extend Challange 1 by adding a button to create new details and a way to delete details. There are no test for this one. So be Creative ;)
