<template>
  <CreateNoteForm @createNote="addNote" />
  <NotesList :notes="notes" @removeNote="removeNote" />
</template>

<script>
import CreateNoteForm from '@/components/CreateNoteForm.vue'
import NotesList from './components/NotesList.vue'
export default {
  components: { CreateNoteForm, NotesList },
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
    }
  },
  methods: {
    addNote(note) {
      this.notes.push(note)
    },
    removeNote(noteId) {
      this.notes = this.notes.filter((n) => n.id !== noteId)
    },
  },
}
</script>

<style></style>
