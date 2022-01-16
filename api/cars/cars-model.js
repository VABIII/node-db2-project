const db = require('../../data/db-config')

const getAll = () => {
    return db('cars')
}

const getById = id => {
    return db('cars').where('id', id)
}

const create = newCar => {
    return db('cars').insert(newCar)

}






module.exports = {
    getAll,
    getById,
    create
}