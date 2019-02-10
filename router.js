import Controller from './controller.js';

function getRouteInfo() {
    const hash = location.hash ? location.hash.slice(1) : '';
    const [name, id] = hash.split('/');

    return { name, params: { id } }
}

function handleHash() {
    const { name, params } = getRouteInfo();

    if(params.id) {
        const routeName = `get${capitalizeFirstLetter(name)}`;
        Controller[routeName](params.id);
    } else {
        let routeName;
        if (name) {
            routeName = `get${capitalizeFirstLetter(name)}`;
        } else {
            routeName = "getHome";
        }
        Controller[routeName]();
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default {
    init() {
        addEventListener('hashchange', handleHash);
        handleHash();
    }
}