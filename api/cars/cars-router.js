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

router.get('/:id', async (req, res, next) => {
    res.json(`getting car with id ${req.params.id}`)
})

router.post('/', async (req, res, next) => {
    res.json('posting new car')
})























module.exports = router



















