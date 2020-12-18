module.exports = app => {
  
  const cidades = require("../controllers/cidade.controller.js");

  app.get("/cidades", cidades.findAll);
  app.get("/cidades/:cidadeId", cidades.findById);
  app.get("/cidades/estados/:estadoSigla", cidades.findByEstado);
  app.get("/cidades/estados/:estadoSigla/:nome", cidades.findByNomeAndEstado);

};
