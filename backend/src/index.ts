import express, { Express } from 'express'
import cors from 'cors'
import { HealthCheckController } from './controllers/healthCheck'
import { config } from './index.config'

const app: Express = express()

const run = async () => {
    app.use(express.json())
    app.use(cors())
    app.use('/health-check', new HealthCheckController().getRouter())
    app.listen(config.port, () => {
        console.log(`Server is running on port: ${config.port}`);
    })
}

run()
.then(() => {
    console.log('Everything is ok')
})
.catch((err: unknown) => {
    const error = err as Error
    console.log(error.message)
})