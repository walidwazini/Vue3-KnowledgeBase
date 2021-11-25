import { createApp } from 'vue'
import App from './App.vue'
import ActiveElement from './components/ActiveElement.vue'
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'

const app = createApp(App)

app.component('active-user', ActiveUser);
app.component('user-data', UserData)
app.component('active-element', ActiveElement)
app.component('hello-world')

app.mount('#app')