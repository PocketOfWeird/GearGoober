(function() {

    var user = JSON.parse(Cookies.get('user'));
    $('.user > .photo > img').attr('src', user.imageUrl);

})();