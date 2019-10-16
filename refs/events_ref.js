const EventEmiter = require('events');

class Logger extends EventEmiter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger();

logger.on('message', data => {
    console.log('listen event message:', data);
});

logger.log('Hello');