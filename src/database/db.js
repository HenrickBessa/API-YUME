import firebase from 'firebase-admin';
import serviceAccount from '../../credentials.json' assert { type: 'json' };

const ConnectFirebase = async () => {
  if (!firebase.apps.length) {
    const firebaseConfig = {
      credential: firebase.credential.cert(serviceAccount),
      databaseURL: 'https://tabelasapp-4a190-default-rtdb.firebaseio.com'
    };
    firebase.initializeApp(firebaseConfig);
  }
  return firebase.database();
}

export default { 
  ConnectFirebase
};
