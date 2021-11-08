class AuthController {
    async register( req, res, next ) {
        console.log(123);

        res.json(123)
    }

    async login( req, res, next ) {

    }

    async logout( req, res, next ) {

    }

    async refresh( req, res, next ) {

    }
}

export default new AuthController()