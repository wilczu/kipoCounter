<template>
  <div class="flex flex-col text-center justify-between min-h-screen text-pink-500 font-kipo bg-white dark:bg-gray-900">
    <main class="py-8 container mx-auto">
      <Header title="Useful links" />
      <goBack link="/" />

      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 m-4" v-for="(link, index) in getAllLinks" :key="index">

        <div class="col-span-1 md:col-span-2 text-left">
          <h3 class="text-black dark:text-white">{{ link.category }}</h3>
        </div>

        <Link 
          v-for="(element, index) in link.content" 
          :key="index" 
          :title="element.title" 
          :url="element.url" 
        />

      </div>

    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../Header';
import Footer from '../Footer';
import goBack from '../Button/goBack';
import Link from '../Link';

export default {
  name: 'links-comp',
  components: {
    Header,
    Footer,
    goBack,
    Link,
  },
  computed: {
    ...mapGetters({
      getAllLinks: 'links/getAllLinks',
    })
  }
}
</script>