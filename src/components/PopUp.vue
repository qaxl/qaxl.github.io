<script setup>
import { ref } from 'vue'

const isShowing = ref(false)

function closeModal() {
  isShowing.value = false
}

defineExpose({
  isShowing,
  closeModal
})
</script>

<template>
  <div
    v-if="isShowing"
    class="fixed inset-0 bg-zinc-350 bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-black p-8 rounded shadow-lg">
      <!-- Modal content here -->
      <slot></slot>
      <!-- Close button -->
      <button
        @click="closeModal"
        class="mt-4 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700"
      >
        Close
      </button>
    </div>
  </div>
</template>
