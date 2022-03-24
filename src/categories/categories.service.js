const knex = require("../db/connection");

function list() {
  return knex("categories").select("*");
}

const knex = require("../db/connection");

function create(supplier) {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  list,
  create,
};
