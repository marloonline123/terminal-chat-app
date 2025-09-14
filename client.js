const net = require("net");
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });
let name = "";

const connection = net.createConnection({
  port: 3000,
  host: "127.0.0.1",
});

async function writeMessage() {
  const message = await rl.question("write a message > ");
  if (!message.trim()) {
    console.log("Message can not be empty.");
    return writeMessage();
  }
  connection.write(
    JSON.stringify({
      name,
      type: "chat",
      message,
    })
  );
  clearLine();
}

function clearLine() {
  output.moveCursor(0, -1);
  output.clearLine(0);
}

async function writeYourName() {
  name = await rl.question("What is your name? ");
  if (!name.trim()) {
    console.log("Message can not be empty.");
    return writeYourName();
  }
  connection.write(
    JSON.stringify({
      name,
      type: "enter",
    })
  );
  clearLine();
}

(async () => {
  if (!name) writeYourName();

  connection.on("data", async (chunk) => {
    output.cursorTo(0);
    output.clearLine(0);
    console.log(chunk.toString("utf-8"));
    writeMessage();
  });
})();
