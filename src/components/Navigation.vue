<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<template>
  <v-layout
    style="height: 56px; max-width:375px; "
  >
    <v-bottom-navigation
      color="black"
      active
    >
      <v-btn :to="({ name: 'TodoList' })">
        <v-icon>
          mdi-home-heart
        </v-icon>
        Задачи
      </v-btn>
      <v-btn :to="({ name: 'Main' })">
        <v-icon>
          mdi-home-heart
        </v-icon>
        Главная
      </v-btn>
      <v-btn :to="({ name: 'TodoList' })">
        <v-icon>
          mdi-home-heart
        </v-icon>
        TodoList
      </v-btn>
      <v-btn :to="({ name: 'Settings' })">
        <v-icon>
          mdi-home-heart
        </v-icon>
        Семья
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
