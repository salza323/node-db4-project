exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
    })
    .createTable('ingredients', (tbl) => {
      tbl.increments();
      tbl.string('ingredient_name', 128).notNullable();
    })
    .createTable('steps', (tbl) => {
      tbl.increments();
      tbl.string('instruction', 128).notNullable();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE') // RESTRICT
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE') // RESTRICT
        .onUpdate('CASCADE');
      tbl.integer('ingredient_qty').notNullable();
      tbl.integer('sequence').notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
