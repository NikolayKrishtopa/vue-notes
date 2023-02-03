<template lang="ru"> 
  <div class="note-item">
    <p class="note-item__title">{{ note.title }}</p>
    <p class="note-item__text">{{ note.text }}</p>
    <button class="note-item__remove-btn" @click="removeNote">X</button>
  </div>
</template>
<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeNote() {
      this.$emit('removeNote', this.note.id)
    },
  },
}
</script>
<style>
.note-item {
  border: 2px solid lightgreen;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}
.note-item__title {
  margin: 0;
  font-weight: bold;
  font-size: 1.1em;
}
.note-item__text {
  margin: 0;
  font-size: 1em;
}
.note-item__remove-btn {
  color: red;
  background-color: transparent;
  border: solid 1px red;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
