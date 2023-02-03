<template>
  <div class="add-form">
    <h2 class="add-form__create-note-title">Создать заметку</h2>
    <input
      type="text"
      :value="newNoteTitle"
      @input="handleTitleChange"
      class="add-form__note-title"
      placeholder="Введите заголовок заметки..."
    />
    <textarea
      :value="newNoteText"
      class="add-form__note-text"
      @input="handleTextChange"
      cols="5"
      rows="5"
      placeholder="Введите текст заметки..."
    ></textarea>
    <button @click="addNote" class="add-form__add-btn">Добавить заметку</button>
  </div>
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
  data() {
    return {
      notes: [
        {
          id: 1,
          title: 'чем бы заняться сегодня',
          text: 'думаю стоит сходить с детьми на пляж, поиграть в машинки, а потом накидаться чачи как животное',
        },
        {
          id: 2,
          title: 'о пользе учебы',
          text: 'ты учишься, рвешь жопу, а на выходе получаешь соленого тунца и никто не хочет с тобой дружить. Лучше бы работал инженером за 100 тысяч',
        },
        {
          id: 3,
          title: 'может поехать покататься на лыжах',
          text: 'Сегодня решил, что надо бы сгонять в горы и покататься на лыжах. Обязательно так и сделаю, если буду идти по улице и найду 100 лар.',
        },
      ],
      newNoteText: '',
      newNoteTitle: '',
    }
  },
  methods: {
    addNote() {
      this.notes.push({
        id: Date.now(),
        title: this.newNoteTitle,
        text: this.newNoteText,
      })
      this.newNoteTitle = ''
      this.newNoteText = ''
    },
    handleTitleChange(e) {
      e.preventDefault()
      this.newNoteTitle = e.target.value
    },
    handleTextChange(e) {
      e.preventDefault()
      this.newNoteText = e.target.value
    },
  },
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
  padding: 5px 10px;
  border-radius: 5px;
}
.add-form__note-text {
  padding: 5px 10px;
  border-radius: 5px;
}
.add-form__add-btn {
  padding: 10px;
  background-color: lightgreen;
  border-radius: 5px;
  border: none;
}
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
