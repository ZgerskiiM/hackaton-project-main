<template>
            <v-card flat class="todo-list">
          <v-card-title>
            <h2>To-do list</h2>
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center">
              <v-date-picker v-model="date2" class="mr-4 mt-0" hide-header max-height="500"
                bg-color="transparent"></v-date-picker>

            </div>
            <v-list class="flex-grow-1">
                <v-list-item v-for="(task, index) in getTasksForCurrentDate()" :key="index">
                  <v-list-item-content>
                    <v-list-item-title class="d-flex align-center">
                      <div class="task-input-container">
                        <input type="text" v-model="task.text" class="task-input" @blur="stopEditing(task)"
                          @keypress.enter="stopEditing(task)" />
                        <v-checkbox v-model="task.completed" class="custom-checkbox"></v-checkbox>
                      </div>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            <v-btn @click="addTask" class="ml-2" color="primary" style="height: 100%;">+</v-btn>
          </v-card-text>
          <Navigation/>
        </v-card>
</template>


<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import Navigation from './Navigation.vue';



const date2 = ref(new Date(new Date().setHours(0, 0, 0, 0)));
const tasks = ref({});

function initializeTasks() {
  const dateKey = date2.value.toISOString().split('T')[0];
  if (!tasks.value[dateKey]) {
    tasks.value[dateKey] = [];
  }
}

initializeTasks();


function addTask() {
  const dateKey = date2.value.toISOString().split('T')[0];
  if (!tasks.value[dateKey]) {
    tasks.value[dateKey] = [];
  }

  tasks.value[dateKey].push({ text: '', completed: false });
}


watch(date2, (newDate) => {
  const dateKey = newDate.toISOString().split('T')[0];
  if (!tasks.value[dateKey]) {
    tasks.value[dateKey] = [];
  }
});


function getTasksForCurrentDate() {
  const dateKey = date2.value.toISOString().split('T')[0];
  return tasks.value[dateKey] || [];
}


const trackName = ref('Название трека');
const currentTime = ref(94);
const duration = ref(226);
const isPlaying = ref(false);

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function onSliderChange(value) {
  console.log('Slider changed:', value);
}

function onShuffle() {
  console.log('Shuffle clicked');
}

function onPrevious() {
  console.log('Previous clicked');
}

function onPlayPause() {
  isPlaying.value = !isPlaying.value;
  console.log('Play/Pause clicked');
}

function onNext() {
  console.log('Next clicked');
}

function onRepeat() {
  console.log('Repeat clicked');
}

const totalMinutes = ref(115);
const isRunning = ref(false);
const elapsedTime = ref(0);


const formattedTime = computed(() => {
  const totalSeconds = totalMinutes.value * 60 - elapsedTime.value;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours} час ${minutes} минут ${seconds} секунд`;
});


const isLoggedIn = ref(false);

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true';
});


function editTime() {
  const newTime = prompt("Введите новое время в минутах:", totalMinutes.value);
  if (newTime !== null && !isNaN(newTime)) {
    totalMinutes.value = parseInt(newTime);
    elapsedTime.value = 0;
  }
}


function startConcentration() {
  if (!isRunning.value) {
    isRunning.value = true;
    elapsedTime.value = 0;
    const interval = setInterval(() => {
      if (isRunning.value) {
        elapsedTime.value++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
}


function stopConcentration() {
  isRunning.value = false;
}

</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 50px;
  padding-top: 10px;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 0;
  margin: 0 0 0 20px;

}

.header-left {
  margin-left: 70px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-right: 18px;


}

.header-icon {
  font-size: 20px;
}

.header-card {
  padding: 3px 7px;
  border-radius: 10px;
  background-color: #f0f0f0;
}

.user-name {
  font-weight: bold;
}

.user-points {
  display: flex;
  align-items: center;
  gap: 4px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
  padding: 15px;
  width: 100%;
  max-width: 50vw;
  margin: 0 0 0 85px;
}

.page-title {
  padding: 0;
  margin: 0;
}

v-card {
  box-sizing: border-box;
  padding: 15px;
  background-color: #d8dadc;
}

.todo-list {
  width: 100vw;
  height: 100vh;
}

.todo-list,
.articles,
.achievement {
  border-radius: 20px;
}

.articles,
.achievement {
  height: 15vh;
}



.statistics,
.shorts {
  flex: 0 0 48.5%;
  border-radius: 20px;
  height: 20vh;
  background-color: #d5dae1;
}

.v-card-title {
  font-size: 14px;
  font-weight: 400;
}

.v-card-subtitle {
  font-size: 12px;
}

.todo-list {
  height: 100vh;
  background-color: #d6edd9;
}

.todo-list .v-card-text {
  display: flex;
  flex-direction: column;
}

.todo-list .d-flex {
  display: flex;
  flex-direction: row;
}

.todo-list .v-date-picker {
  flex-shrink: 0;
}

.todo-list .v-list {
  flex-grow: 1;
  overflow-y: auto;
  max-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.task-input-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.task-input {
  flex-grow: 1;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 10px;
}

.custom-checkbox {
  height: 50px;
  display: flex;
  align-items: center;
}

.v-list-item {
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 10px !important;
  padding: 7px;
  width: 80%;
  height: 50px;
}

.shorts {
  margin-left: 18px;
  background-color: #DCD0EF;
}

.v-list {
  background-color: transparent;
}

.audio-player {
  position: absolute;
  bottom: 15px;
  right: 50px;
  width: 850px;
  border-radius: 20px;
  padding: 15px;
  background-color: transparent;
}

.audio-player .v-card-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.audio-player .text-h6 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 7px;
}

.audio-player .v-slider {
  width: 100%;
  margin: 0 15px;
}

.audio-player .v-card-actions {
  display: flex;
  justify-content: center;
  gap: 7px;
}

img {
  width: 30vw;
  height: 70vh;
  padding-bottom: 40px;
}

.statistics {
  background-color: #DDEEFE;
}

.articles {
  background-color: #DCD0EF;
}

.achievement {
  background-color: #F6F0D8;
}

h1 {
  font-size: 32px;
  font-weight: 800;
}

#achiv-btn {
  background-color: #E9D16A;
  color: white;
  border-radius: 10px;
}

.header-card {
  padding: 10px;
  height: 60px;
  width: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f0f0f0;
}

.icon-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

#first-title {
  width: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header-element {
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  border-radius: 7px;
}

::-webkit-scrollbar {
  margin-left: 15px;
  width: 3px;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(0, 0, 0);
}

::-webkit-scrollbar-track {
  background-color: rgb(255, 255, 255);
}

.line-through {
  text-decoration: line-through;
}

.custom-checkbox {
  margin-right: 7px;
}

.custom-checkbox input[type="checkbox"]:checked+.v-input--selection-controls__input,
.custom-checkbox .v-input--selection-controls__input,
.custom-checkbox .v-input--selection-controls__input:checked {
  background-color: transparent;
}

.custom-checkbox input[type="checkbox"]:checked+.v-input--selection-controls__input {
  border: 2px solid #2196F3;
}

.custom-checkbox .v-input--selection-controls__input {
  border: 2px solid #ccc;
}

.task-input {
  flex-grow: 1;
  margin-right: 7px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 4px;
  height: 34px;
}
</style>
