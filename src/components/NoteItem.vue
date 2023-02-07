<template lang="ru"> 
  <div class="note-item">
    <p class="note-item__title">{{ note.title }}</p>
    <p class="note-item__text">{{ note.text }}</p>
    <button class="note-item__remove-btn" @click="removeNote">
      <img src="../../src/img/remove.svg" class="note-item__remove-btn-icon"/>
    </button>
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
  width: 100%;
  box-sizing: border-box;
  flex: 0 0;
  height: 300px;
}
.note-item__title {
  margin: 0;
  width: 100%;
  font-weight: bold;
  font-size: 1.1em;
}
.note-item__text {
  width: 100%;
  margin: 0;
  font-size: 1em;
  max-width: 200px;
}
.note-item__remove-btn {
  color: red;
  background-color: transparent;
  border: none;
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
.note-item__remove-btn-icon {
  transform: scale(1.2);
}
</style>
