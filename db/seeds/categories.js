
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'Baby Items'},
        {id: 2, name: 'Child Care'},
        {id: 3, name: 'Clothing'},
        {id: 4, name: 'Day Shelter'},
        {id: 5, name: 'Dental'},
        {id: 6, name: 'Disability Services'},
        {id: 7, name: 'Domestic Violence'},
        {id: 8, name: 'Education'},
        {id: 9, name: 'Emergency'},
        {id: 10, name: 'Employment'},
        {id: 11, name: 'Family Planning'},
        {id: 12, name: 'Family Support'},
        {id: 13, name: 'Food'},
        {id: 14, name: 'General'},
        {id: 15, name: 'Health'},
        {id: 16, name: 'Holiday Assistance'},
        {id: 17, name: 'Housing'},
        {id: 18, name: 'Insurance'},
        {id: 19, name: 'Legal'},
        {id: 20, name: 'LGBTQ'},
        {id: 21, name: 'Mental Health'},
        {id: 22, name: 'Transportation'},
        {id: 23, name: 'Vision'},
      ]);
    });
};
