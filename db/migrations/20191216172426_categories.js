
exports.up = function(knex) {
  return Promise.all([
      knex.schema.createTable('categories', function(table) {
          table.increments('id').primary();
          table.string('name');

          table.timestamps(true, true);
      })
  ])
};

exports.down = function(knex) {
  return Promise.all([
      knex.schema.dropTable('categories')
  ]);
};