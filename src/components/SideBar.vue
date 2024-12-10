<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
      <li><router-link to="/counter">Contador</router-link></li>
      <li><router-link to="/taskslist">Lista de tareas</router-link></li>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>
