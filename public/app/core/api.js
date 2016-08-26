api = {
    /// Tennant
    getTennant: function (tennantId, token) {
        aja()
            .method('get')
            .url('/api/tennant/' + tennantId + '?token=' + token)
            .on('200', function(response) {
                Cookies.set('tennant', JSON.stringify(response.tennant));
            })
            .on('400', function(response) {
                console.log(response + ' ' + response.message);
            })
            .on('500', function(response) {
                console.log(response + ' ' + response.message);
            })
            .go();
    },
    /// Authentication
    authenticate: function(email, password) {
        aja()
            .method('post')
            .url('/api/auth')
            .body({ email: email, password: password })
            .on('200', function(response) {
                Cookies.set('jwt', response.token);
                api.getTennant(response.user.tennantId, response.token);  
                Cookies.set('user', JSON.stringify(response.user));
                window.location.href = '/app'
            })
            .on('400', function(response) {
                console.log(response + ' ' + response.message);
            })
            .on('500', function(response) {
                console.log(response + ' ' + response.message);
            })
            .go();
    }
};
