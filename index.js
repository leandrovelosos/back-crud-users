//configuracao do servidor

import express from 'express';
import userRoutes from './routes/users.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8800);

//parei no minuto 28:55