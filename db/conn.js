require('dotenv').config()
const usuariodb = process.env.DB_USER
const senhadb = process.env.DB_PASS
const nomedb = process.env.DB_NAME
const lugardb = process.env.DB_HOST

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(nomedb,usuariodb,senhadb,{
    host: lugardb,
    dialect: 'postgres',
})

try{
    sequelize.authenticate()
    console.log('conectou ao banco de dados')
} catch(error){
    console.log(`não foi possivel conectar ao banco de dados ${error}`)
}

module.exports = sequelize