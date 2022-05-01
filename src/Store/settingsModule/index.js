const settingsModule = {
    namespaced: true,
    state() {
        return {
            darkMode: localStorage.getItem('darkMode') === 'dark' ? 'dark' : '',
        }
    },
    getters: {
        darkModeStatus(state) {
            return state.darkMode;
        },
        getCurrentTimeZone() {
            return localStorage.getItem('timeZone');
        },
    },
    mutations: {
        updateDarkMode(state, payload) {
            state.darkMode = payload;
        },
    },
    actions: {
        changeDarkMode(context, payload) {
            localStorage.setItem('darkMode', payload);
            context.commit('updateDarkMode', payload);
        },
    }
}

export default settingsModule;