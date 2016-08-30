
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

    // utility functions
    function refresh() {
        window.location.reload();
    }
    function rerouteTo(page) {
        window.location.href = page;
    }

    // get current tennant and user from stored cookie
    var tennantCookie = Cookies.get(localCookies.tennant);
    if (!tennantCookie) rerouteTo('/login');
    var tennant = JSON.parse(tennantCookie);
    // get current user from stored cookie
    var userCookie = Cookies.get(localCookies.user);
    if (!userCookie) rerouteTo('/login');
    var user = JSON.parse(userCookie);
    // apply user and tennant settings
    $('.logo').render(tennant);
    $('.user').render(user, directives);

    // setup router handlers
    var handlers = {
        logout: function (req) {
            for (cookie in localCookies) {
                Cookies.expire(localCookies[cookie]);
                
            }
        },
        pageLoader: function (req) {
            console.log('requested page: ' + req.params.page);
            // Load page's html
            aja().url('views/' + req.params.page + '.html').into('#portal').go();
            
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
