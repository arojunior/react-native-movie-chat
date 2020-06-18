import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/**
 * It definetly shouldn't be here, the correct way would be environment variable
 * But since we are not using CI/CD pipelines...
 */
const firebaseConfig = {
  apiKey: 'AIzaSyA42IZN_YaacMTHFX21zewA3Cm2mfuUYqw',
  authDomain: 'react-native-movie-chat.firebaseapp.com',
  databaseURL: 'https://react-native-movie-chat.firebaseio.com',
  projectId: 'react-native-movie-chat',
  storageBucket: 'react-native-movie-chat.appspot.com',
  messagingSenderId: '131955707985',
  appId: '1:131955707985:web:3f80d06f39a3844ad0a870',
};

firebase.initializeApp(firebaseConfig);

export default firebase;