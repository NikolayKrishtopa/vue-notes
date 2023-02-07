<template>
  <CreateNoteForm @createNote="addNote" />
  <NotesList :notes="notes" @removeNote="openConfirmModal" />
  <modal-window
    :isOpen="isConfirmModalOpen"
    @confirm="removeNote(this.noteToRemove), closeModal()"
    @closeModal="closeModal"
    >Вы уверены?</modal-window
  >
  <modal-window
    :isOpen="isAlertModalOpen"
    :confirmButtonText="'ОК'"
    @confirm="closeModal"
    @closeModal="closeModal"
    >Заполните все поля</modal-window
  >
</template>

<script>
import CreateNoteForm from '@/components/CreateNoteForm.vue'
import NotesList from './components/NotesList.vue'
export default {
  components: { CreateNoteForm, NotesList },
  data() {
    return {
      isConfirmModalOpen: false,
      isAlertModalOpen: false,
      notes: [],
    }
  },
  methods: {
    addNote(note) {
      if (note.title.length > 0 && note.text.length > 0) {
        this.notes.push(note)
      } else {
        this.isAlertModalOpen = true
      }
    },
    removeNote(noteId) {
      this.notes = this.notes.filter((n) => n.id !== noteId)
    },
    openConfirmModal(noteToRemove) {
      this.noteToRemove = noteToRemove
      this.isConfirmModalOpen = true
    },
    openAlertModal() {
      this.isAlertModalOpen = true
    },
    closeModal() {
      this.isConfirmModalOpen = false
      this.isAlertModalOpen = false
    },
  },
}
</script>

<style>
#app {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
