<template>
    <div class="text-black dark:text-white">
        <div class="flex justify-center">
            <div v-if="!arrows.disableLeft" class="inline-flex items-center hover:-translate-x-2 transition-all cursor-pointer" @click="previousSeason">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>         
            </div>
            <div class="px-5"><h2>Season {{ currentSeason }}</h2></div>
            <div v-if="!arrows.disableRight" class="inline-flex items-center hover:translate-x-2 transition-all cursor-pointer" @click="nextSeason">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'select-comp',
    data() {
        return {
            arrows: {
                disableLeft: true,
                disableRight: false,
            }
        }
    },
    computed: {
        ...mapGetters({
            numberOfSeasons: 'seasons/numberOfSeasons',
            currentSeason: 'seasons/currentSeason'
        })
    },
    watch: {
        currentSeason() {
            if(this.currentSeason == 1) {
                this.arrows.disableLeft = true;              
            } else if (this.currentSeason == this.numberOfSeasons) {
                this.arrows.disableRight = true;   
            } else {
                this.arrows.disableRight = false;
                this.arrows.disableLeft = false; 
            }
        }
    },
    methods: {
        nextSeason() {
            this.$store.dispatch('seasons/nextSeason');
        },
        previousSeason() {
            this.$store.dispatch('seasons/previousSeason');
        }
    }
}
</script>