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
    <my-button @click="addNote">
      Добавить заметку<img class="add-form__add-icon" src="@/img/add.svg"
    /></my-button>
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
  width: 100%;
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
  box-sizing: border-box;
}
.add-form__note-text {
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
}
.add-form__add-icon {
  transform: scale(1.2);
  margin-left: 20px;
}
</style>
