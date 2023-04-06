const Tarefa = require('../models/Tarefa')

module.exports = class TarefaController{
    static home(req,res){
        const paginaHome = true
        res.render('tarefas/home',{paginaHome})
    }

    static async visualizar(req,res){
        const tarefas = await Tarefa.findAll({raw:true})
        res.render('tarefas/visualizar',{tarefas})
    }

    static criar(req,res){
        res.render('tarefas/criar')
    }

    static async armazenar(req,res){
        const tarefa = {
            nome: req.body.nome,
            descricao: req.body.descricao,
            concluida: false
        }
        await Tarefa.create(tarefa)
        res.redirect('/')
    }

    static async excluir(req,res){
        const id = req.body.id
        await Tarefa.destroy({where:{id:id}})
        res.redirect('/visualizar')
    }

    static async editar(req,res){
        const id = req.params.id
        const tarefa = await Tarefa.findOne({where:{id:id}, raw:true})
        res.render('tarefas/editar',{tarefa})
    }

    static async atualizar(req,res){
        const id = req.body.id
        const tarefa = {
            nome: req.body.nome,
            descricao: req.body.descricao,
        }
        await Tarefa.update(tarefa,{where: {id:id}})
        res.redirect('/visualizar')
    }

    static async alterar_status(req,res){
        const id = req.body.id
        const tarefa = {
            concluida: req.body.concluida === 'false' ? true : false
        }
        await Tarefa.update(tarefa,{where:{id:id}})
        res.redirect('/visualizar')
    }
}