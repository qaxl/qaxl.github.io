<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NavItem from './components/NavItem.vue'
</script>

<template>
  <header>
    <NavBar>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/projects">Projects</NavItem>
    </NavBar>
  </header>

  <main>
    <div class="fixed bottom-0 left-0 right-0 bg-red-400 p-4 flex items-center justify-center z-50">
      <div class="flex items-center space-x-3">
        <!-- Warning Icon -->
        <img src="./assets/warning-sign-svgrepo-com.svg" width="20" height="20" />
        <!-- Title and Text -->
        <div>
          <p class="text-lg font-bold text-red-800">This website is under construction.</p>
          <p class="text-red-800">
            The portfolio provides the most necessary information about me. However, it doesn't work
            at all with mobile devices and may sometimes provide outdated information.
          </p>
        </div>
      </div>
    </div>
  </main>

  <RouterView />
</template>
