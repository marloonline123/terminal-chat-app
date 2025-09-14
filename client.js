const net = require("net");
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });
let name = '';

const connection = net.createConnection({
  port: 3000,
  host: "127.0.0.1",
});

async function writeMessage() {
    const message = await rl.question("write a message > ");
}

(async () => {
    if (!name) {
        name = await rl.question("What is your name? ");
        connection.write(JSON.stringify({
            name,
            type: 'enter'
        }))
    }
    
    connection.write(
      JSON.stringify({
        name,
        type: "enter",
        message
      })
    );
    connection.on("data", (chunk) => {
      console.log(chunk.toString("utf-8"));
    });
})()

