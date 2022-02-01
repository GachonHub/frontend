<template>
  <div class="app">
    <Title title="질문 게시판"></Title>
    <div class="category">
      <span>카테고리</span>
      <span id="category_span"><select id="category" @change="mainCategory()">
        <option
          :value="index"
          v-for="(item, index) in items"
          v-bind:key="item">
          {{ item.val }}
        </option>
      </select></span>
      <span id="category_span"><select id="category2">
          <option value="item" v-for="item in items2[item1Val]" v-bind:key="item">
            {{ item }}
          </option>
      </select></span>
      <div class="search">
        <input id="search_text" type="text">
        <button id="search_bnt">검색</button>
      </div>
    </div>
    <button id="show-modal" @click="modal = true">글 작성하기</button>
    <ListBox id="list"></ListBox>
    <CreatePost class="modal" v-if="modal" @close="modal = false" title="질문 게시글 작성"
      isCategory="true" isSecret="true"></CreatePost>
    <PageButton id="pg_bnt" :page="$route.params.page" :lastPage="lastPage" baseUri="/question"></PageButton>
  </div>
  
</template>

<script>
import ListBox from "../layout/ListBox.vue";
import CreatePost from "../layout/CreatePost.vue"
import Title from "../layout/common/Title.vue"
import PageButton from "../layout/PageButton.vue"

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
      lastPage: 3,
      modal: false,
      item1Val: 0,
      items: [
        {num : 0, val: "선택"},
        {num : 1 , val: "정보보안"},
        {num : 2 , val : "코딩"}
        ],
      items2: [["none"], ["리버싱", "포렌식"], ["c언어", "자바", "파이썬"]],
    };
  },
  methods : {
    mainCategory : function () {
      var s = document.getElementById("category");
      this.item1Val = s.options[s.selectedIndex].value;
    }
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

.category {
  margin-top: 10px;
  margin-bottom: 10px;
}

.modal {
  position: absolute;
  background-color:white;
  border: 1px solid black;
  z-index: 1;
  margin: auto;
  width: 100%;
  top: 100px;
  height: 630px;
}

#show-modal {
  position: fixed;
  right: 60px;
  bottom: 80px;
  padding: 3px;
  border-radius: 5px;
  background-color: #8EB094;
  color: white;
  border: none;
}

#list {
  margin-bottom: 20px;
}

#category_span {
  margin-left: 5px;
}

select {
  width: 70px;
  text-align: center;
}

#pg_bnt {
  text-align: center;
}

.search {
  float: right;
}

#search_text {
  border-radius: 20px;
  border: 1px solid black;
}

#search_bnt {
  margin-left: 10px;
  height: 20px;
}

</style>
