
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('category_resources').insert([
        {id: 1, categories_id: 1, resources_id: 1},
        {
          id: 2,
          categories_id: 2,
          resources_id: 2
        },{
          id: 3,
          categories_id: 3,
          resources_id: 3
        },{
          id: 4,
          categories_id: 4,
          resources_id: 4
        },{
          id: 5,
          categories_id: 5,
          resources_id: 5
        },{
          id: 6,
          categories_id: 6,
          resources_id: 6
        },{
          id: 7,
          categories_id: 7,
          resources_id: 7
        },{
          id: 8,
          categories_id: 8,
          resources_id: 8
        },{
          id: 9,
          categories_id: 9,
          resources_id: 9
        },{
          id: 10,
          categories_id: 10,
          resources_id: 10
        },{
          id: 11,
          categories_id: 11,
          resources_id: 11
        },{
          id: 12,
          categories_id: 12,
          resources_id: 12
        },{
          id: 13,
          categories_id: 13,
          resources_id: 13
        },{
          id: 14,
          categories_id: 14,
          resources_id: 14
        },{
          id: 15,
          categories_id: 15,
          resources_id: 15
        },{
          id: 16,
          categories_id: 16,
          resources_id: 16
        }, {
          id: 17,
          categories_id: 17,
          resources_id: 17
        }, {
          id: 18,
          categories_id: 18,
          resources_id: 18
        }, {
          id: 19,
          categories_id: 19,
          resources_id: 19
        }, {
          id: 20,
          categories_id: 20,
          resources_id: 20
        }, {
          id: 21,
          categories_id: 21,
          resources_id: 21
        }, {
          id: 22,
          categories_id: 22,
          resources_id: 22
        }, {
          id: 23,
          categories_id: 23,
          resources_id: 23
        },
      ]);
    });
};
