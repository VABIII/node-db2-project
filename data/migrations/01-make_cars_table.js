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
  // DO YOUR MAGIC
};
