
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
    },

    logout: function() {
        for (name in cookieNames) {
            Cookies.expire(name);
        }
    }
    
};

// entry function
function main() {
    
    // get current tennant from stored cookie
    var tennant = JSON.parse(Cookies.get('tennant'));
    // get current user from stored cookie
    var user = JSON.parse(Cookies.get('user'));
    // apply settings
    gearGoob.applyInitialSettings(tennant, user);

};

// call main to start exectution
main();
