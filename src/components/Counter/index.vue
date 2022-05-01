<template>
    <div>
        <h3 class="text-black dark:text-white">Is with us for:</h3>
        <h3>{{ getYears }}</h3>
        <h4 class="mt-1">{{ getDHMS }}</h4>   
    </div>
    <div class="mt-3">
        <h4><span class="text-black dark:text-white">Release date:</span> <span class="underline">{{ releaseDate }}</span></h4> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'counter-comp',
    computed: {
        ...mapGetters({
            getYears: 'counter/getYears',
            getDHMS: 'counter/getDHMS',
            releaseDate: 'seasons/releaseDate'
        })
    },
    methods: {
        convertToDate(dateString) {
            let d = dateString.split("/");
            let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
            return dat;     
        }
    },
    watch: {
        releaseDate() {
            this.$store.dispatch('counter/updateTimerData', this.convertToDate(this.releaseDate) )
        }
    },
    mounted() {
        if(localStorage.getItem('timeZone') === null) {
            this.$store.dispatch('counter/requestCurrentTimeZone').then(
                () => { this.$store.dispatch('counter/startCounter') }
            );   
        } else {
            this.$store.dispatch('counter/startCounter');
        }
    }
}
</script>