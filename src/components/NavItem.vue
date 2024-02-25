<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li>
    <RouterLink :to="href">
      <a
        v-if="(href == '/' && $route.name == 'home') || href.substring(1) == $route.name"
        class="block px-7 py-3 text-white bg-zinc-800 hover:underline"
      >
        <slot></slot>
      </a>
      <a v-else class="block px-7 py-3 text-white bg-zinc-950 hover:underline">
        <slot></slot>
      </a>
    </RouterLink>
  </li>
</template>
