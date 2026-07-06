import { Router } from 'express'

const router = Router()

// banco de dados falso em memória
let usuarios = [
    { id: 1, nome: 'Guilherme', email: 'gui@email.com' },
    { id: 2, nome: 'Ana', email: 'ana@email.com' },
]

// GET /usuarios — listar todos
router.get('/', (req, res) => {
    res.json(usuarios)
})

// GET /usuarios/:id — buscar um
router.get('/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === Number(req.params.id))
    if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
    }
    res.json(usuario)
})

export default router

// POST /usuarios — criar novo
router.post('/', (req, res) => {
    const { nome, email } = req.body

    if (!nome || !email) {
        return res.status(400).json({ message: 'Nome e email são obrigatórios' })
    }

    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email
    }

    usuarios.push(novoUsuario)
    res.status(201).json(novoUsuario)
})

// DELETE /usuarios/:id — deletar
router.delete('/:id', (req, res) => {
    const index = usuarios.findIndex(u => u.id === Number(req.params.id))

    if (index === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    usuarios.splice(index, 1)
    res.status(204).send()
})

router.put('/:id', (req, res) => {
    const index = usuarios.findIndex(u => u.id === Number(req.params.id))

    if (index === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    // atualiza os dados
    const { nome, email } = req.body
    usuarios[index] = { ...usuarios[index], nome, email }

    res.json(usuarios[index])
})

// PATCH /usuarios/:id — atualizar parcialmente
router.patch('/:id', (req, res) => {
    const index = usuarios.findIndex(u => u.id === Number(req.params.id))

    if (index === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    usuarios[index] = { ...usuarios[index], ...req.body }

    res.json(usuarios[index])
})