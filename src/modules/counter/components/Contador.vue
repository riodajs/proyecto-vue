<template>
  <p>{{ contador }}</p>
  <div>
    <button @click="incrementar">Incrementar</button>
    <button @click="disminuir">Disminuir</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const contador = ref(0)

const incrementar = () => {
  contador.value++
}

const disminuir = () => {
  if (contador.value > 0) contador.value--
}
</script>

<style scoped>
p {
  color: red;
}
</style>
