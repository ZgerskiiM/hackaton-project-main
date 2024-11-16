<template>
<v-card class="main-card">
  <Invite v-if="view"/>
  <div class="profile" v-else>
    <h1>Профиль</h1>
    <div class="round-for-photo"></div>
    <p>userName</p>
    <v-card class="w-66 h-55">
      <p>Баллый</p>
      <p>Идей</p>
    </v-card>
    <v-btn :to="({ name: 'Shop' })">Магазин</v-btn>
    <v-btn :to="({ name: 'Family' })">Семья</v-btn>

  </div>
  <v-btn
  @click="toggle">{{ view ? 'Настройки' : 'Вернуться к профилю' }}</v-btn>
</v-card>
<Navigation/>
</template>

<script setup>
import Invite from "./Invite.vue"
import Navigation from "./Navigation.vue"
import {ref} from 'vue'

const view = ref(false);

const toogle = () => {
  view.value = !view.value
}

</script>

<style scoped>
.main-card {
  height: 89vh;
  margin: 1vh;
  border-radius: 5vh;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.round-for-photo {
  width: 20vh;
  height:20vh;
  background-color: gray;
  border-radius: 50%;
}
</style>
