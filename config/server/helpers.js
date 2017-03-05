const {app}  = requireConfig('./server');
const md     = requireConfig("lib", "md")
const path = require("path")

// pass helpers
app.use(function(req, res, next){

    res.locals.imageUrl = function(arg) {
        return "/public/images/" + arg
    }
    res.locals.backgroundImage = function(image){
        return "background-image: url( \'"+res.locals.imageUrl(image)+"\')"
    }

    res.locals.AppRoutes = AppRoutes

    res.locals.md = md

    res.locals.spaceDate = function(word){
        return word.replace(/(\w{1})(\w+)([1-9]+)/, (a, b, c, d) => {
            return b.toUpperCase() + c + " " + d })
    }

    res.locals.pathJoin = function(...paths){
        return path.join(...paths)
    }

    next()
})
