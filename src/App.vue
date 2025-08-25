<template>
   <header class="flex py-10 px-5 justify-around items-center">
      <h1 class="font-medium text-3xl">Mattia Gemelli</h1>
      <ul class="hidden xl:flex xl:space-x-10">
         <li v-for="link in menuLinks" :key="link.name" class="text-2xl hover:underline hover:underline-offset-8 hover:text-gray-400">
            <a :href="link.href">{{ link.name }}</a>
         </li>
      </ul>
      <div class="relative xl:hidden">
         <span v-if="!dropDownMenuVisible" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
         </span>
         <span v-if="dropDownMenuVisible" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
         </span>
         <ul v-if="dropDownMenuVisible" data-aos="fade-down" class="absolute -left-33 z-10 p-5 bg-stone-50">
            <li v-for="link in menuLinks" :key="link.name" class="text-2xl hover:underline hover:underline-offset-8 hover:text-gray-400 my-3">
               <a :href="link.href">{{ link.name }}</a>
            </li>
         </ul>
      </div>
   </header>
   <RouterView/>
   <footer class="flex px-10 py-5 border-t-2 border-neutral-300 mt-20">
      <p class="text-sm text-neutral-600 flex-1">Copyright © 2025 Mattia Gemelli. All rights reserved.</p>
      <a href="#profile" class="rounded-full bg-neutral-500 p-1 text-white hover:scale-105">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
         </svg>
      </a>
   </footer>
</template>

<script setup>
import { ref } from 'vue'

const dropDownMenuVisible = ref(false)

const menuLinks = [
   { name: 'About', href: '#about' },
   { name: 'Experience', href: '#experience' },
   { name: 'Projects', href: '#projects' },
   { name: 'Contact', href: '#contact' },
]

function toggleMenu() {
   dropDownMenuVisible.value = !dropDownMenuVisible.value
}

</script>