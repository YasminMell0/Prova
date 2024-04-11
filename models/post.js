const db = require("./banco")

const Pessoa = db.sequelize.define("banco", {
    nome:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.STRING
    },
    bairro:{
        type: db.Sequelize.STRING
    },
    cep:{
        type: db.Sequelize.STRING
    },
    cidade:{
        type: db.Sequelize.STRING
    },
    estado:{
        type: db.Sequelize.STRING
    }
})
//Pessoa.sync({force:true})

module.exports = Pessoa