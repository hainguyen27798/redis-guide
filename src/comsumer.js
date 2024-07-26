import redisPubSub from './redis-pub-sub.service.js';

redisPubSub.subscribe('send-mail', (msg) => {
    console.log(msg);
});
