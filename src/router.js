import Vue from "vue";
import VueRouter from "vue-router";

import Ranking from "./components/views/Ranking.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: '/',component: Ranking}
    ]
})
export default router;