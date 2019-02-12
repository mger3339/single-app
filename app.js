import Router from "./router.js";
(async () => {
    try {
        Router.init();
    } catch (e) {
        alert("Ошибка: " + e.message);
    }
})();