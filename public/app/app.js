
/** 
 * Requires:
 *      node_modules/cookies-js/dist/cookies.min.js
 *      node_modules/grapnel/dist/grapnel.min.js
 *      core/cookie-setup.js
 *      lib/transparency.min.js
 *      core/api.js
 */


Gear = {};
Gear.views = {};
// all cookies
Gear.localCookies = {
    auth: 'jwt',
    tennant: 'tennant',
    user: 'user',
    /**
     * Gets a locally stored cookie and parses the data. Assumes the cookies contain stringified JSON data
     * @function 
     * @param {String} cookie - the name of the locally stored cookie
     * @returns {JSON}
     */
    getCookie: function(cookie) {
        // get data from stored cookie
        var data = Cookies.get(Gear.localCookies[cookie]);
        // parse the data and return it
        return JSON.parse(data);
    }
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

// router handlers
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
                // Load view's javascript into the DOM
                aja()
                    .url('views/' + view + '.js')
                    .type('script')
                    .on('success', function() {
                        // Run the view's initialize function
                        Gear.views[view].init();
                })
                .go();
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
    Gear.tennant = Gear.localCookies.getCookie('tennant');
    Gear.user = Gear.localCookies.getCookie('user');
    $('.logo').render(Gear.tennant);
    $('.user').render(Gear.user, Gear.directives);

    // setup router
    router = new Grapnel();
    router.get('logout', Gear.handlers.logout);
    router.get('v/:view', Gear.handlers.viewLoader);

    // initialize searchbar
    $('#top-search-bar').on('keyup', function(event) {
        var input = $(this).val();
        var autoComplete = $('#top-search-bar-autocomplete');
        var key = event.keyCode;

         // gets data based on input, 
         // if input is more than 2 characters 
        if (input.length > 2) {
            // and if key is not equal to ENTER, DOWN, UP
            if (key !== 13 && key !== 40 && key !== 38) {
                api.getData('suggest/', {$text:{$search: input }}).then( function (results) {
                    if (results.length > 0) {
                        $('#top-search-autocomplete-items').render(results);
                        $('#top-search-autocomplete-items > li:first-child')
                            .addClass('autocomplete-selected');
                        autoComplete.removeClass('hidden');
                    }
                }).catch(function(err) {
                    // TODO: Handle error
                });
            }
        } else {
            // hide the autocomplete
            autoComplete.addClass('hidden');
        }
        // controls the searchbar arrow-key logic, if not on a mobile browser
        if (!Gear.util.isMobile()) {
            switch (event.keyCode) {
                case 40: // down arrow
                    $('#top-search-autocomplete-items > li:not(:last-child).autocomplete-selected')
                        .removeClass('autocomplete-selected')
                        .next().addClass('autocomplete-selected');
                    break;
                case 38: // up arrow
                    $('#top-search-autocomplete-items > li:not(:first-child).autocomplete-selected')
                        .removeClass('autocomplete-selected')
                        .prev().addClass('autocomplete-selected');
                    break;
                default:
                    break;
            }
        }
    });
};

// call startup exectution
Gear.start();
