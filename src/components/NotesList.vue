<template lang="ru">
    <div class="notes-list">
    <h2 class="notes-list__title">Ваши заметки</h2>
    <div class="notes-list__container">
      <div class="note" v-for="note in notes" :key="note.id">
        <p class="note__title">{{ note.title }}</p>
        <p class="note__text">{{ note.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style>
.notes-list {
  margin: 0 auto;
  padding: 20px 0;
  width: 80%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.notes-list__container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.notes-list__title {
  margin: 0;
}
.note {
  border: 1px solid lightgreen;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.note__title {
  margin: 0;
  font-weight: bold;
  font-size: 1.1em;
}
.note__text {
  margin: 0;
  font-size: 1em;
}
</style>
