#### Elium App

Build a simple app for Elium. This time want to use Reduc and Reac-Redux to hold the information. As such you should use at least one component for inputing the information and one for displaying the information. We will not be testing for the number of components but simply for the HTML specified in the notes. As such you can optimize the number of components to speed up your coding.

As before the app showl renders a form with a single input field in which the end-user can add the full name of a student as “first name +surname”.  Once submit is pressed, the new name and surname gets added to a list that is displayed below. The list must be a table with two columns: one column for first name and one for surname.

To mount your app you should use a function of the type and subscribe it to the Redux store/

```jsx
const mountingFunction = function(store){
    ReactDOM.render(
        <Provider store = {store}>
            <InputInfo/>
            <ShowInfo/>
        </Provider>
    )
}
```

**Notes:**
1. to succeffully complete the test use an ```input``` filed with ```type="submit"``` and not a button tag
2. In you might need to look into even.preventDefault() used in combination with the onSubmit synthetic method.
3. Use a bootstrap table
4. this time you will have to mount the components like we did yesterday. If you want to view your own app mount it at the following DOM Node: ```document.getElementById("yourSolution"))```. Instead you **must** mount it at the following DOM Node to get your component tested: ```document.getElementsByClassName("jasmine-testground")[0]```.
