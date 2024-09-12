// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    console.log('Message: ', message.body);
    if (message.body === 'Hola' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Gracias por escribir a CGDesarrollos 👷')
        .then((result) => {
          console.log('Se envío mensaje automático.'); //return object success
        })
        .catch((erro) => {
          console.error('Hubo un error al enviar un mensaje.'); //return object error
        });
    }
  });
}
