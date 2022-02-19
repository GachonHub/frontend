<template>
  <div class="app">
    <Title title="질문 게시판"></Title>
    <div style="display: inline-block; margin-top:10px;">
      <span style="font-size:14px;">카테고리 </span>
      <Category style="display:inline-block;" :items = "items" :items2 = "items2"></Category>
    </div>

    <div class="search">
      <input id="search_text" class="form-control" type="text">
      <button type="button" class="form-control">검색</button>
      <button type="button" @click="modal = true" class="form-control">글 작성하기</button>
    </div>

    <ListBox :items="apiRes.data" id="list"></ListBox>
    <PostQuestion id = "modal" v-if="modal" @close="modal = false"></PostQuestion>
    <PageButton id="pg_bnt" :page="currentPage" :lastPage="parseInt(apiRes.totalPages)" baseUri="/question"></PageButton>
    
  </div>
  
</template>

<script>
import ListBox from "../../layout/ListBox.vue";
import PostQuestion from "../../layout/post/PostQuestion.vue"
import Title from "../../layout/common/Title.vue"
import PageButton from "../../layout/common/PageButton.vue"
import Category from "../../layout/common/SecondaryCategory.vue"

import {apiGetRequest} from "../../../api/ApiCommon.js"

export default {
  name: "question",
  components: {
    ListBox,
    PostQuestion,
    Title,
    PageButton,
    Category
  },
    data() {
    return {
      main: "",
      sub: "",
      currentPage: (!isNaN(this.$route.query.page)) ? this.$route.query.page : 1,
      modal: false,
      item1Val: 0,
      items: [
        {num : 0, val: "선택"},
        {num : 1 , val: "정보보안"},
        {num : 2 , val : "코딩"}
        ],
      items2: [["선택"], ["리버싱", "포렌식", "전체"], ["c언어", "자바", "파이썬", "전체"]],
      apiRes : []
    };
  },
  methods : {
    mainF(item) {
      this.main = item;
      console.log(this.main);
    }, 
    subF(sub) {
      this.sub = sub;
      console.log(this.sub);
    }
  },
  created() {
    apiGetRequest("/api/posts/question?page=" + (parseInt(this.currentPage) - 1))
      .then(res => {
        /* eslint-disable no-console */
        this.apiRes = res.data;
    })
  }
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

.app {
  font-family: "Nanum Gothic", sans-serif;
  max-width: 1200px;
  margin: auto;
}

hr {
  margin: 0;
  border: 0;
  border-top: 1px solid #b2b2b2;
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

#pg_bnt {
  text-align: center;
  display: inline;
  margin-bottom: 10px;
  position: relative;
}

.form-control {
  display: inline-block;
  width: 100px;
  font-size: 14px;
  margin-left: 5px;
}

#list {
  margin-bottom: 20px;
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


</style>
