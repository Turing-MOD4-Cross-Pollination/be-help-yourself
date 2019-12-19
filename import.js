const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
spreadsheet = require('xlsx-to-json');
spreadsheet({
  input: "./Resources.xlsx",
  sheet: "Sheet1",
  output: "./resouces_import.csv"
}, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    result.forEach(element => {
      database('resources').del().then(async function () {
      await database('resources').insert({
        name: element['name'],
        website: element['website'],
        street: element['street'],
        city: element['city'],
        state: element['state'],
        zip_code: element['zip code'],
        contact: element['contact'],
        notes: element['notes'],
        category: element['category'],
        subcategory: element['subcategory']
      })
      .then(() => console.log("Seeding complete!"))
      .catch(error => console.log(`Error seeding data: ${error}`))
    })
  });
  }
  }
)
