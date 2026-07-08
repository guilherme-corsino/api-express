import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

const usuarioSchema = z.object({
    nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
    email: z.string().email('Email inválido'),
})

export function validarUsuario(req: Request, res: Response, next: NextFunction) {
    const resultado = usuarioSchema.safeParse(req.body)

    if (!resultado.success) {
        return res.status(400).json({
            message: 'Dados inválidos',
            errors: resultado.error.flatten().fieldErrors
        })
    }

    next()
}