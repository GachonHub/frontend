import {createWebHistory, createRouter} from "vue-router"

import Ranking from "./components/views/Ranking.vue";
import Profile from "./components/views/Profile.vue"
import Auth from "./components/views/Auth.vue"

import QuestionList from "./components/views/QuestionList.vue";
import QuestionView from "./components/views/QuestionView.vue";

import StudyList from "./components/views/study/StudyList.vue"
import StudyView from "./components/views/study/StudyView.vue"
import StudyInfo from "./components/views/study/StudyInfo.vue"


import CrewList from "./components/views/crew/CrewList.vue"
import CrewView from "./components/views/crew/CrewView.vue"
import CrewInfo from "./components/views/crew/CrewInfo.vue"

import ContestList from "./components/views/contest/ContestList.vue"
import ContestView from "./components/views/contest/ContestView.vue"

import NoticeList from "./components/views/notice/NoticeList.vue"

import InquiryList from "./components/views/inquiry/InquiryList.vue"
import InquiryView from "./components/views/inquiry/InquiryView.vue"


import Test from "./components/views/Test.vue"

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes: [
    {path: "/", component: Ranking },
    {path: "/auth", component: Auth},

    {path: '/profile/:id',component: Profile},

    {path: '/study/:page', component: StudyList},
    {path: '/study/id/:id', component: StudyView},
    {path: '/study/info/:id', component: StudyInfo},

    {path: '/crew/:page', component: CrewList},
    {path: '/crew/id/:id', component: CrewView},
    {path: '/crew/info/:name', component: CrewInfo},

    {path: "/question/:page", component: QuestionList},
    {path: "/question/id/:id", component: QuestionView},

    {path: "/contest/:page", component: ContestList},
    {path: "/contest/id/:id", component: ContestView},

    {path: "/notice/:page", component: NoticeList},

    {path: "/inquiry/:page", component: InquiryList},
    {path: "/inquiry/id/:id", component: InquiryView},

    {path: "/test", component: Test}
  ]
})
export default router;
