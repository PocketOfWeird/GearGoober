
/** 
 * Requires:
 *      node_modules/cookies-js/dist/cookies.min.js
 *      node_modules/grapnel/dist/grapnel.min.js
 *      core/cookie-setup.js
 *      lib/transparency.min.js
 *      core/api.js
 */

// entry function
function app() {
    
    // all cookies
    var localCookies = {
        auth: 'jwt',
        tennant: 'tennant',
        user: 'user'
    };

    // template rendering directives
    var directives = {
        image: {
            src: function(params) {
                return this.imageUrl;
            }
        }
    };

    // get current tennant from stored cookie
    var tennant = JSON.parse(Cookies.get(localCookies.tennant));
    // get current user from stored cookie
    var user = JSON.parse(Cookies.get(localCookies.user));
    // apply user and tennant settings
    $('.logo').render(tennant);
    $('.user').render(user, directives);

    // setup router handlers
    var handlers = {
        logout: function (req) {
            for (cookie in localCookies) {
                Cookies.expire(localCookies[cookie]);
                window.location.reload();
            }
        },
        pageLoader: function (req) {
            console.log('requested page: ' + req.params.page);
            // Load page's html
            aja().url(req.params.page + '/index.html').into('#portal');
            
        } 
    };

    // setup router
    Grapnel.listen({
        'logout': handlers.logout,
        ':page': handlers.pageLoader
    });

};

// call main to start exectution
app();
