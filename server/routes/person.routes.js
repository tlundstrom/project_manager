const PersonController = require('../controllers/person.contoller');

module.exports = (app) => {
     app.get('/api', PersonController.index);
     app.post('/api/people', PersonController.createPerson);
     app.get('/api/people', PersonController.getPeople);
}