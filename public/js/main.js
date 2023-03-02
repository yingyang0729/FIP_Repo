// import will always go on top
import chatMsg from "./components/ChatMessage.js";
import UserTyping from "./components/Usertyping.js";

const socket = io();

// utility function for socket
function setUserID({ sID }) {
    vm.socketID = sID;
}

function showNewMessage({ message }) {
    message.time = new Date().toLocaleTimeString();
    vm.messages.push(message);
    console.log(message);
}

function handleUserTyping(user) {
    console.log("user is typing a message");
    vm.typing = user;
    vm.typist = user.id !== vm.socketID ? user.name + " is typing..." : " ";
    setTimeout(() => {
        vm.typist = " ";
    }, 3000);
}

//play audio once the messsage is reiceved
function beepAudio() {
    const audio = new Audio("./audio/mail_sent.mp3");
    audio.currentTime = 0;
    audio.pause();
    if (vm.messages) {
        audio.play();
    }
}

const { createApp } = Vue;

const vm = createApp({
    data() {
        return {
            socketID: "",
            message: "",
            messages: [],
            User: [],
            typing: "",
            nickname: "",
            typist: "",
            isHidden: false,
        };
    },

    methods: {
        // this is the method that will be called when the button is clicked
        dispatchMessage() {
            socket.emit("chat_message", {
                content: this.message,
                name: this.nickname || "anonymous",
                id: this.socketID,
            });

            this.message = "";
        },

        catchTextFocus() {
            //emit a typing event to the server
            console.log("focused");
            socket.emit("typing", {
                name: this.nickname || "anonymous",
                id: this.socketID,
            });
        },
    },

    components: {
        newmsg: chatMsg,
        usertyping: UserTyping,
    },
}).mount("#app");

socket.addEventListener("connected", setUserID);
socket.addEventListener("new_message", showNewMessage);
socket.addEventListener("typing", handleUserTyping);
socket.addEventListener("new_message", beepAudio);
