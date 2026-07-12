import prisma from '../database/prisma'

export const usuarioService = {
    async listarTodos() {
        return prisma.usuario.findMany()
    },

    async buscarPorId(id: number) {
        return prisma.usuario.findUnique({
            where: { id },
            include: { posts: true }
        })
    },

    async criar(nome: string, email: string) {
        return prisma.usuario.create({
            data: { nome, email }
        })
    },

    async atualizar(id: number, dados: { nome?: string; email?: string }) {
        return prisma.usuario.update({
            where: { id },
            data: dados
        })
    },

    async deletar(id: number) {
        return prisma.usuario.delete({ where: { id } })
    }
}