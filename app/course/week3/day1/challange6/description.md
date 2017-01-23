#### Chat

Create a simple chat app. The app allows you to register yourself in the syste, to start a chat with an other regietered user


API:

URL                                   | Action             | response
----------------------------------    | ---------          | ---------------------
/register/:name/:translation          | register User      | user registered as ":name"
/channel/:Roomid                      | create a chat room | chat room created with id ":roomId"
/channel/:Roomid/enter/:id            | enter chat room    | subscribed to chat room ":roomId"
/channel/:Roomid/send/:id/:message    | send a message to channel |
/channel/:Roomid/read/:id             | get all messages   |