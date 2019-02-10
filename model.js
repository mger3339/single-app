import Config from './config.js'

export default {
    async callApi(method) {
        let apiCall = await fetch(method);

        return apiCall.json();
    },

    users() {
        return this.callApi("https://api.github.com/users");
    },

    user(id) {
        return this.callApi(`https://api.github.com/users/${id}?client_id=${Config.clientId}&client_secret=${Config.clientSecret}`);
    }
}