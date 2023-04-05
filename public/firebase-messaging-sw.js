importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBARPQussdPnx8VM1oCyXJS6eB8IhxLVmo",
    authDomain: "queue-project-d585b.firebaseapp.com",
    projectId: "queue-project-d585b",
    storageBucket: "queue-project-d585b.appspot.com",
    messagingSenderId: "361052403878",
    appId: "1:361052403878:web:bd512f173cac5f16ce5c67",
    measurementId: "G-LEHQSL8JBZ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
