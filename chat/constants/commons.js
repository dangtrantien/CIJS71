import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

export const auth = getAuth();

export const ft = getFirestore();

export const db = getDatabase();