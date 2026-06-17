// ==========================================
// FIREBASE CONFIGURATION (COMPAT SDK)
// ==========================================
// Connected to Firebase Project: portfolio-8b430

const firebaseConfig = {
    apiKey: "AIzaSyAriJu2zEeLSzwHy12iYsUIOStJ-2Mp_ls",
    authDomain: "shraddha-dangal.firebaseapp.com",
    projectId: "shraddha-dangal",
    storageBucket: "shraddha-dangal.firebasestorage.app",
    messagingSenderId: "292139101238",
    appId: "1:292139101238:web:0baca66dae17e59a837c97",
    measurementId: "G-WNE57DHSY3"
};

// Initialize Firebase (Only if config is set, otherwise fall back to mock data)
let firebaseApp = null;
let auth = null;
let db = null;

// Simple check to make sure the student replaced the placeholders
const isFirebaseConfigured = firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY";

if (isFirebaseConfigured) {
    try {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        console.log("Firebase initialized successfully (Authentication & Firestore).");
    } catch (error) {
        console.error("Firebase initialization failed: ", error);
    }
} else {
    console.warn("Firebase is not configured yet. The portfolio will run in 'Offline Mock Data' mode.");
}

// ==========================================
// STUDENT IDENTIFIER SETTING
// ==========================================
// In a single-student portfolio, keep this consistent between index.html and admin.html.
const STUDENT_ID = "alex_morgan";
