#### Add languages

Extending the previous exercise add the possibility to add a new language. Infact the app should start with no language saved in memory.

Example of usage:

URL            | Hessage
-------------- | ---------
/DE            | Hello World in DE not found
/DE/Hallo_Welt | DE added with message "Hallo Welt"
/DE            | Hallo Welt

**Notes:** Pay attention to the fact that the url is encoded to ASCII code; so it only accepts most common english charactes and not spaces; that its why we use the underscore instead of a space! For more information about the encoding of URL you can visit the [W3Schools source](http://www.w3schools.com/tags/ref_urlencode.asp)