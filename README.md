# 🗨️ Node.js TCP Chat Room 🗨️

Welcome to our simple and fun real-time chat application, built entirely with **Node.js**! This project is a classic command-line chatroom where you can connect with multiple users over a network. It's a great example of how to use Node.js's core `net` module to handle TCP connections.

<div align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDBscjFjY3B4enY1NmZ6b245aWpzemd2c2t3N3o0ajN1eDR6Y3B2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRED2wY9m2a4uxW/giphy.gif" alt="Chatting GIF" width="300"/>
</div>

---

## ✨ Features

-   **💬 Real-time Messaging**: Chat with friends and colleagues instantly.
-   **👋 Custom Usernames**: Pick a name that represents you when you join.
-   **📢 Broadcast Notifications**: See who's coming and going with join/leave alerts.
-   **💻 Pure Node.js**: No external dependencies needed. It’s all handled by Node's built-in APIs.
-   **🎨 Minimalist Terminal Interface**: A clean, distraction-free chat experience right in your console.

---

## 🚀 Getting Started

Ready to start chatting? Here’s how you can get everything running in just a few minutes.

### ✅ Prerequisites

-   You'll need **[Node.js](https://nodejs.org/)** installed on your computer. To check if you have it, open a terminal and run:
    ```bash
    node --version
    ```

### ⚙️ Installation & Setup

1.  **Get the code:**
    Clone this repository or just download `server.js` and `client.js` to a new folder on your machine.
    ```bash
    git clone https://your-repository-link.git
    cd node-tcp-chat
    ```
2.  **Fire up the server:**
    Open a terminal window and launch the server. It will wait for clients to connect.
    ```bash
    node server.js
    ```
    You'll see a friendly message: `Server is running on PORT=3000`

    ```
       ┌──────────────────────────┐
       │   Server is listening!   │
       │     Port: 3000           │
       └──────────────────────────┘
                │
                │
    ┌───────────┴───────────┐
    │ Waiting for connections... │
    └────────────────────────┘
    ```

3.  **Join the chat as a client:**
    Open a **new** terminal for each person who wants to chat. In each new terminal, run:
    ```bash
    node client.js
    ```

---

## 🗣️ How to Use

1.  **Enter Your Name**: The first thing you'll be asked is for your name. Type it in and hit `Enter`.
2.  **Start Chatting**: Once you're in, type anything and press `Enter` to send a message to the group.
3.  **See the Conversation**: Messages from others will pop up in your terminal.
4.  **Leaving?**: Simply close the terminal window (`Ctrl+C`) to disconnect. Everyone else will be notified that you've left.

Have fun connecting and chatting! This project is a great starting point if you're looking to dive into network programming with Node.js. Happy coding! 🎉