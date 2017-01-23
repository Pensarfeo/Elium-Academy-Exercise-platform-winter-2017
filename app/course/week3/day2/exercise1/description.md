#### Translator

Extend the previous exercise to be able to translate different messages into differnt languages. In this case you should be able to create a CRUD (Create, Read, Update, Delete) for creating messages as well as translating messages. All original messages should be in english

**API:**

Method | URL                                  | Action
-      | ----------------------------------   | ---------
POST   | /message/:message                    | Create new message
POST   | /message/:message/delete             | Delete message
POST   | /message/:message/update/:newMessage | Update message
GET    | /message                             | return all messages
GET    | /message/:message                    | return message with all translations
POST   | /:message/:lang/:translation         | add translation
POST   | /:message/delete/:lang               | delete translation 
POST   | /:message/update/:lang/:translation  | update translation 
GET    | /:message/:lang                      | show all translations



parameter name | type
-------------- | -----------------------
:lang          | Language code
:message       | Message to translate in english
:translation   | message translated to lang


**Reponces:**

*POST - /message/:message*
- ":message" added
- ":message" already exist

*POST - /message/:message/delete*
- ":message" not found
- ":message" deleted

*POST - /message/:message/update/:newMessage*
- ":message" not found
- ":message" updated to ":newMessage"

*GET  - /message*
- {object with all the messages, if no messages yet return an empty object}

*GET  - /message/:message*
- ":message" not found
- return an array with all the messages

*POST - /:message/:lang/:translation*
- ":message" not found
- translation for ":message" in ":lang" already exists
- translation for ":message" in ":lang" added

*POST - /:message/delete/:lang*
- ":message" not found
- translation for ":message" in ":lang" not found
- translation for ":message" in ":lang" deleted

*POST - /:message/update/:lang/:translation*
- ":message" not found
- translation for ":message" in ":lang" not found
- translation for ":message" in ":lang" updated

*GET  - /:message/:lang*
- ":message" not found
- translation for ":message" in ":lang" not found
- return an object with all the translations for ":message"

