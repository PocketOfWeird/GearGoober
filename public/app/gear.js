/**
 * @file gear.js - The entire GearGoober application logic
 * @author Nathan Hartzler
 * @version 0.0.1
 * @license
 * The MIT License
 * 
 * Copyright (c) 2016 Pocket of Weird
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * @requires immutable.js - Immutable data structures
 * @requires grapnel.js - Client-side router
 * @requires aja.js - AJAX library
 * @requires transparency.js - Data to DOM binding
 */

"use strict"; // sets the debugger to be a big meany if nesiccary
/**
 * Everything is wrapped in an immediatelly-invoked anonymous function
 * to prevent littering the global namespace
 * See {@link https://en.wikipedia.org/wiki/Immediately-invoked_function_expression}
 */
(function() {
    /**============================================================================
     * ============================================================================
     * %% ++ DATA LIST ++ %%
     * An alphabetical list of data used by the main application
     * ============================================================================
     * ============================================================================
     */

    /**
     * Application routes for the grapnel.js client-side router
     * 
     * @readonly
     * @const {Map}
     * 
     * @see https://github.com/baseprime/grapnel#declaring-multiple-routes 
     */
    const routes = {
        '/' : routeHome,
        '/:view/:subview/:query' : routeView,
        '/:view/:subview' : routeView
    };
    /**
     * Rules (Directives) for the transparency.js DOM rendering engine 
     * 
     * @readonly
     * @const {Map}
     * 
     * @see https://github.com/leonidas/transparency/blob/master/README.md#directives
     */
    const rulesForRender = {
        image: { src: function() { return this.imageUrl; } },
        subCategory: { subCategoryName: { text: function() { return this.value } } },
        inKit: { class: function() { this.inKit ? this.class : 'hidden'; } }
    };

    /**============================================================================
     * ============================================================================
     * %% ++ FUNCTION LIST ++ %%
     * An alphabetical list of data used by the main application
     * ============================================================================
     * ============================================================================
     */
    /**
     * @func authenticateApp
     * @desc Handles the app authentication logic.
     * Calls the {@link func:postToApiAnonymous},
     * and {@link func:setToCookie} functions
     * 
     * 
     * @param {String} email - the user's email
     * @param {String} pass - the user's password
     * @returns {Promise|ImmutableList}
     */
    function authenticateApp(email, pass) {
        var promise = new Promise(function(resolve, reject) {
            postToApiAnonymous('auth',{email: email, password: pass})
            .then(function(data) {
                return setToCookie('jwt', data, 0);
            })
            .then(function(data) {
                return setToCookie('user', data, 1);
            })
            .then(function(data) {
                
            })
            .catch(function(error) {
                reject(error);
            });
        });
        return promise;
    }
    /**
     * @func getFromApi
     * @desc Makes get requests to the api backend and returns the data.
     * Call the {@link func:getFromCookie} function for auth data
     * Uses the aja.js plugin {@link http://krampstudio.com/aja.js/}
     * 
     * @param {String} url - path after '/api/' with no ending '/'
     * @param {JSON} query
     * @calls func:getFromCookie
     * @returns {Promise|ImmutableList}
     */
    function getFromApi(url, query) {
        var promise = new Promise(function(resolve, reject) {

            getFromCookies(Immutable.List('user','jwt')).then(function(cookies) {

                const fullUrl = '/api/' + url + '/' + cookies.first().get('tennantId') + '/' + JSON.stringify(query) + '?token=' + cookies.last();

                aja().method('get')
                .url(fullUrl)
                .on('success', function(response) {
                    resolve(Immutable.List(response.data));
                })
                .on('error', function(response) {
                    reject(response);
                })
                .go()
            })
            .catch(function(error) {
                reject(error);
            });
        });
        return promise;
    }
    /**
     * @func getFromCookie
     * @desc Makes a get request to a local cookie and returns the data.
     * Uses the cookies.js plugin {@link https://github.com/ScottHamper/Cookies#cookiesgetkey}
     * 
     * @param {String} name - the name of the cookie
     * @returns {Promise|ImmutableMap}
     */
    function getFromCookie(name) {
        var promise = new Promise(function(resolve, reject) {
            try {
                const data = Immutable.Map(JSON.parse(Cookies.get(name)));
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
        return promise;
    }
    /**
     * @func getFromCookies
     * @desc Makes get requests to the local cookies and returns the data.
     * Uses the cookies.js plugin {@link https://github.com/ScottHamper/Cookies#cookiesgetkey}
     * 
     * @param {ImmutableList} names - the names of the cookies
     * @returns {Promise|ImmutableList}
     */
    function getFromCookies(names) {
        var promise = new Promise(function(resolve, reject) {
            try {
                resolve(names.map(function(name) {
                    try {
                        // return object
                        return Immutable.Map(JSON.parse(Cookies.get(name)));    
                    } catch (error) {
                        // return string
                        return Cookies.get(name);
                    }
                }));
            } catch (error) {
                reject(error);
            }
        });
        return promise;
    }
    /**
     * @func loadHtml
     * @desc Loads an HTML View into index.html's view portal. 
     * Uses the aja.js plugin {@link http://krampstudio.com/aja.js/}
     * 
     * @param {String} view - the name of the view
     * @param {String} subview - the name of the subview
     * @param {String} viewportal - the element selector for the view portal
     * @returns {Promise}
     */
    function loadHtml(view, subview, viewportal) {
        const url = 'views/' + view + '/' + subview +'.html';
        
        var promise = new Promise(function(resolve, reject) {
            aja().url(url).into(viewportal)
            .on('success', function(response){ resolve(response) })
            .on('error', function(response){ reject(response) }).go();
        });
        return promise;
    }
    /**
     * @func postToApi
     * @desc Makes a post request to the api backend and returns the data.
     * Calls the {@link func:getFromCookie} function for auth data
     * Uses the aja.js plugin {@link http://krampstudio.com/aja.js/}
     * 
     * @param {String} url - path after '/api/' with no ending '/'
     * @param {JSON} body - the data to post
     * @calls func:getFromCookie
     * @returns {Promise|ImmutableList}
     */
    
    /**
     * @func postToApiAnonymous
     * @desc Makes an anonymous post request to the api backend and returns the data.
     * Uses the aja.js plugin {@link http://krampstudio.com/aja.js/}
     * 
     * @param {String} url - path after '/api/' with no ending '/'
     * @param {JSON} body - the data to post
     * @returns {Promise|ImmutableList}
     */
    function postToApiAnonymous(url, body) {
        var promise = new Promise(function(resolve, reject) {
            aja().method('post').url('/api/' + url).body(body)
            .on('success', function(response) {
                resolve(Immutable.List(response.data));
            })
            .on('error', function(response) {
                reject(response);
            })
            .go()
        });
    }
    /**
     * @func render
     * @desc Renders data into the view
     */
    /**
     * @func routeHome
     * @desc Handles the logic for the home route
     * 
     * @param {HTTP Request Object} req
     * @returns {Boolean}
     */
    function routeHome(req) {
        console.log('ET Phone Home');
    }
    /**
     * @func routeView
     * @desc Handles the logic for a view route.
     * 
     * @param {HTTP Request Object} req
     * @returns {Void}
     */
    function routeView(req) {

        const view = req.params.view;
        const subview = req.params.subview;
        const query = req.params.query;
        const viewportal = '#view-portal';

        /**
         * Application views
         * @see http://facebook.github.io/immutable-js/docs/#/fromJS
         */
        const viewRegistry = Immutable.fromJS({
            equipment : {
                add: { data: false, api: '', cookie: '' },
                search: { data: true, api: 'equipment', cookie: ''  }
            }
        });

        // Check if the view is not registered
        if (!viewRegistry.hasIn([view, subview])) console.log('404! ' + view + ' not found'); // TODO: return 404 view

        // TODO: show loader gif
        loadHtml(view, subview, viewportal)
        .then( function() {
            // Check if view needs data
            if (viewRegistry.hasIn([view, subview, 'data'])) {
                // TODO: check for api or cookie via switch
            } else {
                // TODO: hide loader gif
            }
        } )
        .catch(function(error) {
            // TODO: handle error
            console.log(error);
        });
    }
    /**
     * @func setToCookie
     * @desc Sets a cookie with name and data at the given index
     * Uses cookies.js {@link https://github.com/ScottHamper/Cookies#cookiessetkey-value--options}
     * 
     * @param {String} name - the name of the cookie
     * @param {ImmutableList} data - the data list.
     * @param {Number} index - the index of the data to set
     * @returns {Promise|ImmutableList}
     */
    function setToCookie(name, data, index) {
        var promise = new Promise(function(resolve, reject) {
            const dataObject = data.get(index);

            try {
                /** see {@link http://facebook.github.io/immutable-js/docs/#/Map/toJS} */
                Cookies.set(name, JSON.stringify(dataObject.toJSON()))
                // waits until the Cookie is set
                while (!Cookies.get(name)) {
                    continue;
                }
                // then resolves the promise
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
        return promise;
    }

    /**============================================================================
     * ============================================================================
     * %% ++ MAIN ++ %%
     * The main application execution entry point
     * ============================================================================
     * ============================================================================
     */
    /**
     * @function gear - Program main function 
     * @param {Boolean} starting
     * @param {Map} [routes]
     * @returns {Boolean}
     */
    function gear(starting, routes) { 
        if (starting) {
            var router = Grapnel.listen(routes);
            return router ? true : false;
        }
        return false;
    }

    //Program execution starts here
    console.log(gear(true, routes) ? 'GearGoober is started' : 'GearGoober is not started');
})();