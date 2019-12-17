
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('resources', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('website');
        table.string('location');
        table.string('contact');
        table.string('notes');
        table.boolean('favorited');

        table.timestamps(true, true);
    }),

    knex.schema.createTable('categories', function(table) {
      table.increments('id').primary();
      table.string('name');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('category_resources', function(table){
      table.increments().primary();
      table.integer('categories_id').references('id').inTable('categories');
      table.integer('resources_id').references('id').inTable('resources');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('category_resources'),
    knex.schema.dropTable('resources'),
    knex.schema.dropTable('categories')
  ]);
};
