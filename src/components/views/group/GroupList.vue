<template>
    <div class="app">
        <Title :title="korType + '⚡'"></Title>
        <div style="display: inline-block; margin-top:10px;">
            <span style="font-size:14px;">카테고리 </span>
            <Category style="display:inline-block;" :items = "items" ></Category>
        </div>
        <div class="search">
            <input id="search_text" class="form-control" type="text">
            <button type="button" class="form-control">검색</button>
            <button type="button" @click="modal = true" class="form-control">{{korType}} 추가</button>
        </div>
        <hr>
        <ListComponent :items="apiRes.data" :baseUri="type"></ListComponent>
        <StudyInfo id = "modal" v-if="this.modal" @close="modal = false" :title="korType + '추가'" isCategory="true" @save="createGroup"></StudyInfo>
        
        <PageButton id="pg_bnt" :page="currentPage" :lastPage="apiRes.currentPage" :baseUri="'/' + type"></PageButton>
    </div>
</template>

<script>
import ListComponent from '../../layout/ListComponent.vue'
import Title from '../../layout/common/Title.vue'
import StudyInfo from "../../layout/post/StudyInfo.vue"
import PageButton from "../../layout/common/PageButton.vue"
import Category from "../../layout/common/SecondaryCategory.vue"

import {createGroup, getGroupList} from "../../../api/ApiGroups.js"


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
            type : "",
            korType : "",
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
            ],
            currentPage: (!isNaN(this.$route.params.page)) ? this.$route.params.page : 1,
            modal: false,
            apiRes : []
        }
    },
    methods : {
        createGroup(form, image) {
            createGroup(form, image, this.type)
            .then(res => {
                console.log(res);
            })
            .catch(() => {
                alert("err");
            })
        }
    },
    created() {
        this.type = this.$route.params.type;
        this.korType = (this.type == "study") ? "스터디" : "동아리";
        getGroupList(this.type.toUpperCase(), this.currentPage)
        .then(res => {
            this.apiRes = res.data;
        })
        .catch((err) => {
            console.log(err);
        })
    },
    watch:  {
        $route(to, from) {
            if (to != from) {
                this.type = this.$route.params.type;
                this.korType = (this.type == "study") ? "스터디" : "동아리";
                getGroupList(this.type.toUpperCase(), this.currentPage)
                .then(res => {
                    this.apiRes = res.data;
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        }

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