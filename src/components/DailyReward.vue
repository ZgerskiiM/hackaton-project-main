<template>
    <div class="app-container">
      <div class="daily-reward">
    <div class="reward-container">
      <div class="reward-title">Ежедневная награда</div>
      <div class="rewards-grid">
        <div
          v-for="day in 12"
          :key="day"
          :class="['reward-box', { 'current': day === currentDay }]"
        >
          <div class="reward-day">День {{ day }}</div>
          <div class="reward-amount">+{{ rewards[day-1] }}</div>
        </div>
      </div>
    </div>
    <v-btn class="continue-button" :to="({ name: 'Main' })">Продолжить</v-btn>
  </div>
    </div>
  </template>

  <script setup>
  import {ref} from 'vue';

  const currentDay = ref(1)
const rewards = ref([100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 1000])

  </script>

  <style scoped>
  .daily-reward {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
}

.reward-container {
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  text-align: center;
  margin-bottom: 20px;
  width: 90%;
  max-width: 800px;
}

.reward-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.rewards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vh;
}

.reward-box {
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  height: 10vh;
  width: 14vw;
}

.reward-box.current {
  background-color: #e3f2fd;
  border: 2px solid #2196f3;
  transform: scale(1.05);
}

.reward-day {
  font-size: 2vh;
  color: #666;
}



.reward-amount {
  font-size: 12px;
  color: #4CAF50;
  font-weight: bold;
}

.continue-button {
  background-color: #4CAF50;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
}

.continue-button:hover {
  background-color: #45a049;
}
  </style>
