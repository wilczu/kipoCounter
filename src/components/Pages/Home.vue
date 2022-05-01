<template>
  <div class="flex flex-col text-center justify-between h-screen text-pink-500 font-kipo bg-white dark:bg-gray-900">
    <main class="py-8 grid place-items-center h-full">
      <div>
        <Header title="Kipo and the age of wonderbeasts" />
        <Options />
        <Counter />       
      </div>     
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../Header';
import Options from '../Options';
import Counter from '../Counter';
import Footer from '../Footer';

export default {
  name: 'home-comp',
  components: {
    Header,
    Options,
    Counter,
    Footer,
  }
}
</script>