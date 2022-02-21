import { signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { auth, db } from "../constants/commons.js";
import ConversationItem from "./conversationItem.js";
import NewConversationBtn from "./newConversationBtn.js";
import NewConversationModal from "./newConversationModal.js";

class ConversationList {
    constructor () {
        this.$conversationListContainer = document.createElement('div');
        this.$conversationListContainer.setAttribute(
            'class',
            'w-1/4 h-screen px-4 pt-4 overflow-y-hidden hover:overflow-y-scroll'
        );

        this.$newConversationModal = new NewConversationModal();
        
        this.$action = document.createElement('div');
        this.$action.setAttribute(
            'class',
            'flex justify-between h-10 mb-8 items-center'
        );
        this.$newConversationBtn = new NewConversationBtn(this.$newConversationModal.$container.classList);

        this.$logoutBtn = document.createElement('button');
        this.$logoutBtn.innerText = 'Sign out';
        this.$logoutBtn.setAttribute(
            'class',
            'rounded flex  p-2  text-lime-500 hover:bg-lime-300 hover:text-white shadow shadow-gray-400'
        );
        this.$logoutBtn.addEventListener('click', this.signOut);

        this.$logoutSVG =
        `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path onclick="signOut(this)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
        `;
        
        this.createConversationList();
    }

    signOut = () => {
        signOut (auth).then((response) => {
            if (response) {
                alert ('You have been signed out');
            }
        })
        .catch ((error) => {
            alert ('Something wrong', error);
        })
    }

    async createConversationList(){
        const conversationRef = collection(db, 'conversations');
        const q = query(conversationRef, where('members', 'array-contains-any', [auth.currentUser.email]));

        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if(change.type === 'added') {
                    const changes = change.doc.data();
                    const conversationItem = new ConversationItem(changes);
                    this.$conversationListContainer.appendChild(conversationItem.render());
                }
            })
        })
    }

    render (container) {
        this.$conversationListContainer.appendChild(this.$newConversationModal.render());
        this.$conversationListContainer.appendChild(this.$action);
        this.$action.appendChild(this.$newConversationBtn.render());
        this.$action.appendChild(this.$logoutBtn);
        this.$logoutBtn.insertAdjacentHTML('beforeEnd',this.$logoutSVG);

        container.appendChild(this.$conversationListContainer);
    }
}

export default ConversationList;