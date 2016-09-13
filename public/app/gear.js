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
 * @const {ImmutableMap}
 * 
 * @see https://github.com/baseprime/grapnel#declaring-multiple-routes 
 */
var routes = Immutable.Map({
    '/':'routeHome'
});
/**
 * Rules (Directives) for the transparency.js DOM rendering engine 
 * 
 * @readonly
 * @const {ImmutableMap}
 * 
 * @see https://github.com/leonidas/transparency/blob/master/README.md#directives
 */
var rulesForRender = Immutable.Map({
    image: { src: function() { return this.imageUrl; } },
    subCategory: { subCategoryName: { text: function() { return this.value } } },
    inKit: { class: function() { this.inKit ? this.class : 'hidden'; } }
});
/**
 * A collection of html elements that each represent an inividual view
 * 
 * @readonly
 * @const {NestedImmutableMap}
 */
var views = Immutable.fromJS({
    home: {
        html: ``
    }
});


/**============================================================================
 * ============================================================================
 * %% ++ FUNCTION LIST ++ %%
 * An alphabetical list of data used by the main application
 * ============================================================================
 * ============================================================================
 */

/**
 * Handles the logic for the home route
 * 
 * @param {HTTP Request Object} req
 * @returns {ViewObject}
 */
function routeHome(req) {

}

/*
var gear = Immutable.fromJS({
    render: function(renderDirectives, element, data) { 
        return new RSVP.Promise(function(resolve, reject) { 
            try {
                Transparency.render(element, data, renderDirectives);
                resolve('success');
            } catch (error) {
                reject(error);
            }
        }); 
    },
    router: function(routeDirectives) {
        var router = new Grapnel();
        router.get('/', routeDirectives.get('home'));    
    }
});

gear.get('router')(directives.get('routeDirectives'));
*/

/**============================================================================
 * ============================================================================
 * %% ++ MAIN ++ %%
 * The main application execution entry point
 * ============================================================================
 * ============================================================================
 */
/**
 *  Program execution starts here
 * 
 * @function gear
 * @param {Boolean} starting
 * @returns {Boolean}
 */
function gear(starting) {

}