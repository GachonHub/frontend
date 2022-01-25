import Vue from "vue";
import VueRouter from "vue-router";

import Ranking from "./components/views/Ranking.vue"
import Profile from "./components/views/Profile.vue"
import Listview from "./components/views/ListView.vue"
import Chatting from "./components/views/Chatting.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: '/',component: Ranking},
        {path: '/profile',component: Profile},
        {path: '/listview', component: Listview},
        {path: '/chat',component: Chatting}
    ]
})
export default router;