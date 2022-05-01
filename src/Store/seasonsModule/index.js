const seasonModule = {
    namespaced: true,
    state() {
        return {
            currentSeason: 1,
            seasons: {
                1: '14/01/2020',
                2: '12/06/2020',
                3: '12/10/2020',
            }
        }
    },
    getters: {
        currentSeason(state) {
            return state.currentSeason;
        },
        releaseDate(state) {
            return state.seasons[state.currentSeason];
        },
        //Do we need it?
        numberOfSeasons(state) {
            return Object.keys(state.seasons).length;
        }
    },
    mutations: {
        increaseSeason(state) {
            state.currentSeason++;
        },
        decreaseSeason(state) {
            state.currentSeason--;
        }
    },
    actions: {
        nextSeason(context) {
            context.commit('increaseSeason');
        },
        previousSeason(context) {
            context.commit('decreaseSeason')
        }
    }
}

export default seasonModule;