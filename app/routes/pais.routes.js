module.exports = app => {
  
  const paises = require("../controllers/pais.controller.js");

  app.get("/paises", paises.findAll);
  app.get("/paises/:paisId", paises.findById);
  app.get("/paises/nome/:nome", paises.findByNome);

};
