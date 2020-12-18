const sql = require("./db.js");

const Cidade = function(cidade) {
  this.nome = cidade.nome;
  this.estadoSigla = cidade.estadoSigla;
  this.ddd = cidade.ddd;
};

Cidade.findById = (cidadeId, result) => {
  
  sql.query(`SELECT * FROM cidade WHERE id = ${cidadeId}`, (err, res) => {
    
    if (err) {
      console.log("erro: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("cidade encontrada: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  
  });
};

Cidade.findByEstado = (estadoSigla, result) => {
  
  sql.query(`SELECT * FROM cidade WHERE estado = "${estadoSigla}"`, (err, res) => {
    
    if (err) {
      console.log("erro: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("cidade encontrada: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  
  });
};

Cidade.findByNomeAndEstado = (nome, estadoSigla, result) => {
  
  sql.query(`SELECT * FROM cidade WHERE nome LIKE "%${nome}%" AND estado = "${estadoSigla}"`, (err, res) => {
    
    if (err) {
      console.log("erro: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("cidade encontrada: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  
  });
};

Cidade.getAll = result => {
  
  sql.query("SELECT * FROM cidade", (err, res) => {
    
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("cidades: ", res);
    result(null, res);
  
  });

};

module.exports = Cidade;
