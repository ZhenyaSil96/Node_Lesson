const EventEmitter = require('events')

class Logger extends EventEmitter {  //Теперь для Logger доступны два метода on и emit
  log(message) {
    this.emit('message', `${message} ${Date.now()}`)
  }
}

// Экземпляр класса Logger
// loeggr.on 
// logger.emit
const logger = new Logger()

//Прослушиваем logger

logger.on('message', data => {
    console.log(data)
})

logger.log('Hello')
