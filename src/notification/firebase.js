// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getMessaging , getToken} from "firebase/messaging";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "nexxplora2025.firebaseapp.com",
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: "nexxplora2025.firebasestorage.app",
//   messagingSenderId: import.meta.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_VAPID_KEY,
//   measurementId: import.meta.env.VITE_MEASURE_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const messaging=getMessaging(app)
// const analytics = getAnalytics(app);

// export const generateToken =async()=>{
//     const permission =await Notification.requestPermission();
//     if(permission==="granted"){
//         const token= await getToken(messaging,{
//             vapidKey:import.meta.env.VITE_FIREBASE_VAPID_KEY
//         })
//         console.log(token)
//     }

// }