import express from 'express';
import bodyParser from 'body-parser';
import firebase from 'firebase-admin';
import serviceAccount from './credentials.json' assert { type: 'json' };

const app = express();
app.use(bodyParser.json());

const firebaseConfig = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://tabelasapp-4a190-default-rtdb.firebaseio.com'
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default { database }


import usuarioRoutes from './src/routes/usuarioRoutes.js';
import livroRoutes from './src/routes/livroRoutes.js';
import generoRoutes from './src/routes/generoRoutes.js';


app.use('/usuarios',usuarioRoutes);
app.use('/livros', livroRoutes);
app.use('/generos', generoRoutes);


app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080!');
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