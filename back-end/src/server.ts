import express, { Express, Request, Response } from 'express'
import joueurRoutes from './routes/joueurRoutes'
import utilisateurRoutes from './routes/utilisateurRoutes'

const cors = require('cors')

import mongoose from 'mongoose';

const app: Express = express()

const PORT = 3001

app.use(cors())
app.use(express.json())
app.use('/api/joueurs', joueurRoutes)
app.use('/api/utilisateurs', utilisateurRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const uri = "mongodb+srv://root:root@cluster0.yk5pevi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
    try {
        await mongoose.connect(uri);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error)
    }
}
run().catch(console.dir);

