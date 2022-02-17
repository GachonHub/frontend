import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {createStore} from 'vuex';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const store = createStore({
    state () {
        return {
        count: 0
        }
    },
    mutations: {
        increment (state) {
        state.count++
        }
    }
})


const app = createApp(App)

app.use(router, store)
    .mount('#app')


