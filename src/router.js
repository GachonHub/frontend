import {createWebHistory, createRouter} from "vue-router"

import Ranking from "./components/views/Ranking.vue";
import Profile from "./components/views/Profile.vue"
import Auth from "./components/views/Auth.vue"

import QuestionList from "./components/views/question/QuestionList.vue";
import QuestionView from "./components/views/question/QuestionView.vue";

import GroupList from "./components/views/group/GroupList.vue"
import GroupInfo from "./components/views/group/GroupInfo.vue"


import ContestList from "./components/views/contest/ContestList.vue"
import ContestView from "./components/views/contest/ContestView.vue"

import NoticeList from "./components/views/notice/NoticeList.vue"
import NoticeView from "./components/views/notice/NoticeView.vue"

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

    {path: '/groups/:type/:page', component: GroupList},
    {path: '/groups/:type/info/:id', component: GroupInfo},

    {path: "/question/:page", component: QuestionList},
    {path: "/question/id/:id", component: QuestionView},

    {path: "/contest/:page", component: ContestList},
    {path: "/contest/id/:id", component: ContestView},

    {path: "/notice/:page", component: NoticeList},
    {path: "/notice/id/:id", component: NoticeView},

    {path: "/inquiry/:page", component: InquiryList},
    {path: "/inquiry/id/:id", component: InquiryView},

    {path: "/test", component: Test}
  ]
})
export default router;
