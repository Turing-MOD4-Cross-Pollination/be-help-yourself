var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

describe('test databases', () => {
    beforeEach(async () => {
        await database.seed.run();
    });

    describe('Resource Database', () => {
        test('databases', async () => {
            const firstResource = await database('resources').first();

            expect(firstResource.name).toBe('Wee Cycle')
        });
    });
});