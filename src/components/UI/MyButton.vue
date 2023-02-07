<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  data() {
    return {
      name: 'my-button',
    }
  },
}
</script>
<style>
.my-button {
  padding: 10px;
  background-color: lightgreen;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50%;
}
.my-button:hover {
  opacity: 0.7;
}
</style>
