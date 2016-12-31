#### Hallo, नमस्ते, Bonjour, Hola, Ciao,  今晩は, 你好, مرحبا, Hello :)

Write a multy language hello world app with express. To do so you need to user the ```req.originalUrl``` property to get the lanaguage the user wants the message to be printed in. Make sur that if the url does not specify any language then the app will default to english.

Example of usage:

URL | Hessage
----|---------
/NL | Hallo Wereld
/HI | नमस्ते दुनिया
/FR | Bonjour le monde
/ES | Hola Mundo
/IT | Ciao Mondo
/CH | 你好，世界
/JP | こんにちは世界
/AR | مرحبا بالعالم
/EN | Hello world
/   | NL: Hello world, HI: नमस्ते दुनिया, ..., EN: Hello world.