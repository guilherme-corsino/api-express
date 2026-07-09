import { Request, Response } from 'express'
import { usuarioService } from '../services/usuarioService'

export const usuarioController = {
    async listarTodos(req: Request, res: Response) {
        const usuarios = await usuarioService.listarTodos()
        res.json(usuarios)
    },

    async buscarPorId(req: Request, res: Response) {
        const usuario = await usuarioService.buscarPorId(Number(req.params.id))
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }
        res.json(usuario)
    },

    async criar(req: Request, res: Response) {
        const { nome, email } = req.body
        if (!nome || !email) {
            return res.status(400).json({ message: 'Nome e email são obrigatórios' })
        }
        const novoUsuario = await usuarioService.criar(nome, email)
        res.status(201).json(novoUsuario)
    },

    async atualizar(req: Request, res: Response) {
        const usuario = await usuarioService.atualizar(Number(req.params.id), req.body)
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }
        res.json(usuario)
    },

    async deletar(req: Request, res: Response) {
        const deletado = await usuarioService.deletar(Number(req.params.id))
        if (!deletado) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }
        res.status(204).send()
    }
}