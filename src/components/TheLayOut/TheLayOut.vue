<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TheNavVue from '../TheNav/TheNav.vue'

const footerLinks = [
  {
    icon: 'i-mdi-github',
    link: 'https://github.com/cccchuck',
  },
  {
    icon: 'i-mdi-email',
    link: 'mailto:chuckgao68686@gmail.com',
  },
  {
    icon: 'i-mdi-sina-weibo',
    link: 'https://weibo.com/u/6633031158',
  },
  {
    icon: 'i-mdi-twitter',
    link: 'https://twitter.com/ChuckGao888',
  },
]
</script>

<template>
  <header>
    <TheNavVue />
  </header>
  <main>
    <RouterView />
  </main>
  <footer px-2rem py-4rem color-neutral-500>
    <div flex h-30px items-center justify-center>
      <a
        v-for="link in footerLinks"
        :key="link.link"
        :class="link.icon"
        :href="link.link"
        target="_blank"
        mx-1rem
        color-neutral-500
        transition-all-300
        class="text-1.875em lg:hover:translate-y--5px"
      ></a>
    </div>
    <p mt-2rem text-sm text-center>Copyright ChuckGao ©2022 All rights</p>
  </footer>
</template>
