import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({ adapter })

async function main() {
    await prisma.post.deleteMany()
    await prisma.usuario.deleteMany()

    const gui = await prisma.usuario.create({
        data: {
            nome: 'Guilherme Corsino',
            email: 'gui@email.com',
            posts: {
                create: [
                    { titulo: 'Primeiro post', conteudo: 'Conteúdo do primeiro post' },
                    { titulo: 'Segundo post', conteudo: 'Conteúdo do segundo post' },
                ]
            }
        }
    })

    await prisma.usuario.create({
        data: {
            nome: 'Ana Silva',
            email: 'ana@email.com',
            posts: {
                create: [
                    { titulo: 'Post da Ana', conteudo: 'Conteúdo do post da Ana' },
                ]
            }
        }
    })

    console.log('Seed executado com sucesso!')
    console.log(`Usuário criado: ${gui.nome}`)
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())