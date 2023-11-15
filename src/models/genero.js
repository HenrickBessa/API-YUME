// Import the server module. Ensure that server.js exports the server object correctly.
import server from '../../server.js';

const Genero = {
  create: (generoData, callback) => {
    try {
      // Access the database reference within the function.
      const generosRef = server.database.ref('generos');
      generosRef.push(generoData, (error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Gênero criado com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },

  getAll: (callback) => {
    try {
      const generosRef = server.database.ref('generos');
      generosRef.once('value', (snapshot) => {
        const generos = snapshot.val();
        callback(null, generos);
      }, (error) => {
        callback(error, null);
      });
    } catch (error) {
      callback(error, null);
    }
  },

  getById: (generoId, callback) => {
    try {
      const generosRef = server.database.ref('generos');
      generosRef.child(generoId).once('value', (snapshot) => {
        const genero = snapshot.val();
        callback(null, genero);
      }, (error) => {
        callback(error, null);
      });
    } catch (error) {
      callback(error, null);
    }
  },

  update: (generoId, generoData, callback) => {
    try {
      const generosRef = server.database.ref('generos');
      generosRef.child(generoId).update(generoData, (error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Gênero atualizado com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },

  delete: (generoId, callback) => {
    try {
      const generosRef = server.database.ref('generos');
      generosRef.child(generoId).remove((error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Gênero excluído com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },
};

export default Genero;
