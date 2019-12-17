exports.seed = function(knex) {
	return knex('resources').del()
	  .then(() => {
		return Promise.all([
  		  knex('resources').insert({
			    name: 'Clayton Family Futures',
          website: 'http://www.claytonearlylearning.org/',
          location: '3801 Martin Luther King Blvd.',
          contact: '303-355-4411',
          notes: 'Prenatal intervention & child development services'
		  }, 'id')
		  .then(() => console.log('Seeding complete!'))
		  .catch(error => console.log(`Error seeding data: ${error}`))
		])
	  })
	  .catch(error => console.log(`Error seeding data: ${error}`));
  };