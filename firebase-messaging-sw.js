// function importScripts(...urls)
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
console.log("FIrebase SW");
var firebaseConfig = {
  apiKey: "AIzaSyDekvSYqdG2HPKbs8oqTElFtfDUJ6E5sWk",

  authDomain: "sveeva-d4390.firebaseapp.com",

  projectId: "sveeva-d4390",

  storageBucket: "sveeva-d4390.appspot.com",

  messagingSenderId: "1010656984318",

  appId: "1:1010656984318:web:7d1365d28a51842fabf9af",

  measurementId: "G-3449DCDF28",
};

console.log("Firebase SW init");

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;

  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(
    notificationTitle,

    notificationOptions
  );
});
