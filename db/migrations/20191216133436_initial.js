
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('resources', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('website', 1000);
        table.string('location');
        table.string('contact');
        table.string('notes', 1000);
        table.string('category');
        table.string('subcategory');
        table.boolean('favorited');

        table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('resources')
  ]);
};
