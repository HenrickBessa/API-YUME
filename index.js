  import dotenv from 'dotenv';
  import express, { response } from 'express';
  import bodyParser from 'body-parser';
  //import {RouterUser, RouterBook, RouterGender, RouterKitsu} from './src/routes/route.js';
  import {RouterUser, RouterBook, RouterGender} from './src/routes/route.mongo.js'

  import {ConnectDatabase, ConnectAnilist} from './src/database/db.js';

  dotenv.config();
  const app = express();
  app.use(bodyParser.json());

  app.get('/animes', async (req, res) => {
    try {
        const response = await ConnectAnilist();
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar lista de animes:', error);
        res.status(500).send('Erro ao buscar lista de animes');
    }
});

ConnectDatabase()

  app.use('/', RouterUser());
  app.use('/', RouterBook());   
  app.use('/', RouterGender()); 
  // app.use('/', RouterKitsu());
  app.get('/', (req,res)=>{
    return res.json({messagem: 'Informe uma rota'})
  });

  const PORT = process.env.PORT ;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });