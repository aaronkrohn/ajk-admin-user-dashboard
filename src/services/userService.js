import firebase from 'firebase';

export class UserService {

    static all() {
        return firebase.database()
            .ref('/users/')
            .once('value')
            .then(snapshot => snapshot.val());
    }

    static create() {
        return firebase.database()
            .ref('/users/')
            .push()
            .set(user)
    }

    static delete(uid) {
        return firebase.database()
            .ref('/users/' + uid)
            .remove();
    }
}
