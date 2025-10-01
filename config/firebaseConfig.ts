import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

// You'll n eed to replace this with your actual service account file name
import serviceAccount from "../coding-challenge-3-31c6f-firebase-adminsdk-fbsvc-7bfd897b05.json";

// initialize the Firebase app with our service account key
initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
});

// get a reference to the firestore database
const db: Firestore = getFirestore();

export { db };
