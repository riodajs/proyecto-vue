<template>
  <div>
    <h1>Register Form</h1>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Nombre:</label>
        <Field v-model="name" type="text" name="name" id="name" placeholder="Ingrese su nombre" />
        <ErrorMessage name="name" />
      </div>
      <div class="form">
        <label for="email">Email</label>
        <Field
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su email"
        />
        <ErrorMessage name="email" />
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema'
import { useRegisterStore } from '../stores/RegisterStore'
import { ref } from 'vue'

const name = ref('')
const email = ref('')

const registerStore = useRegisterStore()
const onSubmit = () => {
  registerStore.saveRegister(name.value, email.value)
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
