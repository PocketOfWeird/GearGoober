api = {
    /// Authentication
    authenticate: function(email, password) {
        aja()
            .method('post')
            .url('/api/auth')
            .body({ email: email, password: password })
            .on('200', function(response) {
                Cookies.set('jwt', response.token);
                Cookies.set('user', JSON.stringify(response.user));
                window.location.href = '/app'
            })
            .on('400', function(response) {
                console.log(response);
            })
            .on('500', function(response) {
                console.log(response);
            })
            .go();
    }
}