
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      spreadsheet = require('xlsx-to-json');
      spreadsheet({
        input: "./Resources.xlsx",
        sheet: "Clothing",
        output: "./asd.json"
      }, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          result.forEach(element => {
            knex('resources').insert({
              name: element['Name'],
              website: element['Website']
            })
            .then(() => console.log("Seeding complete!"))
            .catch(error => console.log(`Error seeding data: ${error}`))
          })
        }
      })
    });
};
