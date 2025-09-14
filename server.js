const net = require('net');

const server = net.createServer();
const clients = [];

server.on('connection', (socket) => {
    const client = {
        id: clients.length + 1,
        socket,
    }
    clients.push(client);


    socket.on('data', (data) => {
        const parsedData = JSON.parse(data.toString('utf-8'))
        let message = '';
        // console.log(parsedData);
        if (parsedData.type === 'enter') {
            client.name = parsedData.name;
            message = `${parsedData.name} has enter the chat`;
        } else {
            message = `${parsedData.name} : ${parsedData.message}`
        }
        clients.forEach((c) => {
            c.socket.write(message)
        })
    });

    socket.on('error', (error) => {
        const message = `${client.name ?? "Unknown"} has left the Chat`;
        clients.splice(clients.indexOf(client), 1); // remove client
        clients.forEach((c) => c.socket.write(message));
    })

    socket.on("end", () => {
      const message = `${client.name ?? "Unknown"} has left the Chat`;
      clients.splice(clients.indexOf(client), 1); // remove client
      clients.forEach((c) => c.socket.write(message));
    });
});


server.listen(3000);
console.log(`Server is running on PORT=3000`);
