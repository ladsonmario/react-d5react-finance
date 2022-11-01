import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { UserType } from "../types/types";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useAPI = {
    fbPopup: async () => {
        const auth = getAuth();
        const provider = new FacebookAuthProvider();
        return await signInWithPopup(auth, provider);
    },
    addUser: async (user: UserType) => {
        await setDoc(doc(db, 'users', user.id), {
            id: user.id,
            name: user.name,
            image: user.image
        });
    }
}