import express from 'express'
import { router } from './routes/router'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})