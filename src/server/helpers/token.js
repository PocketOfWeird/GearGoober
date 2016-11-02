import jwt = from 'jsonwebtoken'


const tokenMiddleware = (secret, algorithm) => (req, res, next) => {

    // check header for token
    const token = req.headers['x-access-token']

    //decode token
    if (token) {

        // verifies secret and checks expires
        jwt.verify(token, secret, { algorithm: algorithm },
         function(err, decodedToken) {
            if (err) {
                if (err.name == 'TokenExpiredError') return res.status(418).send({ success: false, message: 'Token expired'})
                return res.status(401).send({ success: false, message: 'Failed to authenticate token'})
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decodedToken
                console.log("Recieved a JWT for this request")
                next()
            }
        })
    } else {
        // there is no token
        return res.status(401).send({ success: false, message: 'The request has not been authenticated'})
    }
}

export default tokenMiddleware
