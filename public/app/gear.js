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
 * @requires rsvp.js - Promise library
 * @requires grapnel.js - Client-side router
 * @requires aja.js - AJAX library
 * @requires transparency.js - Data to DOM binding
 */

"use strict"; // sets the debugger to be a big meany if nesiccary

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
 * @func load
 * @desc Loads an HTML View into index.html's view portal. 
 * Uses the aja.js plugin {@link http://krampstudio.com/aja.js/}
 * 
 * @param {String} view - the name of the view
 * @param {String} subview - the name of the subview
 * @param {String} viewportal - the element selector for the view portal
 * @returns {Promise}
 */
function load(view, subview, viewportal) {
    const url = 'views/' + view + '/' + subview +'.html';
    
    var promise = new RSVP.Promise(function(resolve, reject) {
        aja().url(url).into(viewportal)
        .on('success', function(response){ resolve(response) })
        .on('error', function(response){ reject(response) }).go();
    });
    return promise;
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
    const viewportal = '#view-portal';

    // TODO: show loader gif
    load(view, subview, viewportal).then(function() {
        // TODO: hide loader gif
    }).catch(function(error) {
        // TODO: handle error
        console.log(error);
    });
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
