#### Translator

Extend the previous exercise to be able to translate different messages into differnt languages. In this case you should be able to create a crud for creating messages as well as translating messages. All original messages should be in english

**API:**

URL                                 | Action             | response
----------------------------------  | ---------          | ---------------------
/message/:content                   | Create New message | message - :message - added
/message/:content                   | Create New message | message already present __(if message existed)__
/message/:content/delete            | Delete             | message - :message - deleted
/:message/:lang/:translation        | add translation    | translation for :mesage added in :language as :translation
/:message/:lang/:translation        | add translation    | translation for :mesage added in :language already exists __(if translation existed)__
/:message/:lang                     | show translation   | :message is :translation in :lang
/:message/delete/:lang              | delete translation | translation of :message in :lang deleted
/:message/update/:lang/:translation | update translation | translation of :message in :lang updated to :translation

parameter name | type
-------------- | -----------------------
:lang          | language code
:content       | message in new language


