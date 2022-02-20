<template>
    <div class="app">
        <Title title="모집중인 스터디 ⚡"></Title>
        <div style="display: inline-block; margin-top:10px;">
            <span style="font-size:14px;">카테고리 </span>
            <Category style="display:inline-block;" :items = "categoryList" :items2 = "categoryList2"></Category>
        </div>
        <div class="search">
            <input id="search_text" class="form-control" type="text">
            <button type="button" class="form-control">검색</button>
            <button type="button" @click="modal = true" class="form-control">스터디 추가</button>
        </div>
        <hr>
        <ListComponent v-for="item in items" v-bind:key="item" :data="item"/>
        <StudyInfo id = "modal" v-if="this.modal" @close="modal = false" title="스터디원 모집 글" isCategory="true" @save="createStudy"></StudyInfo>
        
    <PageButton id="pg_bnt" :page="currentPage" :lastPage="currentPage" baseUri="/question"></PageButton>
    </div>
</template>

<script>
import ListComponent from '../../layout/ListComponent.vue'
import Title from '../../layout/common/Title.vue'
import StudyInfo from "../../layout/post/StudyInfo.vue"
import PageButton from "../../layout/common/PageButton.vue"
import Category from "../../layout/common/SecondaryCategory.vue"

import {apiRequest} from "../../../api/ApiCommon.js"
import {apiDataRequest} from "../../../api/ApiCommon.js"

export default {
    components: {
        ListComponent,
        Title,
        StudyInfo,
        Category,
        PageButton
    },
    data() {
        return {
            categoryList: [
                {num : 0, val: "선택"},
                {num : 1 , val: "정보보안"},
                {num : 2 , val : "코딩"}
                ],
            categoryList2: [["선택"], ["리버싱", "포렌식", "전체"], ["c언어", "자바", "파이썬", "전체"]],
            currentPage: (!isNaN(this.$route.query.page)) ? this.$route.query.page : 1,
            modal: false,
            items: []
            // items: [
            //     {
            //         field: "정보보안",
            //         sympathy: 10,
            //         title: "리버싱 스터디",
            //         content: "리버싱 스터디 같이 하실 구합니다. 따로 자격요건은 없구요. 기초부터 배울 예정이니 많은 지원 바랍니다. 열심히 하실 분들만 신청해주세요.  교재는 이걸로 하고요. 진도는 매주 한단원씩 나갈 예정입니다. 모임은 주로 오프라인에서 할 ...",
            //         writer: "tearofglass",
            //         img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            //     }
            // ]
        }
    },
    methods : {
        readStuides: function() {
            apiRequest("GET", "/api/groups?type=STUDY&page=" + this.currentPage)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        },
        createStudy: function(form, image) {
            var data = new FormData();
            data.append('image', image[0]);
            data.append('name', form.name);
            data.append('field', form.field);
            data.append('people', form.people);
            data.append('repos', form.repos);
            data.append('type', "STUDY");

            console.log("dasdta : " + data);

            apiDataRequest("POST", "/api/groups", data, "form")
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    created() {
        this.readStuides();
    },
    watch() {
        this.readStuides();
    }
}
</script>

<style scoped>

.app {
    max-width: 1200px;
    margin: auto;
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

hr {
    border: 0;
    background-color: #E5E5E5;
    height: 2px;
}

.form-control {
  display: inline-block;
  width: 100px;
  font-size: 14px;
  margin-left: 5px;
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