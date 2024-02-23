<script setup>
import { ref } from 'vue'

const counter = ref(0)
</script>

<template>
  <div class="about">
    <button class="bg-blue-500 hover:bg-blue-800 dark:text-white py-2 px-4 rounded-md" @click="counter++">Increase counter {{ counter }}</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

button {
  display: block;
  margin-bottom: 1em;
}
</style>
