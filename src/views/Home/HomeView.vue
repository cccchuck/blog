<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { Animate } from '@/utils'
import { onMounted } from 'vue'

const router = useRouter()

const animate = new Animate(['.intro', '.blogs'])

const posts = [
  {
    ID: 'p20220301001',
    title: '📚《被讨厌的勇气》读后感',
    time: '2022年03月01日',
    tags: ['读后感', '心理'],
    summary: '在这个世界上，有的人是被讨厌的，有的人是被喜欢的。',
  },
  {
    ID: 'p20220320002',
    title: '🚀《浅谈浏览器渲染全流程》',
    time: '2022年03月20日',
    tags: ['前端', '浏览器'],
    summary: '浏览器渲染是一个非常复杂的过程，我们需要了解浏览器渲染的全过程。',
  },
]

const handleToBlogs = () => {
  router.push('/blog')
}

onMounted(() => {
  animate.observe()
})
</script>

<template>
  <div
    mt-2rem
    text-center
    sm:flex
    sm:flex-row-reverse
    sm:items-center
    sm:max-w-1024px
    sm:mx-auto
    sm:mt-10rem
    class="intro"
  >
    <img
      class="avatar"
      src="@/assets/Profile.jpg"
      w-150px
      h-150px
      rd-30
      overflow-hidden
      object-cover
      vertical-btm
      color-rose-100
      sm:min-w-200px
      sm:h-200px
      sm:ml-5rem
    />

    <div px-2rem sm:text-left sm:pl-0>
      <h1 mt-2rem color-neutral-900 text-2rem font-bold>
        你好, 我是 Chuck, 欢迎来到我的博客
      </h1>
      <p color-neutral-700 mt-2rem text-base>
        我目前在郑州的一所大学读本科。我是一名前端开发工程师，同时也是一个开源爱好者。除了
        Coding 我还喜欢 Traveling, Reading...... 此外，我对于 Web3 和 BlockChain
        非常感兴趣，目前正在学习 Smart Contract 开发！
      </p>
      <button
        mt-2rem
        px-6
        py-2
        text-lg
        font-medium
        color-white
        c-bg-primary
        border-none
        border-rounded
        transition-300
        hover:cursor-pointer
        hover:shadow-2xl
        hover:translate-y--5px
      >
        Contact Me
      </button>
    </div>
  </div>

  <div c-bg-light-blue mt-2rem px-2rem pb-11 sm:mt-4rem class="blogs">
    <div sm:max-w-1024px sm:mx-auto>
      <p
        h-60px
        text-center
        lh-60px
        text-lg
        color-neutral-900
        sm:flex
        sm:justify-between
      >
        <span sm:text-xl sm:lh-60px>Recent Blogs</span>
        <a
          hidden
          color-blue-600
          hover:color-blue-800
          hover:cursor-pointer
          sm:display-block
          @click="handleToBlogs"
          >View all</a
        >
      </p>

      <div sm:flex>
        <div
          v-for="post in posts"
          :key="post.ID"
          sm:flex-1
          p-1rem
          mb-1rem
          bg-white
          border-rounded
          transition-all-300
          class="post-card sm:hover:shadow-2xl sm:hover:cursor-pointer"
        >
          <h3 class="text-5.5" color-neutral-900>{{ post.title }}</h3>
          <p text-sm mt-1rem color-neutral-500>
            {{ post.time }} | {{ post.tags.join(', ') }}
          </p>
          <p mt-1rem color-neutral-700>{{ post.summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.avatar {
  box-shadow: -5px 5px 2px 0 currentColor;
}

@media (min-width: 640px) {
  .post-card + .post-card {
    margin-left: 1rem;
  }
}
</style>
