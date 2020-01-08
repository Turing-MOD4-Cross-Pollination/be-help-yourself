
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('recovery', function(table) {
        table.increments('id').primary();
        table.string('title', 1000);
        table.string('subtitle', 1000);
        table.string('address', 1000);

        table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('recovery')
  ]);
};
