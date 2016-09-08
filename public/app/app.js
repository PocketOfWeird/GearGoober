
/** 
 * Requires:
 *      node_modules/cookies-js/dist/cookies.min.js
 *      node_modules/grapnel/dist/grapnel.min.js
 *      core/cookie-setup.js
 *      lib/transparency.min.js
 *      core/api.js
 */


Gear = {};

// all cookies
Gear.localCookies = {
    auth: 'jwt',
    tennant: 'tennant',
    user: 'user'
};

// all side-nav views
Gear.sideNavLinks = [
    'equipment',
    'reservations',
    'groups',
    'users',
    'settings'
];

// template rendering directives
Gear.directives = {
    imageEquip: {
        src: function() {
            // if not rendering user data, return the imageUrl
            return this.firstName ? "" : this.imageUrl;
        },
        alt: function() {
            return this.name;
        }
    },
    imageUser: {
        src: function() {
            return this.imageUrl;
        },
        alt: function() {
            return this.firstName;
        }
    },
    subCategory: {
        subCategoryName: {
            text: function () {
                return this.value;
            } 
        }
    },
    inKit: {
        class: function() {
            // if equipment is not in a kit, hide the element 
            return this.inKit ? this.class : 'hidden';
        }
    },
    restrictedToLabAssistant: {
        class: function() {
            // if user doesn't have labAssistant permission, hide the element 
            return this.labAssistant ? this.class : 'hidden'; 
        }    
    }
};

// utility functions
Gear.util = {};
Gear.util.refresh = function () {
    window.location.reload();
}
Gear.util.rerouteTo = function (page) {
    window.location.href = page;
}
Gear.util.convertToArray = function(object) {
    var list = [];
    var keys = object.keys();
    for (i=0; i < keys.length; i++) {
        list.push(keys[i]);
    }
    return list;
}
Gear.util.isMobile = function() {
    return $(window).width() <= 992 ? true : false;
}

// get current tennant and user from stored cookie
var tennantCookie = Cookies.get(Gear.localCookies.tennant);
if (!tennantCookie) Gear.util.rerouteTo('/login');
Gear.tennant = JSON.parse(tennantCookie);
// get current user from stored cookie
var userCookie = Cookies.get(Gear.localCookies.user);
if (!userCookie) Gear.util.rerouteTo('/login');
Gear.user = JSON.parse(userCookie);

// setup router handlers
Gear.handlers = {
    logout: function (req) {
        for (cookie in Gear.localCookies) {
            Cookies.expire(Gear.localCookies[cookie]);
            Gear.util.refresh();
        }
    },
    viewLoader: function (req) {
        
        var view = req.params.view;
        var notFoundPage = aja().url('views/404.html').into('#portal');

        // Load view's html
        aja()
            .url('views/' + view + '.html')
            .into('#portal')
            .on('200', function(request){
                // Switch Nav-Link-Highlight to selected view
                for (i=0; i < Gear.sideNavLinks.length; i++) {
                    $('#nav-link-' + Gear.sideNavLinks[i]).removeClass('active');
                }
                $('#nav-link-' + view).addClass('active');
                aja().url('views/' + view + '.js').type('script').go();
            })
            .on('404', function(request){
                // Load 'not found' view
                notFoundPage.go();
            })
            .go();
    } 
};

// startup function
Gear.start = function() {
    // apply user and tennant settings
    $('.logo').render(Gear.tennant);
    $('.user').render(Gear.user, Gear.directives);

    // setup router
    router = new Grapnel();
    router.get('logout', Gear.handlers.logout);
    router.get('v/:view', Gear.handlers.viewLoader);

    // initialize searchbar
    $('#top-search-bar').on('keyup', function() {
        var input = $(this).val();
        api.getData('suggest/', {$text:{$search: input }}).then( function (results) {
            
            console.log(results);

        }).catch(function(err) {
            // TODO: Handle error
        });
    });
};

// call startup exectution
Gear.start();
