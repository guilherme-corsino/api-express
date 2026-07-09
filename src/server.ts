import express from 'express'
import usuariosRouter from './routes/usuarios'
import { logger } from './middlewares/logger'
import { errorHandler } from './middlewares/errorHandler'


const app = express()
const PORT = 3000

app.use(express.json())
app.use(logger)
app.use('/usuarios', usuariosRouter)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})