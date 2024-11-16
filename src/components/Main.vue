<template>
  <div class="app-container">
    <header class="app-header">
      <h1 class="app-title">Дерево любви</h1>
      <div class="app-header-cards">
        <v-card class="money-card">
          1 уровень
        </v-card>
        <v-card class="level-card">
          5000 золота
        </v-card>
      </div>
    </header>

    <section class="app-content">
      <div v-for="item in items" :key="item.id" class="card">
        <h2 class="card-title">{{ item.name }}</h2>
        <p class="card-description">{{ item.description }}</p>
        <button class="card-button" @click="handleAction(item.id)">Подробнее</button>
      </div>
    </section>
      <Navigation/>
  </div>
</template>

<script setup>
import Navigation from "/src/components/Navigation.vue"


</script>

<style scoped>
/* Основные стили для контейнера */
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 10px;
  max-width: 375px; /* Размер под мини-приложение Telegram */
  margin: 0 auto;
  background-color: #f9f9f9; /* Светлый фон */
}

/* Стили для заголовка */
.app-header {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.app-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

/* Основная секция с карточками */
.app-content {
  flex: 1;
  width: 100%;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 15px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 15px;
}

.card-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
}

.card-button:hover {
  background-color: #0056b3;
}

.app-header-cards{
  display: flex;
  justify-content: space-between;
  padding: 2vw;
}

</style>
