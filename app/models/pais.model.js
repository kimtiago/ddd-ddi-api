const sql = require("./db.js");

const Pais = function(pais) {
  this.nome = pais.nome;
  this.ddi = pais.ddi;
};

Pais.findById = (paisId, result) => {
  
  sql.query(`SELECT * FROM pais WHERE id = ${paisId}`, (err, res) => {
    
    if (err) {
      console.log("erro: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("pais encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  
  });
};

Pais.findByNome = (nome, result) => {
  
  sql.query(`SELECT * FROM pais WHERE nome LIKE "%${nome}%"`, (err, res) => {
    
    if (err) {
      console.log("erro: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("pais encontrado: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  
  });
};

Pais.getAll = result => {
  
  sql.query("SELECT * FROM pais", (err, res) => {
    
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("paises: ", res);
    result(null, res);
  
  });

};

module.exports = Pais;
