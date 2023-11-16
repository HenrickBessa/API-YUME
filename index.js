  import dotenv from 'dotenv';
  import express from 'express';
  import route from './src/routes/route.js';
  import db from './src/database/db.js';
  import kitsu from './src/controller/kitsu.controller.js';
  
  dotenv.config();
  const app = express();
  app.use(express.json());
  
  const database = () => {
    try {
      const dbInstance = db.ConnectFirebase();
      console.log('Conectado ao banco de dados Firebase');
      return dbInstance;
    } catch (error) {
      console.error('Falha ao conectar ao banco de dados', error);
    }
  };

  database();
 
  const Kitsu = () => {
    console.log('Conectando ao Kitsu...');
    // kitsu.ListaManga() 
    // .then(res => console.log('Dados de Mangá:', res))
    // .catch(err => console.error('Erro ao buscar dados da API Kitsu (Mangá):', err));
    // kitsu.ListaAnime() 
    // .then(res => console.log('Dados de Anime:', res))
    // .catch(err => console.error('Erro ao buscar dados da API Kitsu (Anime):', err));
  };
  Kitsu();


  console.log(route.RouterBook);
  app.use('/', route.RouterBook);
  console.log(route.RouterGender);
  app.use('/', route.RouterGender);
  console.log(route.RouterUser);
  app.use('/', route.RouterUser);
  console.log(route.RouterKitsu);
  app.use('/', route.RouterKitsu);
  

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
  });
  
 
  const PORT = process.env.PORT ;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
  




// import express from 'express';
// import bodyParser from 'body-parser';
// import firebase from 'firebase-admin';
// import serviceAccount from './credentials.json' assert { type: 'json' }; 

// const app = express();
// app.use(bodyParser.json());

// const firebaseConfig = {
//   credential: firebase.credential.cert(serviceAccount),
//   databaseURL: 'https://tabelasapp-4a190-default-rtdb.firebaseio.com'
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// export default { database };

// import usuarioRoutes from './routes/usuarioRoutes.js';
// import livroRoutes from './routes/livroRoutes.js';
// import generoRoutes from './routes/generoRoutes.js';

// app.use('./models/usuario.js', usuarioRoutes);
// app.use('./models/livros.js', livroRoutes);
// app.use('./models/genero.js', generoRoutes);

// app.listen(8080, () => {
//   console.log('Servidor rodando na porta 8080!');
// })
// app.use(usuarioRoutes, livroRoutes, generoRoutes)