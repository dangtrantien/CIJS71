import { ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { auth, storage, messageRef } from "../constants/commons.js";

class ChatInput {
    _activeConversation;
    _fileUrl;
    _proccessingFile;
    isUpload = false;
    _progress = 0;
    
    constructor () {
        this.$container = document.createElement('form');
        this.$container.setAttribute('class', 'flex items-center');
        this.$container.addEventListener('submit', this.onSubmit);

        this.$inputChat = document.createElement('input');
        this.$inputChat.type = 'text';
        this.$inputChat.placeholder = 'Add your message';
        this.$inputChat.setAttribute(
            'class', 
            'w-full h-12 my-4 px-6 rounded-3xl bg-lime-200'
        );

        this.$sendBtn = document.createElement('button');
        this.$sendBtn.innerText = 'Send';
        this.$sendBtn.setAttribute(
            'class', 
            'py-2 px-6 rounded-full flex justify-evenly items-center text-white text-sm bg-lime-400 border-0 font-semibold'
        );

        this.$sendIcon = `<img src="https://img.icons8.com/material-sharp/24/ffffff/filled-sent.png"/ class="ml-2">`

        this.$chooseFile = document.createElement('input');
        this.$chooseFile.type = 'file';
        this.$chooseFile.setAttribute(
            'class',
            'text-none text-sm text-lime-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lime-400 file:text-white file:cursor-pointer'
        );
        this.$chooseFile.addEventListener('change', this.onChange);
    }

    onChange = (event) => {
        this.isUpload = true;
        const file = event.target.files[0];
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_change', 
            (snapshot) => {
                const progress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this._progress = progress;
                if (progress === 100) {
                    this._proccessingFile = true;
                }
            },
            (error) => alert(error.message),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then((url) => {
                    this._fileUrl = url;
                })
                .catch((err) => alert(err.message));
            }
        );
    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();
            const msgContent = this.$inputChat.value;
            
            if (msgContent.trim().length !== 0) {
                if (this.isUpload){
                    if (this._proccessingFile === true) {
                        const newMsg = {
                            content: msgContent,
                            createDate: new Date().valueOf(),
                            senderId: auth.currentUser.uid,
                            conversationId: this._activeConversation.conversationId,
                            file: this._fileUrl
                        };
                        addDoc(messageRef, newMsg);
                        this.$inputChat.value = '';
                    }
                    else {
                        alert(`Please wait for file to be uploaded (${this._progress}%)`)
                    }
                }
                else {
                    const newMsg = {
                        content: msgContent,
                        createDate: new Date().valueOf(),
                        senderId: auth.currentUser.uid,
                        conversationId: this._activeConversation.conversationId,
                        file: ''
                    };
                    addDoc(messageRef, newMsg);
                    this.$inputChat.value = '';
                }
                
            }
        } 
        catch (err) {
              alert(err.message);
        }
    }

    setActiveConversation (conversation) {
        this._activeConversation = conversation;
    }

    render () {
        this.$container.appendChild(this.$inputChat);
        this.$container.appendChild(this.$sendBtn);
        this.$sendBtn.insertAdjacentHTML('beforeend',this.$sendIcon);
        this.$container.appendChild(this.$chooseFile);

        return this.$container;
    }
}

export default ChatInput;