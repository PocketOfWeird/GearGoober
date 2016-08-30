(function () {
    var userCookie = Cookies.get('user');
    if (!userCookie) window.location.href = '/login';
    var user = JSON.parse(userCookie);

    $('#userProfile').render(user);

})();