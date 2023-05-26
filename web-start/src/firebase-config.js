/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyAasP4Gulh9bYewhz9cEKygh3MMywBGjoc",
  authDomain: "chat-app-80bdf.firebaseapp.com",
  projectId: "chat-app-80bdf",
  storageBucket: "chat-app-80bdf.appspot.com",
  messagingSenderId: "284781551311",
  appId: "1:284781551311:web:98e481db1e83eeffd021ba"
};



export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}