  import dotenv from 'dotenv';
  import express from 'express';
  import bodyParser from 'body-parser';
  import {RouterUser, RouterBook, RouterGender, RouterKitsu} from './src/routes/route.js';
  import db from './src/database/db.js';


 
  dotenv.config();
  const app = express();
  app.use(bodyParser.json());
  
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
  const err = ()=>{
    return console.log("informe o caminho correto");
  }
  app.use('/', RouterUser());
  app.use('/', RouterBook());   
  app.use('/', RouterGender()); 
  app.use('/', RouterKitsu());
  app.use('/', err);

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