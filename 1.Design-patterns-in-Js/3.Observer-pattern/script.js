class YoutubeChannel {
    constructor() {
        this.subscribers = []
    }


    subscribe(user) {
        this.subscribers.push(user);
        user.update(`${user.name}, You have subscribed the channel`);
    }


    unsubscribe(user) {
        this.subscribers = this.subscribers.filter((sub) => sub != user);
        user.update(`${user.name}, you have unsubcribed`)
    }


    notify(message) {

        this.subscribers.forEach((sub) => {
            sub.update(message);
        })
    }
}


class User {
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(message);

    }
}


let Avanish = new YoutubeChannel();
let user1 = new User("Rahul");

Avanish.subscribe(user1);

Avanish.notify("Bhai log kal Bhandara hone wala hai, live jarur aaunga 2 bje")