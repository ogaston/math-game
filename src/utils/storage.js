
const Persistent = {

    set(key, value) {
        localStorage.setItem(key, value)
    },

    get(key) {
        return localStorage.getItem(key);
    }

}


const Session = {

    set(key, value) {
        sessionStorage.setItem(key, value)
    },

    get(key) {
        return sessionStorage.getItem(key);
    }

}

export {
    Persistent,
    Session
};