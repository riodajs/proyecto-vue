<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Name: {{ name }}</h3>
    <h3>Email: {{ email }}</h3>

    <ul>
      <li><router-link to="/counter">Contador</router-link></li>
      <li><router-link to="/taskslist">Lista de tareas</router-link></li>
      <li><router-link to="/register">Registro</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRegisterStore } from '../modules/register/stores/RegisterStore'
import { ref, watch } from 'vue'
const registerStore = useRegisterStore()

const name = ref(registerStore.name)
const email = ref(registerStore.email)

watch(registerStore, (newStore) => {
  name.value = newStore.name
  email.value = newStore.email
})
</script>

<style scoped>
.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>
