<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuList = [
  {
    name: 'works',
    text: 'Works',
  },
  {
    name: 'blog',
    text: 'Blog',
  },
  {
    name: 'contact',
    text: 'Contact',
  },
]

const isMenuOpen = ref(false)
const asyncIsMenuOpen = ref(false)

const handleMenuClick = () => {
  if (isMenuOpen.value) {
    asyncIsMenuOpen.value = false
    setTimeout(() => {
      isMenuOpen.value = false
    }, 100)
  } else {
    isMenuOpen.value = true
    setTimeout(() => {
      asyncIsMenuOpen.value = true
    }, 100)
  }
}

const goto = (name: string) => {
  router.push(name)
}
</script>

<template>
  <nav text-black font-medium>
    <!-- PC Nav -->
    <div hidden sm:display-block>
      <ul flex justify-end items-center h-70px p-x-lg text-xl>
        <li
          v-for="item in menuList"
          :key="item.name"
          mx-1em
          list-none
          color-neutral-900
          font-bold
          hover:c-color-primary
          hover:cursor-pointer
          transition-200
          :class="{ 'c-color-primary': $route.name === item.name }"
          @click="goto(item.name)"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>

    <!-- Mobile Nav -->
    <div sm:hidden>
      <div flex justify-end items-center h-50px p-x-lg>
        <div
          flex
          flex-col
          justify-between
          w-18px
          h-11px
          color-neutral-900
          @click="handleMenuClick()"
        >
          <i
            w-18px
            h-1px
            bg-black
            transition-all-200
            :class="{
              'translate-y-5px': isMenuOpen,
              'rotate-45': asyncIsMenuOpen,
            }"
          ></i>
          <i
            w-18px
            h-1px
            bg-black
            transition-all-200
            :class="{
              'translate-y--5px': isMenuOpen,
              'rotate--45': asyncIsMenuOpen,
            }"
          ></i>
        </div>
      </div>
      <ul
        absolute
        z-1
        flex
        justify-between
        items-center
        w-100vw
        h-0px
        px-lg
        py-0
        text-base
        opacity-0
        overflow-hidden
        bg-white
        color-neutral-900
        transition-all-200
        :class="{
          'h-60px': isMenuOpen,
          'py-lg': isMenuOpen,
          'opacity-100': isMenuOpen,
        }"
      >
        <li
          v-for="item in menuList"
          :key="item.name"
          list-none
          :class="{ 'c-color-primary': $route.name === item.name }"
          @click="goto(item.name)"
        >
          {{ item.text }}
        </li>
      </ul>
      <div
        bg-black
        opacity-0
        transition-all-200
        class="mask"
        :class="{ 'opacity-50': isMenuOpen }"
      ></div>
    </div>
  </nav>
</template>

<style>
.mask {
  position: fixed;
  top: 110px;
  width: 100vw;
  height: calc(100vh - 110px);
}
</style>
