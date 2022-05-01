<template>
  <div :class="darkMode">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapGetters({
      darkMode: 'settings/darkModeStatus',
    })
  },
}
</script>

<style>
  h1 { @apply text-5xl md:text-8xl !important; }
  h2 { @apply text-4xl md:text-6xl !important; }
  h3 { @apply text-3xl md:text-5xl !important; }
  h4 { @apply text-2xl md:text-4xl !important; }
</style>