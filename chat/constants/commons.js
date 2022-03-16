import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { collection, getFirestore } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js";

export const auth = getAuth();

export const ft = getFirestore();

export const storage = getStorage();

export const messageRef = collection(ft, "messages");