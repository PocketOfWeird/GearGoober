
/** 
 * Requires:
 *      ../node_modules/cookies-js/dist/cookies.min.js
 *      ../node_modules/grapnel/dist/grapnel.min.js
 *      ./cookie-setup.js
 *      ../lib/transparency.min.js
 *      ./api.js
 */
gearGoob = {


    observedDomElements: [
        ''
    ],

    templateImageDirectives: {
        image: {
            src: function(params) {
                return this.imageUrl;
            }
        }
    },

    applyInitialSettings: function(tennant, user) {
        $('.logo').render(tennant);
        $('.user').render(user, this.templateImageDirectives);
    }
    
};

// entry function
function main() {
    
    // all cookies
    var localCookies = {
        auth: 'jwt',
        tennant: 'tennant',
        user: 'user'
    }; 

    // get current tennant from stored cookie
    var tennant = JSON.parse(Cookies.get(localCookies.tennant));
    // get current user from stored cookie
    var user = JSON.parse(Cookies.get(localCookies.user));
    // apply settings
    gearGoob.applyInitialSettings(tennant, user);
    // setup router
    Grapnel.listen({
        'logout': function (req) {
            for (cookie in localCookies) {
                Cookies.expire(localCookies[cookie]);
                window.location.reload();
            }
        }
    });

};

// call main to start exectution
main();
