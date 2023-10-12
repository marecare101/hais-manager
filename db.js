const faker = require('faker');
const times = require('lodash/times');
const startCase = require('lodash/startCase');

module.exports = () => ({
  posts: times(100, index => ({
    id: index,
    title: startCase(faker.lorem.words(3)),
    body: faker.lorem.paragraphs(3),
    // and so on...
  })),

  createddata: times(100, index => ({
    Timestamp: faker.date.recent(),
    Script: faker.lorem.words(1),
    Fetchid: faker.random.uuid(),
    Scriptid: faker.random.uuid(),
    Installationid: faker.random.uuid(),
    Owner: faker.lorem.words(1),
    Ownerid: faker.random.uuid()
    
    // and so on...
  })),

  "external-settings": times(10, index => ({
    id: index,
    Id: index,
    Name: startCase(faker.lorem.words(3)),
    Value: startCase(faker.lorem.words(3))
  
    // and so on...
  }))
});
