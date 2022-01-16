const Cars = require('./cars-model')


const checkCarId = (req, res, next) => {
    Cars.getById(req.params.id)
        .then(car => {
            if(!car) {
                next({
                    status: 404,
                    message: `Car with ${req.params.id} does not exist`
                })
            } else {
                req.car = car
                next()
            }
        })
        .catch(err => {
            next(err)
        })


}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}



module.exports = {
    checkVinNumberUnique,
    checkVinNumberValid,
    checkCarPayload,
    checkCarId
}




















