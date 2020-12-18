const Pais = require("../models/pais.model.js");

exports.findAll = (req, res) => {
  Pais.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar recuperar paises."
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Pais.findById(req.params.paisId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não encontrada Pais com ID ${req.params.paisId}.`
        });
      } else {
        res.status(500).send({
          message: "Erro ao retornar Pais com ID " + req.params.paisId
        });
      }
    } else res.send(data);
  });
};

exports.findByNome = (req, res) => {
  Pais.findByNome(req.params.nome, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não encontrada Pais com nome ${req.params.nome}.`
        });
      } else {
        res.status(500).send({
          message: "Erro ao retornar Pais com nome " + req.params.nome
        });
      }
    } else res.send(data);
  });
};