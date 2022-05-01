<template>
  <div class="flex flex-col text-center justify-between min-h-screen text-pink-500 font-kipo bg-white dark:bg-gray-900 transition-all">
    <main class="py-8 container mx-auto">
      <Header title="Settings" />
      <goBack link="/" />

      <section class="p-2 text-black dark:text-white transition-all">
        <h3>Dark mode:</h3>
        <div class="w-1/4 mx-auto mt-2">
          <darkMode name="dark-mode"/>
        </div>
      </section>

      <section class="p-2 text-pink text-2xl">
        <h3 class="text-black dark:text-white transition-all">Time zone:</h3>
        <h5>Current time zone: <span class="text-black dark:text-white transition-all">{{ currentTimeZone }}</span></h5>

        <Button title="Detect time zone" class="mt-2" @click="detectTimeZone"></Button>

      </section>

    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';
import goBack from '../Button/goBack';
import Button from '../Button';
import darkMode from '../Button/darkMode';
import { mapGetters } from 'vuex';

export default {
  name: 'settings-comp',
  components: {
    Header,
    Footer,
    goBack,
    darkMode,
    Button,
  },
  computed: {
    ...mapGetters({
      currentTimeZone: 'counter/getCurrentTimeZone',
    })
  },
  methods: {
    detectTimeZone() {
      this.$toast.info('Detecting current timezone...', { position: 'top-right' });
      this.$store.dispatch('counter/requestCurrentTimeZone').then( () => {
        this.$store.dispatch('counter/stopCounter');
        this.$store.dispatch('counter/requestCurrentTime');
      });
    }
  }
}
</script>