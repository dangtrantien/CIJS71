import { signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { auth } from "../constants/commons.js";
import ConversationItem from "./conversationItem.js";
import NewConversationBtn from "./newConversationBtn.js";
import NewConversationModal from "./newConversationModal.js";

class ConversationList {
    constructor () {
        this.$conversationListContainer = document.createElement('div');
        this.$conversationListContainer.setAttribute(
            'class',
            'w-1/4 h-screen px-4 pt-4 overflow-y-scroll'
        );

        this.$newConversationModal = new NewConversationModal();
        
        this.$action = document.createElement('div');
        this.$action.setAttribute(
            'class',
            'flex justify-between'
        );
        this.$newConversationBtn = new NewConversationBtn(this.$newConversationModal.$container.classList);

        this.$logoutBtn = document.createElement('i');
        this.$logoutBtn.setAttribute(
            'class',
            'text-lime-300 hover:text-lime-500 cursor-pointer'
        );
        this.$logoutBtn.addEventListener('click', this.signOut);

        this.$logoutSVG =
        `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path onclick="signOut(this)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
        `;
        
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

    render (container) {
        this.$conversationListContainer.appendChild(this.$newConversationModal.render());
        this.$conversationListContainer.appendChild(this.$action);
        this.$action.appendChild(this.$newConversationBtn.render());
        this.$action.appendChild(this.$logoutBtn);
        this.$logoutBtn.insertAdjacentHTML('afterBegin',this.$logoutSVG);
        
        for (let i=0; i<20; i++) {
            let list = new ConversationItem(i);
            this.$conversationListContainer.appendChild(list.render());
        }

        container.appendChild(this.$conversationListContainer);
    }
}

export default ConversationList;