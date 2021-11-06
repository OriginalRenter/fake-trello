import express from 'express'
import router from './router/index.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

let app = express()
let env = dotenv.config().parsed

app.use(express.json())
app.use('/', router)

let start = async () => {
    try {
        await mongoose.connect(env.MONGO_CONNECTION)

        app.listen(env.PORT, () => {
            console.log(`Server started in ${env.PORT} port.`);
        })
    }catch(e) {
        console.log(e)
    }
}

start()