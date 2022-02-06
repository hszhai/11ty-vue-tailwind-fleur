<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="font-bold text-red-500 text-center text-3xl">
  <h1>Bonjour le monde</h1>


  <button type="button" @click="count++"
    class="flex rounded-lg mx-auto p-2 m-4 bg-yellow-500 
          text-gray-600 font-mono text-lg hover:bg-red-500
          shadow-lg"
  >
    You can count on me: {{ count }}
  </button>

  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
