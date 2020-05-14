const knex = require("knex");
const knexfile = require("../knexfile");
const db = knex(knexfile.development);


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}


function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes").where('id', id).first();
}

function findSteps(id) {
    return db("steps").where('scheme_id', id);
}

function add(scheme) {
    return db("schemes").insert(scheme)
    .then(ids => {
        return findById(ids[0])
    })
}


function update(changes, id) {
     return db("schemes").where('id',  id).update(changes)
    .then(count => {
        return findById(id);
    })
}

function remove(id) {
    return db("schemes").where('id', id).del();
}