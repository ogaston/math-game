
export const Persistent = {

    set(key, value) {
        localStorage.setItem(key, value)
    },

    get(key) {
        return localStorage.getItem(key);
    }

}


export const Session = {

    set(key, value) {
        sessionStorage.setItem(key, value)
    },

    get(key) {
        return sessionStorage.getItem(key);
    }

}

export default {
    Persistent,
    Session
};