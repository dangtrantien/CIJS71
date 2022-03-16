import { signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { auth, ft } from "../constants/commons.js";
import ConversationItem from "./conversationItem.js";
import NewConversationBtn from "./newConversationBtn.js";
import NewConversationModal from "./newConversationModal.js";
// import { mockConversation } from "../assets/mockData.js";

class ConversationList {
    constructor (activeConversation) {
        this._activeConversation = activeConversation;

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
        // get collection from collection
    // const conversationRef = doc(db, "conversations", "of0RHiGkXlnVHGwmZzCQ");
    // const data = await getDoc(conversationRef);
    // console.log("data", data.data());
    // __________________________________________
        // get all document from collection
    // const conversationsRef = collection(db, "conversations");
    // const data = await getDocs(conversationsRef);
    // data.forEach((document) => {
    //   const conversationItem = new ConversationItem(document.data());
    //   this.$container.appendChild(conversationItem.render());
    // });
    // __________________________________________
        // query document from collection (createdAt = 321)
    // const conversationsRef = collection(db, "conversations");
    // const q = query(conversationsRef, where("createdAt", "<", 1500));
    // const data = await getDocs(q);
    // data.forEach((document) => {
    //   console.log("document", document.data());
    // });
    // __________________________________________
        // listen for realtime update 1 document
    // const documentRef = doc(db, "conversations", "AoebMOf2F3JZq5pmDD7c");
    // onSnapshot(documentRef, (doc) => {
    //   console.log("Current data: ", doc.data());
    // });
    // __________________________________________
        // listen for realtime updates collection
        const conversationRef = collection(ft, 'conversations');
        const q = query(conversationRef, where('members', 'array-contains', auth.currentUser.email));

        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if(change.type === 'added') {
                    const conversationDoc = {
                        ...change.doc.data(),
                        conversationId: change.doc.id,
                    };
                    const conversationItem = new ConversationItem(
                        conversationDoc,
                        this._activeConversation
                    );
                    this.$conversationListContainer.appendChild(conversationItem.render());
                }
            });
        })
    // mockConversation.forEach((conversation) => {
    //   const conversationItem = new ConversationItem(conversation);
    //   this.$container.appendChild(conversationItem.render());
    // });
    }

    render (container) {
        this.$conversationListContainer.appendChild(this.$newConversationModal.render());
        this.$conversationListContainer.appendChild(this.$action);
        this.$action.appendChild(this.$newConversationBtn.render());
        this.$action.appendChild(this.$logoutBtn);
        this.$logoutBtn.insertAdjacentHTML('beforeEnd',this.$logoutSVG);
    // for (let i = 0; i < 20; i++) {
    //   let temp = new ConversationItem(i);
    //   this.$container.appendChild(temp.render());
    // }

    // for (let i = 0; i < mockConversation.length; i++) {
    //   const conversationItem = new ConversationItem(mockConversation[i]);

    //   this.$container.appendChild(conversationItem.render());
    // }

        container.appendChild(this.$conversationListContainer);
    }
}

export default ConversationList;