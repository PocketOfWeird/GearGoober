
/** 
 * Requires:
 *      node_modules/cookies-js/dist/cookies.min.js
 *      node_modules/grapnel/dist/grapnel.min.js
 *      core/cookie-setup.js
 *      lib/transparency.min.js
 *      core/api.js
 */


app = {};

// all cookies
app.localCookies = {
    auth: 'jwt',
    tennant: 'tennant',
    user: 'user'
};

// all side-nav views
app.sideNavLinks = [
    'equipment',
    'reservations',
    'groups',
    'users',
    'settings'
];

// template rendering directives
app.directives = {
    image: {
        src: function(params) {
            return this.imageUrl;
        }
    },
    restrictedToLabAssistant: {
        class: function(params) {
            if (!this.labAssistant) return 'hidden'; 
        }    
    }
};

// utility functions
app.refresh = function () {
    window.location.reload();
}
app.rerouteTo = function (page) {
    window.location.href = page;
}

// get current tennant and user from stored cookie
var tennantCookie = Cookies.get(app.localCookies.tennant);
if (!tennantCookie) app.rerouteTo('/login');
app.tennant = JSON.parse(tennantCookie);
// get current user from stored cookie
var userCookie = Cookies.get(app.localCookies.user);
if (!userCookie) app.rerouteTo('/login');
app.user = JSON.parse(userCookie);

// setup router handlers
app.handlers = {
    logout: function (req) {
        for (cookie in app.localCookies) {
            Cookies.expire(app.localCookies[cookie]);
            app.refresh();
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
                for (i=0; i < app.sideNavLinks.length; i++) {
                    $("#nav-link-" + app.sideNavLinks[i]).removeClass("active");
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

app.start = function() {
    // apply user and tennant settings
    $('.logo').render(app.tennant);
    $('.user').render(app.user, app.directives);

    // setup router
    router = new Grapnel();
    router.get('logout', app.handlers.logout);
    router.get('v/:view', app.handlers.viewLoader);
};

// call startup exectution
app.start();
