<template>
  <div class="get-firestore">
    <div v-for="todo in todos" :key="todo.id">
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.short }}</p>
    </div>
  </div>
</template>

<script setup>
/* import */
import { ref, onMounted } from 'vue';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase.js';

/* todos */
const todos = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'todos'));
  const arr = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    const todo = {
      id: doc.id,
      ...doc.data(),
    };
    arr.unshift(todo);
  });
  todos.value = [...arr];
});
</script>

<style scoped></style>
