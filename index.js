//configuracao do servidor
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import userRoutes from './routes/users.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", userRoutes);

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando - See you space cowboy :)")
});

//parei no minuto 28:55