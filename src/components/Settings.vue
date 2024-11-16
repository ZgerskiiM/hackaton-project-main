<template>
  <v-card class="main-card">
    <h1>Семья</h1>
    <div v-if="invite">
      Введите код приглашение
      <v-text-field v-model="fieldInput"></v-text-field>
      <v-btn @click="postUser">Подтвердить</v-btn>
    </div>
    <div v-else>
      Ваш код приглашения
      <v-text-field
      v-model="UnicKey"
      disabled>
      </v-text-field>
    </div>
    <v-btn
    @click="toggleInvite">{{ invite ? 'У меня есть код' : 'У меня нет кода' }}</v-btn>
    <Navigation/>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from "/src/components/Navigation.vue"
import axios from "axios";

const fieldInput = ref();
const invite = ref(true);
const UnicKey = 1234;

const toggleInvite = () => {
      invite.value = !invite.value;
}

const postUser = async () => {
  try {
    const response = await axios.post('/your-api-endpoint', {
      data: fieldInput.value
    });
    console.log('Ответ сервера:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
  }
}
</script>

<style scoped>
.main-card {
  height: 89vh;
  margin: 1vh;
  border-radius: 5vh;
}
</style>
