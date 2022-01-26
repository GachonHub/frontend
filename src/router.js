import Vue from "vue";
import VueRouter from "vue-router";

import Ranking from "./components/views/Ranking.vue";
import Question from "./components/views/Question.vue";
import Profile from "./components/views/Profile.vue"
import Listview from "./components/views/ListView.vue"

Vue.use(VueRouter);

const router = new VueRouter({

  mode: "history",
  routes: [
    { path: "/", component: Ranking },
    { path: "/question", component: Question },
        {path: '/profile',component: Profile},
        {path: '/listview', component: Listview}

    ]
})
export default router;
