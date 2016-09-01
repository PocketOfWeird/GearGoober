
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
    category: {
        html: function() {
            return this.category + this.subCategory ? " > " + this.subCategory : "";
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
Gear.refresh = function () {
    window.location.reload();
}
Gear.rerouteTo = function (page) {
    window.location.href = page;
}

// get current tennant and user from stored cookie
var tennantCookie = Cookies.get(Gear.localCookies.tennant);
if (!tennantCookie) Gear.rerouteTo('/login');
Gear.tennant = JSON.parse(tennantCookie);
// get current user from stored cookie
var userCookie = Cookies.get(Gear.localCookies.user);
if (!userCookie) Gear.rerouteTo('/login');
Gear.user = JSON.parse(userCookie);

// setup router handlers
Gear.handlers = {
    logout: function (req) {
        for (cookie in Gear.localCookies) {
            Cookies.expire(Gear.localCookies[cookie]);
            Gear.refresh();
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
                    $("#nav-link-" + Gear.sideNavLinks[i]).removeClass("active");
                }
                $("#nav-link-" + view).addClass("active");
                aja().url('views/' + view + '.js').type('script').go();
            })
            .on('404', function(request){
                // Load 'not found' view
                notFoundPage.go();
            })
            .go();
    } 
};
// all calls to the api
Gear.data = {};
// returns an immuntable array of Equipment (and Kit) objects
Gear.data.getEquipment = function() {
    // TODO
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
};

// call startup exectution
Gear.start();
