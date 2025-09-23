// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging , getToken} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGk7rXi9enkFWYCTdwewugOaryYF5-Xfg",
  authDomain: "nexxplora2025.firebaseapp.com",
  projectId: "nexxplora2025",
  storageBucket: "nexxplora2025.firebasestorage.app",
  messagingSenderId: "942055272847",
  appId: "1:942055272847:web:d5323ccf0ca64009d85bfa",
  measurementId: "G-9M20HP9KK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging=getMessaging(app)
const analytics = getAnalytics(app);

export const generateToken =async()=>{
    const permission =await Notification.requestPermission();
    console.log(permission)
    if(permission==="granted"){
        const token= await getToken(messaging,{
            vapidKey:"BPZXBdvRctmgF75baOphb7m1R0WPCGj_B_d83Tdc2gJUjkqeg7gZpEvyEhOdI_iPdQ7A6IQX9Nzw_eLzFxy-xf8"
        })
        console.log(token)
    }

}