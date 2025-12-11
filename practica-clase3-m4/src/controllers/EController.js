const pokemonModel = require("../models/EModel")

function obtenerE(req, res) {
    res.json(pokemonModel.getAll())
}

module.exports = {
    obtenerE
}