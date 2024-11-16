<template>
  <div class="app-container">
    <header class="app-header">
      <div class="app-header-cards">
        <v-card class="money-card">
          1 уровень
        </v-card>
        <div class="rounds">
          <div class="round1">
          </div>
          <div class="round2">
          </div>
        </div>
      </div>
    </header>

    <section class="app-content">
      <h2>Древо любви растет 1 день</h2>
      <img class="sss123" src="/public/tree.png">
    </section>
      <Navigation/>
  </div>
</template>

<script setup>
import Navigation from "/src/components/Navigation.vue"
</script>

<style scoped>

.sss123 {
  transform: translateY(-20vh); /* Сдвиг влево */

}

img {
  height: 100vh;
}

.money-card {
  height: 5vh;
  width: 25vw;
}

.round1 {
  width: 7vh;
  height: 7vh;
  background-color: silver;
  border-radius: 50%;

}
.round2 {
  width: 7vh;
  height: 7vh;
  background-color: rgb(216, 216, 216);
  border-radius: 50%;
  transform: translateX(-2vh); /* Сдвиг влево */

}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  max-width: 375px; /* Размер под мини-приложение Telegram */
  margin: 0 auto;
  background-color: #f9f9f9; /* Светлый фон */
  padding-top: 5vh;
}

.rounds {
  display: flex;
}

/* Стили для заголовка */
.app-header {
  width: 100%;
  text-align: center;
  margin-bottom: 5vh;
}

.app-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

/* Основная секция с карточками */
.app-content {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  font-size: 0.9rem;
  color: #555;
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
