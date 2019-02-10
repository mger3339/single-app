import Model from './model.js';
import View from './view.js';

export default {
    getHome() {
        View.render('home', [], 'results');
    },

    async getUsers() {
        let users =  await Model.users();
        View.render('users', users, 'results');
    },

    async getUser(id) {
        let user =  await Model.user(id);
        View.render('user', user, 'results');
    }
}