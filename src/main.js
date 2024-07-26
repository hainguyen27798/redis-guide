import express from 'express';
import redisPubSub from './redis-pub-sub.service.js';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    redisPubSub.publish('send-mail', JSON.stringify({
        message: 'Hello World!',
        timestamp: Date.now(),
    })).then()
    res.json({
        message: 'Welcome to the App!'
    });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
