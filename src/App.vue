<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import NavItem from './components/NavItem.vue'

// fuck y'all i am enabling this shit
document.documentElement.classList.add('dark');
</script>

<template>
  <header>
    <h1 class="dark:text-3xl font-bold underline">This website is heavily under construction...</h1>

    <h1 className="dark:text-3xl font-bold underline">Hello world!</h1>

    <NavBar>
      <NavItem href="/" isActive>Home</NavItem>
      <NavItem href="/about">About</NavItem>
    </NavBar>

  </header>

  <RouterView />
</template>