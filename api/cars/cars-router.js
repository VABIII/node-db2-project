// const express = require('express')
// const router = express.Router()
const router = require('express').Router()

const {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique} = require('./cars-middleware')

const Cars = require('./cars-model')

// router.get('/', async (req, res, next) => {
//     Cars.getAll()
//         .then(cars => {
//             res.json(cars)
//         })
//         .catch(next)
// })

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.json(cars)
    }
    catch(err) {
        next(err)
    }

})

router.get('/:id', checkCarId, (req, res, next) => {

    // res.json(req.car)
    const { id } = req.params
    Cars.getById(id)
        .then(car => {
            console.log(req.car)
            res.json(car)
        })
        .catch(next)
})

// router.get('/:id', checkCarId, async (req, res, next) => {
//     const { id } = req.params
//     try {
//         const car = await Cars.getById(id)
//         res.json(car)
//     }
//     catch(err) {
//         next(err)
//     }
//
// })

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique,  (req, res, next) => {
    Cars.create(req.body)
        .then(newCar => {
            res.json(newCar)
        })
        .catch(next)
})























module.exports = router



















