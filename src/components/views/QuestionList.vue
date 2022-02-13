<template>
  <div class="app">
    <Title title="질문 게시판"></Title>
    <div class="category">
      <span>카테고리</span>
      <span id="category_span"><select class="form-select" id="category" @change="mainCategory()">
        <option
          :value="index"
          v-for="(item, index) in items"
          v-bind:key="item">
          {{ item.val }}
        </option>
      </select></span>
      <span id="category_span"><select class="form-select" id="category">
          <option value="item" v-for="item in items2[item1Val]" v-bind:key="item">
            {{ item }}
          </option>
      </select></span>
      <div class="search">
        <input id="search_text" class="form-control" type="text">
        <button type="button" class="form-control">검색</button>
        <button type="button" @click="modal = true" class="form-control">글 작성하기</button>
      </div>
    </div>

    <ListBox :items="apiRes.data" id="list"></ListBox>
    <CreatePost id = "modal" v-if="modal" @close="modal = false" title="질문 게시판" 
      isCategory="true" isSecret="true" isImage="true"></CreatePost>
    <PageButton id="pg_bnt" :page="currentPage" :lastPage="parseInt(apiRes.totalPages)" baseUri="/question"></PageButton>
    
  </div>
  
</template>

<script>
import ListBox from "../layout/ListBox.vue";
import CreatePost from "../layout/CreatePost.vue"
import Title from "../layout/common/Title.vue"
import PageButton from "../layout/PageButton.vue"

import {apiGetRequest} from "../../api/ApiCommon.js"

export default {
  name: "question",
  components: {
    ListBox,
    CreatePost,
    Title,
    PageButton
  },
    data() {
    return {
      currentPage: (!isNaN(this.$route.query.page)) ? this.$route.query.page : 1,
      modal: false,
      item1Val: 0,
      items: [
        {num : 0, val: "선택"},
        {num : 1 , val: "정보보안"},
        {num : 2 , val : "코딩"}
        ],
      items2: [["none"], ["리버싱", "포렌식"], ["c언어", "자바", "파이썬"]],
      apiRes : []
    };
  },
  methods : {
    mainCategory () {
      var s = document.getElementById("category");
      this.item1Val = s.options[s.selectedIndex].value;
    }
  },
  created() {
    apiGetRequest("/api/posts/question?page=" + (parseInt(this.currentPage) - 1))
      .then(res => {
        /* eslint-disable no-console */
        console.log(res.data);
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

.form-select {
  display: inline-block;
  font-size: 14px;
  width: 0px;
}

.category {
  margin-top: 10px;
  margin-bottom: 10px;
}

#category {
  font-size: 13px;
  width: 100px;
  height: 30px;
  text-align: center;
}

#modal {
  position: absolute;
  background-color:white;
  border: 1px solid black;
  z-index: 1;
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

#category_span {
  margin-left: 5px;
}


.search {
  float: right;
}

#search_text {
  border-radius: 20px;
  width: 200px;
}


</style>
