import PubSub from 'pubsub-js';

export default class EventUtils {
    static register(idEvent, callback) {
        PubSub.subscribe(idEvent, callback);
    }

    static publish(idEvent, ...args) {
        PubSub.publish(idEvent, args);
    }
}
