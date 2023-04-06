const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Tarefa = db.define('Tarefa',{
    nome:{
        type: DataTypes.STRING
    },
    descricao:{
        type: DataTypes.STRING
    },
    concluida:{
        type: DataTypes.BOOLEAN
    },
})

module.exports = Tarefa