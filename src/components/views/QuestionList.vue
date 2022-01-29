<template>
  <div class="app">
    <div class="title">질문 게시판</div>
    <hr />
    <div class="category">
      <span>카테고리</span>
      <span><select name="category">
        <option
          :value="index"
          v-for="(item, index) in items"
          v-bind:key="item" @onChange="mainCategory()">
          {{ item.val }}
        </option>
      </select></span>
      <span><select name="category2">
          <option value="item" v-for="item in items2[item1Val]" v-bind:key="item">
            {{ item }}
          </option>
      </select></span>
    </div>
    <button id="show-modal" @click="modal = true">글 작성하기</button>
    <ListBox id="list"></ListBox>
    <CreatePost class="modal" v-if="modal" @close="modal = false" title="질문 게시글 작성"
      isCategory="true" isSecret="true"></CreatePost>
  </div>
  
</template>

<script>
import ListBox from "../layout/ListBox.vue";
import CreatePost from "../layout/CreatePost.vue"

export default {
  name: "question",
  components: {
    ListBox,
    CreatePost
  },
    data() {
    return {
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
      var s = document.getElementByName("category");
      this.item1Val = s.options[s.selectedIndex].value;
      /* eslint-disable no-console */ 
      console.log(this.item1Val);
    }
  }

};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
/* 
.nanumgothic * {
  font-family: "Nanum Gothic", sans-serif;
} */

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
  top: 100px;
  height: 600px;
}

.app {
  font-family: "Nanum Gothic", sans-serif;
  max-width: 1200px;
  margin: auto;
}

.title {
  width: calc(100%-20px);
  height: 60px;

  text-align: left;
  font-size: 18px;
  font-weight: 700;
  line-height: 60px;
  padding-left: 20px;
}

#list {
  margin-bottom: 20px;
}
</style>
