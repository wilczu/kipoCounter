<template>
  <div class="flex flex-col text-center justify-between min-h-screen text-pink-500 font-kipo bg-white dark:bg-gray-900">
    <main class="py-8 container mx-auto">
      <Header title="Information" />
      <goBack link="/" />

      <article class="p-4 text-black dark:text-white">
        <h2 class="text-pink-500">What is it?</h2>
        <p class="text-2xl">
          This is a simple counter written in Vue.js. I wanted to play with time API and creating this timer was fun way of doing it. 
          The source code is on my Github page, check it out. Feel free to do pull requests if you think you can improve this code 
          and make it more efficient. <br />
          Anyway, it was fun project to make, hope you like it :) <br />

          My contact email: <a href="mailto:contact@gmail.com" class="text-pink-500 hover:underline">contact@wilchu.net</a>

        </p>
      </article>

      <article class="p-4 text-black dark:text-white">
        <h2 class="text-pink-500">Libraries and other things</h2>
        <ul class="text-center text-2xl">
          <li><a href="https://vuejs.org" class="hover:underline text-pink-500">Vue.js</a></li>
          <li><a href="https://github.com/axios/axios" class="hover:underline text-pink-500">Axios</a></li>
          <li><a href="https://vuex.vuejs.org" class="hover:underline text-pink-500">Vuex</a></li>
          <li><a href="https://github.com/MeForma/vue-toaster" class="hover:underline text-pink-500">vue-toaster</a></li>
          <li><a href="https://https://tailwindcss.com" class="hover:underline text-pink-500">TailwindCSS</a></li>
          <li><a href="https://www.docker.com text-pink-500" class="hover:underline">Docker</a> & <a href="https://docs.docker.com/compose/" class="hover:underline text-pink-500">docker-compose</a> (deployment)</li>
          <li>Html, CSS and JS (of course)</li>
        </ul>
      </article>

      <article class="p-4 text-black dark:text-white">
        <h2 class="text-pink-500">Using of cookies/data</h2>
        <p class="text-2xl">This page is only saving settings inside of localStorage of your browser. It is only saving following data:</p>
        <ul class="text-center text-2xl">
          <li>Dark mode settings</li>
          <li>Time zone</li>
        </ul>
      </article>

      <article class="p-4 text-black dark:text-white">
        <h2 class="text-pink-500">Font I've used</h2>
        <p class="text-2xl">
          I’m not sure if I can use this font. If you’re an author of this font please send me an email and I can remove it if necessary or I would be happy to put credits here. <br />
          <a href="https://www.reddit.com/r/KipoAndTheAgeOfWB/comments/etlerp/does_anyone_have_the_shows_font_style/" class="text-pink-500 hover:underline">Place where I found it</a>
        </p>
      </article>

    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';
import goBack from '../Button/goBack';

export default {
  name: 'info-comp',
  components: {
    Header,
    Footer,
    goBack,
  },
}
</script>