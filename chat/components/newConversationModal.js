import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { auth, ft } from "../constants/commons.js";
import InputGroup from "./inputGroup.js";

class NewConversationModal {
    constructor () {
        this.$container = document.createElement('form');
        this.$container.setAttribute(
            'class',
            'hidden new-conversation-modal'
        );
        this.$container.addEventListener('submit', this.onSubmit);

        this.$conversationName = new InputGroup(
            'Start a new conversation',
            'text',
            'Enter conversation name'
        );

        this.$email = new InputGroup(
            'Email',
            'text',
            'Enter email address'
        );

        this.$submitBtn = document.createElement('button');
        this.$submitBtn.innerText = 'Create';
        this.$submitBtn.type = 'submit';
        this.$submitBtn.setAttribute(
            'class',
            'w-24 p-2 bg-amber-500 text-white rounded-xl hover:bg-orange-500'
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        const conversationName = this.$conversationName.getValue();
        const email = this.$email.getValue();

        const newConversation = {
            members: [email, auth.currentUser.email],
            conversationName,
            createDate: new Date().toLocaleString()
        };
        // using setDoc function to create a new document in the collection
    // const collectionRef = doc(db, "conversations", "hahahhaa");
    // setDoc(collectionRef, newConversationDocument);

        // using addDoc function to create a new document in the collection
        const ref = collection(ft, 'conversations');
        addDoc(ref, newConversation);
        
        this.$container.classList.add('hidden');
    }

    render () {
        this.$container.appendChild(this.$conversationName.render());
        this.$container.appendChild(this.$email.render());
        this.$container.appendChild(this.$submitBtn);

        return this.$container;
    }
}

export default NewConversationModal;