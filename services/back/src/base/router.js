import { Router } from 'express';


var baseRouter = Router();

// a middleware function with no mount path. This code is executed for every request to the router
baseRouter.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
baseRouter.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

// predicate the router with a check and bail out when needed
baseRouter.use((req, res, next) => {
    if (!req.headers['x-auth']) return next('router')
    next()
})


export default baseRouter;