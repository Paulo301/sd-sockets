const net = require("net");

const socket = net.Socket();

const clientConnect = () => {
  console.log("Conectando ao servidor");

  socket.on("data", (data) => {
    console.log("O comando enviado pelo servidor foi ", data.toString());
  });

  socket.write("NUMERO_ALEATORIO");

  socket.write("FINALIZA");
}

socket.connect(3310, "127.0.0.1", clientConnect);
// socket.connect(3310, "www.ecp.ufma.br", clientConnect);