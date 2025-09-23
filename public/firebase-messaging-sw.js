importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js");

// Your Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyCGk7rXi9enkFWYCTdwewugOaryYF5-Xfg",
  authDomain: "nexxplora2025.firebaseapp.com",
  projectId: "nexxplora2025",
  storageBucket: "nexxplora2025.firebasestorage.app",
  messagingSenderId: "942055272847",
  appId: "1:942055272847:web:d5323ccf0ca64009d85bfa",
  measurementId: "G-9M20HP9KK0"
});

// Get messaging instance
const messaging = firebase.messaging();

// Listen for background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo.png",
  });
});
