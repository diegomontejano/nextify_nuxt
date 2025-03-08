<template>
  <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col">

    <h1 class="text-4xl font-bold">Nextify</h1>

    <button @click="increment" class="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
      Click here: {{ counter }}
    </button>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

function increment() {
  counter.value++
}
</script>