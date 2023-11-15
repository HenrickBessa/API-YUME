// Import the server module. Ensure that server.js exports the server object correctly.
import server from '../../server.js';

const Livro = {
  create: (livroData, callback) => {
    try {
      // Access the database reference within the function.
      const livrosRef = server.database.ref('livros');
      livrosRef.push(livroData, (error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Livro criado com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },

  getAll: (callback) => {
    try {
      const livrosRef = server.database.ref('livros');
      livrosRef.once('value', (snapshot) => {
        const livros = snapshot.val();
        callback(null, livros);
      }, (error) => {
        callback(error, null);
      });
    } catch (error) {
      callback(error, null);
    }
  },

  getById: (livroId, callback) => {
    try {
      const livrosRef = server.database.ref('livros');
      livrosRef.child(livroId).once('value', (snapshot) => {
        const livro = snapshot.val();
        callback(null, livro);
      }, (error) => {
        callback(error, null);
      });
    } catch (error) {
      callback(error, null);
    }
  },

  update: (livroId, livroData, callback) => {
    try {
      const livrosRef = server.database.ref('livros');
      livrosRef.child(livroId).update(livroData, (error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Livro atualizado com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },

  delete: (livroId, callback) => {
    try {
      const livrosRef = server.database.ref('livros');
      livrosRef.child(livroId).remove((error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Livro excluído com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },
};

export default Livro;
