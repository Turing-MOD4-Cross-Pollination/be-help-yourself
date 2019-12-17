const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

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
      database('resources').insert({
        name: element['Name'],
        website: element['Website']
      })
      .then(() => console.log("Seeding complete!"))
      .catch(error => console.log(`Error seeding data: ${error}`))
    })
  }
  }
)
