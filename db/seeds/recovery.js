const environment = process.env.NODE_ENV || 'development';

const resources = require("../data/resources.js");

exports.seed = (knex) => {
  return knex('resources').del()
    .then(() => {
      let allThings = []
      resources.forEach(resource => {
        allThings.push(createResource(knex, resource))
      })
      return Promise.all(allThings)
  })
};


const createResource = (knex, element) => {
  return knex('resources').insert(
    {
    name: element.name,
    website: element.website,
    street: element.street,
    city: element.city,
    state: element.state,
    zip_code: element['zip code'],
    contact: element.contact,
    notes: element.notes,
    category: element.category,
    subcategory: element.subcategory
  })
};
