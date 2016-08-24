gearGoob = {

    applyUserSettings: function(user) {

        $('.user > .photo > img').attr('src', user.imageUrl);

    },

    
};

// main function
(function(params) {
    
    // get current user from stored cookie
    var user = JSON.parse(Cookies.get('user'));
    // apply user settings
    gearGoob.applyUserSettings(user)

})();