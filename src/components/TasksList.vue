<template>
  <div>
    <h2>Tasks</h2>
    <input type="text" v-model="newTask" @keyup.enter="addTask" />
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="deleteTask(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tasks = ref([])
const newTask = ref('')
const addTask = () => {
  tasks.value.push(newTask.value)
  newTask.value = ''
}
const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>

<style scoped></style>
