import Vue from "vue";
import VueRouter from "vue-router";

import Ranking from "./components/views/Ranking.vue";
import Question from "./components/views/QuestionList.vue";
import QuestionView from "./components/views/QuestionView.vue";
import InquiryView from "./components/views/InquiryView.vue";
import Profile from "./components/views/Profile.vue"
import Listview from "./components/views/ListView.vue"
import Auth from "./components/views/Auth.vue"

Vue.use(VueRouter);

const router = new VueRouter({

  mode: "history",
  routes: [
    { path: "/", component: Ranking },
    {path: "/auth", component: Auth},
    {path: "/question", component: Question},
    {path: '/profile',component: Profile},
    {path: '/listview', component: Listview},
    {path: "/question/:page", component: Question},
    {path: "/question/id/:id", component: QuestionView},
    {path: "/inquiry/id/:id", component: InquiryView}
    ]
})
export default router;
