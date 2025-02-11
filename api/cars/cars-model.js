const db = require('../../data/db-config')

const getAll = () => {
    return db('cars')
}

const getById = id => {
    return db('cars').where('id', id).first()
}

const create = newCar => {
    return db('cars').insert(newCar)
        .then(([id])=> getById(id))

}

const getByVin = vin => {
    return db('cars').where('vin', vin).first()
}





module.exports = {
    getAll,
    getById,
    create,
    getByVin
}