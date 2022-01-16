const cars = [
    {
        vin: '123456789012345678',
        make: 'toyota',
        model: 'tundra',
        mileage: 123445,
        title: 'clean',
        transmission: 'automatic'

    },
    {
        vin: '123456789012345678',
        make: 'honda',
        model: 'accord',
        mileage: 123445,
        title: 'clean',
        transmission: 'manual'

    },
    {
        vin: '123456789012345678',
        make: 'toyota',
        model: 'supra',
        mileage: 123445,
        title: 'salvage',
        transmission: 'manual'

    },
    {
        vin: '123456789012345678',
        make: 'pontiac',
        model: 'firebird',
        mileage: 123445,
        title: 'clean',
        transmission: 'manual'

    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)

}

// exports.seed = function(knex) { // This is referred to as dependency injection
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars)
//         })
// }












































