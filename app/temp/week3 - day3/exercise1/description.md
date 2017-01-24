#### BeaverDex - A.K.A. Facebook for Beavers

Elium has been ask to create a tool for a Naturalist doing research about the mating habits of beavers. Your goals is to create an app where the naturalist can be used to track beavers. The app should have the following features:


1. Add new beavers, with information about their birth date (if known), first seen, location, sex and status (dead of alive; by default it will be alive when first create; Naturalist don't log dead beavers).
    Route: POST - /beavers/create
2. The naturalist want to update the information if he ever sees the beaver again. Make sure that, once added, the birthdate and sex cannot be changed.
    Route: POST - /beavers/update/:beaverId
    Make sure that even if your form does not have a field for updating sex and birthdate, there is not way in which this can ben done, even if the naturalist makes an ad hoc request!
3. The beaver is added a small chip that can track the health of the beaver, so that, if the beaver dies, it should be logged in our application.
    Route: POST - /beavers/update/:beaverId
4.  Since the study focuses on the mating ritual of beavers the naturalist want to register which bevers mates with which. Beware, beavers have both long relations and short relations; you should be able to log and manage that information; as well as display it if needed.
    Route: POST - /matinglog/create/:beaverId1/:beaverId2
    a. The application should not allow the naturalist to record relations within dead beavers and live ones if he makes a mistake or tries to create an ad hoc request.
    b. Recording a relation between two male of female beavers should also not be allowed by the application.

---
#### **API**

Method  | URL                                       | Action
------- | ----------------------------------------- | -
GET     | /beavers                                  | Index
GET     | /beavers/:beverId                         | Show
POST    | /beavers/create                           | add new beaver
POST    | /beavers/update/:beaverId                 | update beavers params
GET     | /matinglog                                | show all relations
POST    | /matinglog/create/:beaverId1/:beaverId2   | create relation

---
#### **HTML output - Test conditions**

**GET - /beavers**
Rou must wrap the beaverID in an HTML elemetnt with ```class = "beaverId"```
```html
<span class = "beaverId"> :beaverID </span>
```

**GET - /beavers/:beverId**
Make sure each property of the beaver's info is wapped in an html element with id equal to the key of that property
```html
<span class = "birdthDate"> :birdthDate </span>
<span class = "Location"> :Location </span>
<span class = "FirstSeenDate"> :FirstSeenDate </span>
<span class = "status"> :status </span>
<span class = "sex"> :sex </span>
```
**POST - /beavers/create**
Life statu must be Alive when first created

**POST - /beavers/update/:beaverId**
Birdth date and Sex cannot be updated

**GET - /matinglog**
Wrap the id of the two beavers withing an html element with ```class="relation"```. Make sure the 2 ids are divided by a dash (```-```) only.
```html
<div class = "relation">
    <span class = "femaleBeaverId"> :femaleBeaverId </span>
    <span class = "maleBeaverId"> :maleBeaverId </span>
    <span class = "relationsType"> :relationsType </span>
</div>
```

**POST - /matinglog/create/:beaverId1/:beaverId2**
Creating a relation between two beaver of the same sex or with a dead beaver should not be allowed


---
#### **Beaver Model**

key            | type                   | updatable?
-              | -                      | -
id             | Number (UNIQUE!)       | false
birdthDate     | Date Type              | false
Location       | String                 | true
FirstSeenDate  | Date Type              | false
status         | String (dead or alive) | true
sex            | String (M or F)        | false


---
#### **Matinglog Model**

key            | type                   | updatable?
-              | -                      | -
id             | Number (UNIQUE!)       | false
femaleBeaverId | beaverId               | false
maleBeaverId   | beaverId               | false
relationsType  | Date Type              | true


