import axios from "axios";

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: {
                years: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                instance: null,
            },
            releaseDate: new Date("Jan 14, 2020"),
            currentTimeZone: localStorage.getItem('timeZone') === null ? null : localStorage.getItem('timeZone'),
            currentTime: null,
        }
    },
    getters: {
        getYears(state) {
            if(state.counter.years > 1) {
                return state.counter.years + ' years';
            }
            return state.counter.years + ' year';
        },
        getDHMS(state) {
            let txtSeconds = ' seconds ';
            let txtHours = ' hours ';
            let txtMinutes = ' minutes ';
            let txtDays = ' days ';

            if(state.counter.seconds == 1) {
                txtSeconds = ' second ';
            }
            if (state.counter.minutes == 1) {
                txtMinutes = ' minute ';
            } 
            if (state.counter.hours == 1) {
                txtHours = ' hour ';
            }
            if (state.counter.days == 1) {
                txtDays = ' day ';
            }
            return state.counter.days + txtDays + state.counter.hours + txtHours + state.counter.minutes + txtMinutes + state.counter.seconds + txtSeconds;
        },
        getCurrentTimeZone(state) {
            return state.currentTimeZone;
        }
    },
    mutations: {
        updateCounter(state) {
            let difference = state.currentTime - state.releaseDate.getTime();
            //Adding one second to time (only getting time from API once)
            state.currentTime += 1000;
            state.counter.days = Math.floor((difference/(1000*3600*24)));
            state.counter.years = Math.floor(state.counter.days/365);

            if(state.counter.days >= 365) {
                state.counter.days = Math.floor((difference/(1000*60*60*24)) - (state.counter.years*365));
            } 

            state.counter.hours = Math.floor((difference/(1000*3600)) % 24).toString().padStart(2, '0');
            state.counter.minutes = Math.floor((difference/1000/60) % 60).toString().padStart(2, '0');
            state.counter.seconds = Math.floor((difference/1000) % 60).toString().padStart(2, '0');
        },
        setInstance(state, payload) {
            state.counter.instance = payload;
        },
        clearTimerInterval(state) {
            clearInterval(state.counter.instance);
        },
        setReleaseDate(state, payload) {
            state.releaseDate = payload;
        },
        setTimeZone(state, payload) {
            state.currentTimeZone = payload;
            localStorage.setItem('timeZone', payload);
        },
        setCurrentTime(state, payload) {
            state.currentTime = new Date(payload).getTime();
        }
    },
    actions: {
        async requestCurrentTimeZone({commit}) {
            try {
                await axios.get('http://worldtimeapi.org/api/ip').then(response => {
                    commit('setTimeZone', response.data.timezone);
                })
            } catch (error) {
                console.log(error);
            }
        },
        async requestCurrentTime({commit, state}) {
            await axios.get(`http://worldtimeapi.org/api/timezone/${state.currentTimeZone}`).then(response => {
                let dataTime = response.data.datetime;
                commit('setCurrentTime', dataTime.substr(0, dataTime.indexOf('.')));
            })
        },
        async startCounter({commit, dispatch, state}) {
            if(state.currentTime == null) {
                await dispatch('requestCurrentTime');
                dispatch('startCounter');
            } else {
                if(state.counter.instance != null) {
                    dispatch('stopCounter');
                }
                commit('updateCounter');
                const interval = setInterval(() => {
                    commit('updateCounter');
                }, 1000);
                commit('setInstance', interval);
            }
        },
        stopCounter(context) {
            context.commit('clearTimerInterval');
        },
        updateTimerData(context, payload) {
            context.commit('clearTimerInterval');
            context.commit('setReleaseDate', payload);
            context.dispatch('startCounter');
        }
    }
}

export default counterModule;