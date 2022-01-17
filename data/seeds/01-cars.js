const cars = [
    {
        vin: 'JH4CC2560PC005719',
        make: 'toyota',
        model: 'tundra',
        mileage: 123445,
        title: 'clean',
        transmission: 'automatic'

    },
    {
        vin: '1J4GZ58S8SC549867',
        make: 'honda',
        model: 'accord',
        mileage: 123445,
        title: 'clean',
        transmission: 'manual'

    },
    {
        vin: '2FABP7EV7BX127047',
        make: 'toyota',
        model: 'supra',
        mileage: 123445,
        title: 'salvage',
        transmission: 'manual'

    },
    {
        vin: 'JH4DB8580RS000024',
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


// JH4KA4552LC005350
// 2G1WF52E859227943
// JS1RF16C442100152







































