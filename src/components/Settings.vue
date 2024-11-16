<template>
    <v-card class="main-card">
        <h1>Семья</h1>
        Введите код приглашение
        <v-text-field
        class="fieldInput"></v-text-field>
        <v-btn
        @click="postUser">Подтвердить</v-btn>
        <Navigation/>
    </v-card>
  </template>

  <script setup>
  import Navigation from "/src/components/Navigation.vue"
  import Axios from "axios";

  const postUser = async () => {
    axios.post(fieldInput.value)
  }
  </script>

  <style scoped>
  .main-card {
    height: 89vh;
    margin:1vh;
    border-radius: 5vh;
  }

  </style>
