import { Request, Response } from 'express'
import { usuarioService } from '../services/usuarioService'

export const usuarioController = {
    listarTodos(req: Request, res: Response) {
        const usuarios = usuarioService.listarTodos()
        res.json(usuarios)
    },

    buscarPorId(req: Request, res: Response) {
        const usuario = usuarioService.buscarPorId(Number(req.params.id))
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }
        res.json(usuario)
    },

    criar(req: Request, res: Response) {
        const { nome, email } = req.body
        if (!nome || !email) {
            return res.status(400).json({ message: 'Nome e email são obrigatórios' })
        }
        const novoUsuario = usuarioService.criar(nome, email)
        res.status(201).json(novoUsuario)
    },

    atualizar(req: Request, res: Response) {
        const usuario = usuarioService.atualizar(Number(req.params.id), req.body)
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }
        res.json(usuario)
    },

    deletar(req: Request, res: Response) {
        const deletado = usuarioService.deletar(Number(req.params.id))
        if (!deletado) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }
        res.status(204).send()
    }
}