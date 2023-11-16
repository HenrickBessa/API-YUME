import express from 'express';
import bodyParser from 'body-parser';
import firebase from 'firebase-admin';
import serviceAccount from './credentials.json' assert { type: 'json' };
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

const firebaseConfig = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://tabelasapp-4a190-default-rtdb.firebaseio.com'
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default { database };

import usuarioRoutes from './src/routes/usuario.route.js';
app.use('/',usuarioRoutes);

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