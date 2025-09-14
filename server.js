const net = require('net');

const server = net.createServer();
const clients = [];

server.on('connection', (socket) => {
    clients.push({
      id: clients.length + 1,
      socket,
    });


    socket.on('data', (data) => {
        const parsedData = JSON.parse(data.toString('utf-8'))
        console.log(parsedData);
        clients.forEach((client) => {
            client.socket.write(`Hello ${parsedData.name}`)
        })
    });

    
});

server.listen(3000);
