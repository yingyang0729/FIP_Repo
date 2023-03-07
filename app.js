const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

// socket.io server instance
// taken from socket.io documentation
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 5050;

//app.get is route handler

// tell express where to find static web files
app.use(express.static("public"));
// it is like genrating the request
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/contact', (req, res) => {
    // this is pointing index.htmk --> shared page
    res.sendFile(__dirname + '/views/contact.html');
});

app.get('/chat', (req, res) => {
    // this is pointing index.htmk --> shared page
    res.sendFile(__dirname + '/views/chat.html');
});

app.get('/firstlink', (req, res) => {
    // this is pointing index.htmk --> shared page
    res.sendFile(__dirname + '/views/firstlink.html');
});

app.get('/secondlink', (req, res) => {
    // this is pointing index.htmk --> shared page
    res.sendFile(__dirname + '/views/secondlink.html');
});

app.get('/thirdlink', (req, res) => {
    // this is pointing index.htmk --> shared page
    res.sendFile(__dirname + '/views/thirdlink.html');
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
});

// socket.io event handler
// taken from socket.io documentation
// this will run when a client connects and will log a message to the server console
io.on("connection", (socket) => {
    console.log("a user connected", socket);
    socket.emit("connected", { sID: socket.id, message: "new connection" });
    // listen for incoming messages from anyone connected to this socket chat service and ten see what that message is
    socket.on("chat_message", function (msg) {
        // step one = receive the message
        console.log(msg);
        // step two = send the message to everyone

        io.emit("new_message", { message: msg });
    });

    socket.on("typing", function (user) {
        console.log(user);
        io.emit("typing", user);
    });

    socket.on("stopTyping", function (user) {
        console.log(user);

        io.emit("stopTyping", { currentlytyping: user });
    });

    socket.emit("connected", { sID: socket.id, message: "new connection" });
    socket.on("typing", (data) => {
        socket.broadcast.emit("typing", data);
    });
});
