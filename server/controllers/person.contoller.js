const Person = require('../models/person.model')

module.exports.index = (request, response) => {
    response.json({message: "hello world"});
}

module.exports.createPerson = (request, response) => {
    Person.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getPeople = (req, res) => {
    Person.find({})
        .then((allPeople) => {
            res.json({people: allPeople})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        })
}