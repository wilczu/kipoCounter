<template>
  <div class="flex flex-col text-center justify-between h-screen text-pink-500 font-kipo bg-white dark:bg-gray-900">
    <main class="py-8 grid place-items-center h-screen">
        <div>
            <Header title="Not found :c" />
            <goBack link="/" />
        </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';
import goBack from '../Button/goBack';

export default {
  name: 'links-comp',
  components: {
    Header,
    Footer,
    goBack,
  },
}
</script>