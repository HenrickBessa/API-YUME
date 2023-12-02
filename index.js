import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import {RouterUser, RouterManga, RouterGender, RouterKitsu} from './src/routes/route.mongo.js'
import {ConnectDatabase} from './src/database/db.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

ConnectDatabase()

app.use('/', RouterUser());
app.use('/', RouterManga());   
app.use('/', RouterGender()); 
app.use('/', RouterKitsu());
app.get('/', (req,res)=>{return res.json({messagem: 'Informe uma rota'})});

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
