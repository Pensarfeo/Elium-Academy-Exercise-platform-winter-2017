#Exercise Platform

### Intro
Welcome to [Elium Academy](http://www.elium.academy/)'s exercise platform. Here you can find all the exercises for the whole bootcamp. For each day with explanation live use fo the code you write and test for each exercises. The code you write will be autoloaded and the test rerun for each exercise. More over the platform will automaticlaly report your progress to our [student platform](http://stduents.elium.academy/)

The platform is built to run as much as possible offline.

### Run
* run npm install
* run npm start
* start testing your app at <http://localhost:3000>
* with the navigation menu you can go to each exercises of the whole bootcamp.
* For each exercises you need to write your solutions in the solution folder in the root directory withing the file corresponding to the week, day and exercise number.


### For developers & teachers

#### App Architecture
- Config
    - globa: store global functions
    - server: start the server
    - Weback (not in use)
        webpack.*: various configurations
        middleware: exports tools to run webpack as express middleware (https://github.com/webpack/webpack-dev-middleware)
    - Server: Extra Settings for server
    - lib: functions that we want to be globbaly avaliable
- app
    - course
        - weeks => folder with exercises sorted in weeks / days and exercise folder containing a description (written in markup ) a file with the info necessary for the try section and an other to run the specs (using jasmine).
        - router.js => all routes
        - layout.ejs => app main template
- public
    - styles (only scss for now)
    - js => all js for running jasmine, jquery, react, babel (for simplicity we transpile react on the client side)
    - fonts

#### Layout structure
view.description = nodeRootDir/weekN/dayN/exerciseN/(description.md || try.ejs || test.ejs)
- layout.ejs
    - include("layout/_head")
    - include("layout/_navbar")
    - include("layout/_sidebar")
    - if (!view.description) ?
        include("layout/_home"):
        include("layout/_standardDay")
        - try include("_standardDay/_block", {title: exerciseType, file: view.description})
        - try include("_standardDay/_block", {title: "Try your code", file: view.try})
        - try include("_standardDay/_block", {title: "Test", file: view.test})