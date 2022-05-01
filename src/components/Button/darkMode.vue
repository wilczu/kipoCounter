<template>
<!-- Toggle B -->
<div class="flex items-center justify-center w-full mb-12">
  
  <label for="toggleB" class="flex items-center cursor-pointer">
    <div class="relative">
      <input type="checkbox" id="toggleB" class="sr-only" :checked="darkModeStatus === 'dark'" @click="toggleDarkMode" ref="rolesSelected">
      <div class="block bg-gray-300 dark:bg-gray-800 w-14 h-8 rounded-full"></div>
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
    <div class="ml-3 text-black dark:text-white font-medium transition-all">
      Switch darkMode on and off
    </div>
  </label>

</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'darkMode-comp',
    methods: {
      toggleDarkMode() {
        if(this.$refs.rolesSelected.checked) {
          this.$store.dispatch('settings/changeDarkMode', 'dark');
        } else {
          this.$store.dispatch('settings/changeDarkMode', '');
        }
        this.$toast.success('Dark mode changed', { position: 'top-right' });
      }
    },
    computed: {
      ...mapGetters({
        darkModeStatus: 'settings/darkModeStatus',
      })
    }
}
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>