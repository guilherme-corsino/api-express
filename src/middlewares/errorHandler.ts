import { Request, Response, NextFunction } from 'express'

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(`ERRO: ${err.message}`)

    res.status(500).json({
        message: 'Erro interno do servidor',
        error: err.message
    })
}