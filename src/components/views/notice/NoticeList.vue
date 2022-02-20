<template>
  <div class="app">
    <Title title="공지사항"></Title>

    <div class="search">
      <input id="search_text" class="form-control" type="text">
      <button type="button" class="form-control">검색</button>
      <button v-if="role=='admin'" type="button" @click="modal = true" class="form-control">글 작성하기</button>
    </div>

    <ListBox :items="apiRes.data" id="list" baseUri="notice"></ListBox>
    <PostNotice id = "modal" v-if="modal" @close="modal = false" @save="create" title="공지사항 작성"></PostNotice>
    <PageButton id="pg_bnt" :page="currentPage" :lastPage="currentPage" baseUri="/notice"></PageButton>
    
  </div>
  
</template>

<script>
import ListBox from "../../layout/ListBox.vue";
import PostNotice from "../../layout/post/PostNotice.vue"
import Title from "../../layout/common/Title.vue"
import PageButton from "../../layout/common/PageButton.vue"

import {createNotice, readNoticeList} from "../../../api/ApiNotice.js"

export default {
  name: "question",
  components: {
    ListBox,
    PostNotice,
    Title,
    PageButton
  },
    data() {
    return {
      role: localStorage.getItem("role"),
      currentPage: (!isNaN(this.$route.params.page)) ? this.$route.params.page : 1,
      modal: false,
      apiRes : []
    }
  },
  methods: {
    create(form) {
      createNotice(form, "POST");
      this.modal = false;

    }
  },
  created() {
    readNoticeList(this.currentPage)
    .then(res => {
      this.apiRes = res;
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
