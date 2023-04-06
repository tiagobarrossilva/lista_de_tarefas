const express = require('express')
const router = express.Router()

const TarefaController = require('../controllers/TarefaController')

router.post('/alterar_status',TarefaController.alterar_status)
router.post('/atualizar',TarefaController.atualizar)
router.post('/excluir',TarefaController.excluir)
router.post('/armazenar',TarefaController.armazenar)
router.get('/visualizar',TarefaController.visualizar)
router.get('/criar',TarefaController.criar)
router.get('/editar/:id',TarefaController.editar)
router.get('/',TarefaController.home)

module.exports = router