#### Translator

Extend the previous exercise to be able to translate helloworld into differnt languages. You should use express's```app.use with``` different helpers, each helper should be associated to a specific route. Each helper should take 3 arguments, ```req```, ```res``` and ```next```. The last is a callback that should be called in case the route does not match for the specific helper.

API:

URL                                   | Action             | response                                                                                   |
----------------------------------    | ---------          | ---------------------                                                                      |
/helloworld/:lang/:translation        | add translation    | translation for Hello World added in :language as :translation                             |
/helloworld/:lang/:translation        | add translation    | translation for Hello World added in :language already exists __(if translation existed)__ |
/helloworld/:lang                     | show translation   | Hello world is :translation in :lang                                                       |
/helloworld/delete/:lang              | delete translation | translation of Hello world in :lang deleted                                                |
/helloworld/update/:lang/:translation | update translation | translation of Hello world in :lang updated to :translation                                |

parameter name | type                    |
-------------- | ----------------------- |
:lang          | language code           |
:translation   | message in new language |

The helper should finally only take care of sending the message they are supposed to and no other. If the route does not correspont to the helper then simply call ```next``` and ```return```

Example

hwIndex(req, res, next){ // route called => /helloworld/:lang/:content
    if( res.originaUrl... ){ // this is not the right path for next so next should be called!
     return next()
    }
}


