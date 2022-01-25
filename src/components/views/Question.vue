<template>
  <div class="app">
    <div class="title">질문 게시판</div>
    <hr />
    <div class="category">
      <span>카테고리</span>
      <span
        ><select name="category">
          <option
            :value="index"
            v-for="(item, index) in items"
            v-bind:key="item"
          >
            {{ item }}
          </option>
        </select></span
      >
      <span
        ><select name="category2">
          <option value="item" v-for="item in items2[0]" v-bind:key="item">
            {{ item }}
          </option>
        </select></span
      >
    </div>
    <ListBox></ListBox>
  </div>
</template>

<script>
import ListBox from "../layout/ListBox.vue";

export default {
  name: "question",
  components: {
    ListBox,
  },
  data() {
    return {
      items: ["선택", "정보보안", "코딩"],
      items2: [["none"], ["리버싱", "포렌식"], ["c언어", "자바", "파이썬"]],
    };
  },
};
</script>

<style>
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
</style>
