<template>
    <v-card class="main-card">
      <v-card class="task-card">
      <v-card-text>
        Здесь будет текст задания...
      </v-card-text>
      <v-card class="actions-card">
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn fab color="red" @click="declineTask">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn fab color="green" @click="acceptTask">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    </v-card>
    <v-divider></v-divider>
    <v-card class="task-card">
      <v-card-text>
        Здесь будет текст другого задания...
      </v-card-text>
      <v-card class="confirm-card">
      <v-row align="center">
        <v-col>
          <v-btn color="primary" @click="confirmTask">Подтвердить</v-btn>
        </v-col>
        <v-col cols="auto" class="page-count">
          1/2
        </v-col>
      </v-row>
    </v-card>
    </v-card>


      <Navigation/>
    </v-card>
  </template>

<script setup>
import Navigation from "/src/components/Navigation.vue"

const declineTask = () => {
  console.log('Задание отклонено');
};

const acceptTask = () => {
  console.log('Задание принято');
};

const confirmTask = () => {
  console.log('Задание подтверждено');
};
</script>

<style scoped>


.task-card {
  margin-top: 20px;
}

.actions-card {
  background-color: #f0f0f0; /* Более темный цвет */
  margin-top: 10px;
  padding: 10px;
}

.confirm-card {
  background-color: #f0f0f0; /* Более темный цвет */
  margin-top: 10px;
  padding: 10px;
}

.page-count {
  font-size: 18px;
  font-weight: bold;
}
</style>
