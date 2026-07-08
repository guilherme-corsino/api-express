interface Usuario {
    id: number
    nome: string
    email: string
}

let usuarios: Usuario[] = [
    { id: 1, nome: 'Guilherme', email: 'gui@email.com' },
    { id: 2, nome: 'Ana', email: 'ana@email.com' },
]

export const usuarioService = {
    listarTodos(): Usuario[] {
        return usuarios
    },

    buscarPorId(id: number): Usuario | undefined {
        return usuarios.find(u => u.id === id)
    },

    criar(nome: string, email: string): Usuario {
        const novoUsuario = {
            id: usuarios.length + 1,
            nome,
            email
        }
        usuarios.push(novoUsuario)
        return novoUsuario
    },

    atualizar(id: number, dados: Partial<Usuario>): Usuario | undefined {
        const index = usuarios.findIndex(u => u.id === id)
        if (index === -1) return undefined
        usuarios[index] = { ...usuarios[index], ...dados }
        return usuarios[index]
    },

    deletar(id: number): boolean {
        const index = usuarios.findIndex(u => u.id === id)
        if (index === -1) return false
        usuarios.splice(index, 1)
        return true
    }
}