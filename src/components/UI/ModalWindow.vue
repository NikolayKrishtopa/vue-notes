<template>
  <div class="modal" v-if="isOpen" @click.self="$emit('closeModal')">
    <div class="modal__content">
      <button class="modal__close-btn" @click="$emit('closeModal')">
        <img
          src="@/img/close.svg"
          alt="Кнопка закрытия модального окна."
          class="modal__close-btn-icon"
        />
      </button>
      <p class="modal__text"><slot></slot></p>
      <my-button class="modal__confirm-btn" @click="$emit('confirm')">{{
        confirmButtonText
      }}</my-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    confirmButtonText: {
      type: String,
      default: 'Подтвердить',
    },
  },
  data() {
    return {
      name: 'modal-window',
    }
  },
}
</script>
<style>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__content {
  position: relative;
  min-width: 300px;
  min-height: 100px;
  background-color: #fff;
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
}
.modal__close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: red;
}
.modal__text {
  padding: 0;
  margin: 0 0 30px 0;
  max-width: 90%;
  font-size: 22px;
  font-style: normal;
  font-weight: bold;
  text-align: center;
}
.modal__close-btn-icon {
  transform: scale(1.5);
}
@media (max-width: 480px) {
  .modal__content {
    min-width: 200px;
  }
}
</style>
