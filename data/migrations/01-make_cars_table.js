exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()

        tbl.string('vin', 17).unique().notNullable()
        tbl.string('make', 100).notNullable()
        tbl.string('model', 100).notNullable()
        tbl.integer('mileage').unsigned().notNullable() //unsigned() prevents mileage from being a negative #
        tbl.string('title', 100).defaultTo('clean')
        tbl.string('transmission', 100).defaultTo('automatic')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};

// If more than one table, they must be dropped in the opposite order they were inserted into the db
// The down function needs to undo everything the up func did, but in reverse order.






