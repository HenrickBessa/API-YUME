import {ConnectFirebase} from '../database/db.js';
const database = ConnectFirebase();
const Usuario = {
  create: (usuarioData, callback) => {
    console.log("Acessando o Firebase para criar um novo usuário");
    try {
      const usuariosRef = database.ref('usuarios');
      usuariosRef.push(usuarioData, (error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Usuário criado com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },

  getAll: (callback) => {
    console.log("Acessando o Firebase para buscar todos os usuários");
    try {
      
      const usuariosRef = database.ref('usuarios');
      usuariosRef.once('value', (snapshot) => {
        const usuarios = snapshot.val();
        console.log("Usuários obtidos:", usuarios);
        callback(null, usuarios);
      }, (error) => {
        console.log("Erro ao buscar usuários:", error);
        callback(error, null);
      });
    } catch (error) {
      console.log("Erro de captura ao buscar usuários:", error);
      callback(error, null);
    }
  },

  getById: (userId, callback) => {
    try {
      const usuariosRef = database.ref('usuarios');
      usuariosRef.child(userId).once('value', (snapshot) => {
        const usuario = snapshot.val();
        callback(null, usuario);
      }, (error) => {
        callback(error, null);
      });
    } catch (error) {
      callback(error, null);
    }
  },

  update: (userId, usuarioData, callback) => {
    try {
      const usuariosRef = database.ref('usuarios');
      usuariosRef.child(userId).update(usuarioData, (error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Usuário atualizado com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },

  delete: (userId, callback) => {
    try {
      const usuariosRef = database.ref('usuarios');
      usuariosRef.child(userId).remove((error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Usuário excluído com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },

};

export default Usuario;
