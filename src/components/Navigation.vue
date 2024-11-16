<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<template>
  <v-layout
    style="height: 60px; max-width:375px; "
  >
    <v-bottom-navigation
      active
    >
      <v-btn :to="({ name: 'TodoList' })">
        <v-icon>
          mdi-note-text-outline
        </v-icon>
      </v-btn>
      <v-btn :to="({ name: 'Main' })">
        <v-icon>
          mdi-tree-outline
        </v-icon>
      </v-btn>
      <v-btn :to="({ name: 'Calendar' })">
        <v-icon>
          mdi-calendar-heart
        </v-icon>
      </v-btn>
      <v-btn :to="({ name: 'Settings' })">
        <v-icon>
          mdi-account-multiple
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
