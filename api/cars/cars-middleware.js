const Cars = require('./cars-model')
const vinVal = require('vin-validator')
const {getByVin} = require('./cars-model')

// const checkCarId = (req, res, next) => {
//     Cars.getById(req.params.id)
//         .then(car => {
//             if(!car) {
//                 next({
//                     status: 404,
//                     message: `car with id ${req.params.id} is not found `
//                 })
//             } else {
//                 req.car = car
//                 next()
//             }
//         })
//         .catch(err => {
//             next(err)
//         })
//
//
// }

const checkCarId = async (req, res, next) => {
    // const { id } = req.params
    try {
        const car = await Cars.getById(req.params.id)
        if (!car) {
            next({
                status: 404,
                message: `car with id ${req.params.id} is not found `
            })
        } else {
            req.car = car
            next()
        }
    } catch (err) {
        next(err)
    }
}

const checkCarPayload = (req, res, next) => {
    const {vin, make, model, mileage} = req.body
    const error = {status: 400}
    if(!vin) return next({
        status: 400,
        message: `vin is missing`,
    })
    if(!make) return next({
        status: 400,
        message: `make is missing`
    })
    if(!model) return next({
        status: 400,
        message: `model is missing`
    })
    if(!mileage) return next({
        status: 400,
        message: `mileage is missing`
    })
    next()
}

const checkVinNumberValid = (req, res, next) => {
    // const { vin } = req.body
    if(vinVal.validate(req.body.vin)) {
        next()
    } else {
        next({
            status: 400,
            message: `vin ${req.body.vin} is invalid`
        })
    }
}

const checkVinNumberUnique = async (req, res, next) => {
    try {
        const exists = await Cars.getByVin(req.body.vin)
        if (!exists) {
            next()
        } else {next({
            status: 400,
            message: `vin ${req.body.vin} already exists`
        })
        }
    }
    catch (err) {
        next(err)
    }
}

// http post :9000/api/cars vin=JH4KA4552LC005350 make=nissan model=maxima mileage=12345


module.exports = {
    checkVinNumberUnique,
    checkVinNumberValid,
    checkCarPayload,
    checkCarId
}




















