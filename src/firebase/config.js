import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAch_ocRI7HcHZIi6y9vr9tAfVuf2wPt_c",
    authDomain: "quikrcip.firebaseapp.com",
    projectId: "quikrcip",
    storageBucket: "quikrcip.appspot.com",
    messagingSenderId: "281450550576",
    appId: "1:281450550576:web:c65db958b4caeb033b64f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = new getFirestore(app)
