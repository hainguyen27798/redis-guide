import Redis from 'ioredis';

export class RedisPubSubService {
    constructor() {
        this.publisher = Redis.createClient(63780, '127.0.0.1');
        this.subcriber = Redis.createClient(63780, '127.0.0.1');
    }

    publish(channel, message) {
        return new Promise((resolve, reject) => {
            this.publisher.publish(channel, message, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    subscribe(channel, callback) {
        this.subcriber.subscribe(channel);
        this.subcriber.on("message", (subscribeChanel, message) => {
            if (subscribeChanel === channel) {
                callback(JSON.parse(message));
            }
        });
    }
}

export default new RedisPubSubService();
