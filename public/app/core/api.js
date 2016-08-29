/** 
 * Requires:
 *      ../node_modules/cookies-js/dist/cookies.min.js
 *      ./cookie-setup.js
 *      ../node_modules/aja/aja.min.js
 */
api = {
    /// Tennant
    getAndSetTennant: function (tennantId, token) {
        aja()
            .method('get')
            .url('/api/tennant/' + tennantId + '?token=' + token)
            .on('200', function(response) {
                // Set tennant cookie
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
                // Set token cookie
                Cookies.set('jwt', response.token);
                // Get and Set tennant cookie
                api.getAndSetTennant(response.user.tennantId, response.token);
                // Set user cookie
                Cookies.set('user', JSON.stringify(response.user));
                // Redirect to app
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
