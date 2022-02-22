<template>
    <div class="list_view">
        <Title title="공모전 ⚡"></Title>
        <div style="display: inline-block; margin-top:10px;">
            <span style="font-size:14px;">카테고리</span>
            <Category style="display:inline-block;" :items = "items"></Category>
        </div>
        <div class="search">
            <input id="search_text" class="form-control" type="text">
            <button type="button" class="form-control">검색</button>
            <button type="button" @click="modal = true" class="form-control">공모전 추가</button>
        </div>
        <hr>
        <ListComponent :items="apiRes.data" baseUri="contest" />
        <PostContest id="modal" v-if="modal" @close="modal = false" @save="create"></PostContest>
        <PageButton id="pg_bnt" :page="currentPage" :lastPage="currentPage" :baseUri="'/contest' + type"></PageButton>
    </div>
</template>

<script>
import ListComponent from '../../layout/ListComponent.vue'
import Title from '../../layout/common/Title.vue'
import Category from '../../layout/common/SecondaryCategory.vue'
import PageButton from '../../layout/common/PageButton.vue'
import PostContest from '../../layout/post/PostContest.vue'

import {getContestList, createContest} from "../../../api/ApiContest.js"

export default {
    components: {
        ListComponent,
        Title,
        Category,
        PageButton,
        PostContest
    },
    data() {
        return {
            apiRes : [],
            modal : false,
            // items: [
            //     {
            //         field: "정보보안",
            //         sympathy: 10,
            //         title: "리버싱 스터디",
            //         content: "리버싱 스터디 같이 하실 구합니다. 따로 자격요건은 없구요. 기초부터 배울 예정이니 많은 지원 바랍니다. 열심히 하실 분들만 신청해주세요.  교재는 이걸로 하고요. 진도는 매주 한단원씩 나갈 예정입니다. 모임은 주로 오프라인에서 할 ...",
            //         writer: "tearofglass",
            //         img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            //     },
            //     {
            //         field: "CTF",
            //         sympathy: 10,
            //         title: "CTF 스터디",
            //         content: "리버싱 스터디 같이 하실 구합니다. 따로 자격요건은 없구요. 기초부터 배울 예정이니 많은 지원 바랍니다. 열심히 하실 분들만 신청해주세요.  교재는 이걸로 하고요. 진도는 매주 한단원씩 나갈 예정입니다. 모임은 주로 오프라인에서 할 ...",
            //         writer: "tearofglass",
            //         img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            //     },
            // ]
            items: [
                {
                    num : 0,
                    val: "선택",
                    sub : [
                        {num : 1, val: "선택"},
                    ]
                },
                {
                    num : 6, 
                    val: "정보보안",
                    sub : [
                        {num : 1, val: "포렌식"},
                        {num : 2, val: "웹해킹"},
                        {num : 3, val: "리버싱"},
                        {num : 4, val: "포너블"},
                    ]
                },
                {
                    num : 7,
                        val : "개발",
                    sub : [
                        {num : 5, val: "spring"},
                        {num : 6, val: "django"},
                        {num : 7, val: "ios"},
                        {num : 8, val: "web"},
                        {num : 9, val: "android"}
                    ]
                }
            ]
        }

    },
    methods: {
        create(form, files) {
            createContest(form, files, "POST")
            .then(() => {
                this.$router.go();
            });
        }

    },
    created() {
        getContestList(this.$route.params.page)
        .then(res => {
            this.apiRes = res;
        })
    }
}
</script>

<style scoped>
.list_view {
    width: 1200px;
    margin: 0 auto;
}
.list_title {
    width: 1200px;
    height: 60px;
}
.list_title > a {
    font-size: 22px;
    font-weight: 700;

    position: relative;
    top: 19px;
    left: 20px;
}

.search {
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  float: right;
}

#search_text {
  border-radius: 20px;
  width: 200px;
}

.form-control {
  display: inline-block;
  width: 100px;
  font-size: 14px;
  margin-left: 5px;
}

hr {
    border: 0;
    background-color: #E5E5E5;
    height: 2px;
}

#modal {
  position: absolute;
  background-color:white;
  border: 1px solid black;
  z-index: 20;
  margin: auto;
  width: 100%;
  top: 100px;
  height: 630px;
}
</style>