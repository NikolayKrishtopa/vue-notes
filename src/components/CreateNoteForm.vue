<template>
  <div class="add-form">
    <h2 class="add-form__create-note-title">Создать заметку</h2>
    <input
      type="text"
      v-model="newNoteTitle"
      class="add-form__note-title"
      placeholder="Введите заголовок заметки..."
    />
    <textarea
      v-model="newNoteText"
      class="add-form__note-text"
      cols="5"
      rows="5"
      placeholder="Введите текст заметки..."
    ></textarea>
    <button @click="addNote" class="add-form__add-btn">Добавить заметку</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNoteText: '',
      newNoteTitle: '',
    }
  },
  methods: {
    addNote() {
      const note = {
        id: Date.now(),
        title: this.newNoteTitle,
        text: this.newNoteText,
      }
      this.$emit('createNote', note)
      this.newNoteTitle = ''
      this.newNoteText = ''
    },
  },
  props: {},
}
</script>

<style>
.add-form {
  margin: 15px auto 0;
  max-width: 1200px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.add-form__create-note-title {
  margin: 0;
  padding: 0;
}
.add-form__note-title {
  padding: 10px;
  border-radius: 5px;
}
.add-form__note-text {
  padding: 10px;
  border-radius: 5px;
}
.add-form__add-btn {
  padding: 10px;
  background-color: lightgreen;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.add-form__add-btn:hover {
  opacity: 0.7;
}
</style>
