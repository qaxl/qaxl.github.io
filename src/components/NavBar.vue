<script setup lang="ts">
import { ref } from 'vue'
import PopUp from './PopUp.vue'

const modalRef: any = ref(null)

function openModal() {
  if (modalRef.value) {
    modalRef.value.isShowing = true
  }
}
</script>

<template>
  <div class="container mx-auto flex justify-between items-center bg-zinc-800 text-white">
    <nav class="text-sm font-medium space-x-4">
      <ul class="flex">
        <slot></slot>
      </ul>
    </nav>

    <p class="font-semibold">Qaxl's Personal Website</p>

    <div class="bg-black text-white flex items-center space-x-4">
      <!-- Hyperlinks -->
      <a
        href="https://github.com/qaxl"
        class="px-7 py-3 text-sm hover:underline flex items-center space-x-2"
        ><span>GitHub</span><img src="../assets/github-mark-white.svg" width="20" height="20"
      /></a>
      <button
        @click="openModal"
        class="px-7 py-3 text-sm hover:underline flex items-center space-x-2"
      >
        <span>Discord</span><img src="../assets/discord-mark-white.svg" width="20" height="20" />
      </button>
    </div>
  </div>

  <PopUp ref="modalRef">
    <h2 class="text-lg font-bold">Discord Contact Information</h2>
    <p>
      I see, you want to contact me with Discord. Discord doesn't provide any meaningful way to
      quickly add friends and contact other people, other than the obvious. <br />My Discord
      username is: <code class="bg-gray-500">@freepro</code>.
    </p>
  </PopUp>
</template>
