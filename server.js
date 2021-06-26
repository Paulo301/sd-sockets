const net = require("net");

const connectionListener = (socket) =>{
  socket.on("data", data => {
    const command = data.toString();

    // console.log(command);
    if(command === "NUMERO_ALEATORIO"){

      const valorAleatorio = Math.floor(Math.random() * 100) + 1;
      socket.write(valorAleatorio.toString());

    } else if(command === "FINALIZA"){
      socket.end();
    } else{
      socket.write("ERROR_404")
    }
  });

  socket.on("end", () => {
    console.log("Cliente desconectado");
  })
}

// 1 - Criar a conexão de rede

const server = net.createServer(connectionListener);

console.log("Teste");

// 2 - Executar em uma porta de rede

server.listen(3310, "127.0.0.1");

// 3 - Implementar o que deverá ser feito quando uma mensagem for recebida
