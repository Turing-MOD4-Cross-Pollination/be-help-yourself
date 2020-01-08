const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
spreadsheet = require('xlsx-to-json');

spreadsheet({
  input: "./recoverymtgs.xlsx",
  sheet: "Sheet1",
  output: "./recovery_import.csv"
}, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    result.forEach(element => {
      database('recovery').del().then(async function () {
      await database('recovery').insert({
        title: element['title'],
        subtitle: element['subtitle'],
        address: element['address'],
      })
      .then(() => console.log("Seeding complete!"))
      .catch(error => console.log(`Error seeding data: ${error}`))
    })
  });
  }
  }
)
