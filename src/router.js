import {createWebHistory, createRouter} from "vue-router"

import Ranking from "./components/views/Ranking.vue";
import Question from "./components/views/QuestionList.vue";
import QuestionView from "./components/views/QuestionView.vue";
import InquiryView from "./components/views/InquiryView.vue";
import Profile from "./components/views/Profile.vue"
import Listview from "./components/views/ListView.vue"
import Auth from "./components/views/Auth.vue"


import Test from "./components/views/Test.vue"
import WSM from "./components/views/WantedStudyMember.vue"

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes: [
    { path: "/", component: Ranking },
    {path: "/auth", component: Auth},
    {path: "/question", component: Question},
    {path: '/profile',component: Profile},
    {path: '/listview', component: Listview},
    {path: "/question/:page", component: Question},
    {path: "/question/id/:id", component: QuestionView},
    {path: "/inquiry/id/:id", component: InquiryView},
    {path: "/test", component: Test},
    {path: '/studymember', component: WSM}
  ]
})
export default router;
