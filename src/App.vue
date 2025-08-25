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
   <footer class="px-8 py-5 border-t-2 border-neutral-300 mt-20 md:flex md:justify-between md:items-center">
      <p class="text-xs text-center text-neutral-600 md:flex-1 md:text-sm md:text-start">Copyright © 2025 Mattia Gemelli. All rights reserved.</p>
      <a href="#profile" class="hidden md:block rounded-full text-neutral-500 hover:scale-105">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
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