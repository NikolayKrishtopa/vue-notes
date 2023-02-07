<template lang="ru">
    <div class="notes-list">
    <h2 class="notes-list__title">{{notes.length>0 ?'Ваши заметки' : 'Заметок пока нет'}}</h2>
    <div class="notes-list__container">
      <note-item v-for="note in notes" :key="note.id" :note="note" @removeNote="removeNote"/>
    </div>
  </div>
</template>
<script>
import NoteItem from '@/components/NoteItem.vue'
export default {
  components: { NoteItem },
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeNote(id) {
      this.$emit('removeNote', id)
    },
  },
}
</script>
<style>
.notes-list {
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
}
.notes-list__container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  grid-template-rows: auto;
}
.notes-list__title {
  margin: 0;
}
</style>
