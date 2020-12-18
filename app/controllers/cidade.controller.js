const Cidade = require("../models/cidade.model.js");

exports.findAll = (req, res) => {
  Cidade.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar recuperar cidades."
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Cidade.findById(req.params.cidadeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não encontrada Cidade com ID ${req.params.cidadeId}.`
        });
      } else {
        res.status(500).send({
          message: "Erro ao retornar Cidade com ID " + req.params.cidadeId
        });
      }
    } else res.send(data);
  });
};

exports.findByEstado = (req, res) => {
  Cidade.findByEstado(req.params.estadoSigla, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não encontrada Cidade com Estado ${req.params.estadoSigla}.`
        });
      } else {
        res.status(500).send({
          message: "Erro ao retornar Cidade com Estado " + req.params.estadoSigla
        });
      }
    } else res.send(data);
  });
};

exports.findByNomeAndEstado = (req, res) => {
  Cidade.findByNomeAndEstado(req.params.nome, req.params.estadoSigla, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não encontrada Cidade com nome ${req.params.nome}.`
        });
      } else {
        res.status(500).send({
          message: "Erro ao retornar Cidade com nome " + req.params.nome
        });
      }
    } else res.send(data);
  });
};


