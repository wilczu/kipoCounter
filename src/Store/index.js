import { createStore } from 'vuex';
import counterModule from './counterModule';
import seasonModule from './seasonsModule';
import linksModule from './linksModule';
import settingsModule from './settingsModule';

const store = createStore({
    modules: {
        counter: counterModule,
        seasons: seasonModule,
        links: linksModule,
        settings: settingsModule,
    }
});

export default store;