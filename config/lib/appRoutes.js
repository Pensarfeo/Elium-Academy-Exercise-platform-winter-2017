// ---------------------------------------------
// handles all the routes of the app
//

class AppRouters {
    constructor(obj = {}) {
        this.routes = obj
    }

    add(obj = {}) {
        let objwrap = {}
        let route
        for (route in obj) {
            if (typeof obj[route] === "function") {
                obj[route].toString = () => obj[route]()
                objwrap[route] = obj[route]
            } else {
                objwrap[route] = obj[route]
            }
        }
        return this.routes = Object.assign({}, this.routes, objwrap)
    }

    get all() {
        return this.routes
    }

    get AppRoutesHandler() {
        return {
            get: function(target, name){
                const routeUrl = target.all[name]
                return routeUrl ? routeUrl : target[name]
            }
        }
    }
}


const InitializeAppRoutes = new AppRouters

// this allowes us to call the route name by the key directly
global.AppRoutes = new Proxy(InitializeAppRoutes, InitializeAppRoutes.AppRoutesHandler);

const paths = {
//    blog: "/blog",
    blog_child: function(id = ":id"){
        return "/blog/" + id
    }
}