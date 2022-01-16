// const express = require('express')
// const router = express.Router()
const router = require('express').Router()

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

// router.get('/:id',  (req, res, next) => {
//     const { id } = req.params
//     Cars.getById(id)
//         .then(car => {
//             res.json(car)
//         })
//         .catch(next)
// })

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const car = await Cars.getById(id)
        res.json(car)
    }
    catch(err) {
        next(err)
    }

})

router.post('/', async (req, res, next) => {
    res.json('posting new car')
})























module.exports = router



















