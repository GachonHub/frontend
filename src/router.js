import Vue from "vue";
import VueRouter from "vue-router";

import Ranking from "./components/views/Ranking.vue"
import Profile from "./components/views/Profile.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: '/',component: Ranking},
        {path: '/profile',component: Profile}
    ]
})
export default router;