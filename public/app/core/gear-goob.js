gearGoob = {

    templateImageDirectives: {
        image: {
            src: function(params) {
                return this.imageUrl;
            }
        }
    },

    applySettings: function(tennant, user) {
        $('.logo').render(tennant);
        $('.user').render(user, this.templateImageDirectives);
    },

    
};

// entry function
function main() {
    
    // get current tennant from stored cookie
    var tennant = JSON.parse(Cookies.get('tennant'));
    // get current user from stored cookie
    var user = JSON.parse(Cookies.get('user'));
    // apply settings
    gearGoob.applySettings(tennant, user);

};

// call main to start exectution
main();
