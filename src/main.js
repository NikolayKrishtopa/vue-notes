import { createApp } from 'vue'
import App from './App.vue'
import MyButton from '@/components/UI/MyButton.vue'
import ModalWindow from '@/components/UI/ModalWindow.vue'

const app = createApp(App)

app.component('my-button', MyButton)
app.component('modal-window', ModalWindow)

app.mount('#app')
