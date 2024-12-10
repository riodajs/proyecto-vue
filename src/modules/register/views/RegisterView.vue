<template>
  <div>
    <h1>Register Form</h1>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Nombre:</label>
        <Field type="text" name="name" id="name" placeholder="Ingrese su nombre" />
        <ErrorMessage name="name" />
      </div>
      <div class="form">
        <label for="email">Email</label>
        <Field type="email" name="email" id="email" placeholder="Ingrese su email" />
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
const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
