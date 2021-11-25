import { createApp } from 'vue'
import App from './App.vue'
import ActiveElement from './components/ActiveElement.vue'

const app = createApp(App)

app.component('active-element', ActiveElement)
app.component('hello-world')

app.mount('#app')