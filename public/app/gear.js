"use strict";

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

var directives = Immutable.fromJS({
    renderDirectives: {
        image: { src: function() { return this.imageUrl; } },
        subCategory: { subCategoryName: { text: function() { return this.value } } },
        inKit: { class: function() { this.inKit ? this.class : 'hidden'; } }
    },
    routeDirectives: {
        home: function(req) {
            console.log('ET phone home');
        }
    }
});

gear.get('router')(directives.get('routeDirectives'));
