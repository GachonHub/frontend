<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">질문글 작성</div>
                <form>
                    <div class="form-data">
                        <label for="f-title" class="form-head">제목</label>
                        <input type="text" id="f-title" v-model="form.title" class="form-control form-content" :placeholder="updateItem.title"/><br>
                    </div>
                    <div class="form-data">
                        <label for="" class="form-head">카테고리</label>
                        <Category class="form-content" v-model="form.category" :items = "items" :items2 = "items2" ></Category>
                    </div>
                    <div class="form-data">
                        <label for="content" class="form-head" style="height: 200px">내용</label>
                        <input type="text" id="content" v-model="form.content" class="form-control form-content" :placeholder="updateItem.content" /><br>
                    </div>
                    <div class="form-data">
                        <label for="image" class="form-head">이미지</label>
                        <input type="file" id="image" class="form-control form-content"><br>
                    </div>
                </form>
                <div class="form-button">
                    <button class="form-control" id="custom-bnt" @click="$emit('close')">취소</button>
                    <button class="form-control" id="custom-bnt" @click="check">작성</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Category from "../common/SecondaryCategory.vue"
import {apiDataRequest} from "../../../api/ApiCommon.js"

export default {
  name: "post-creation",
  components: {
      Category
  },
  props: {
        updateItem : Object
  },
  data() {
    return {
      items: [
        {num : 0, val: "선택"},
        {num : 1 , val: "정보보안"},
        {num : 2 , val : "코딩"}
        ],
      items2: [["none"], ["리버싱", "포렌식"], ["c언어", "자바", "파이썬"]],
    };
  },
  methods : {
      check() {
          const file = document.getElementById("image").files;
          this.$emit('save', this.form, file);
          const rm = new FormData();
          rm.append("title", "api test title");
          rm.append("content", "api content title");
          rm.append("category", "2");
          apiDataRequest("POST", "/api/question")
          .then(res => {
              console.log(res);
          })
          .catch(err => {
              console.log(err);
          })
      }
  }
};

</script>


<style scoped>
.app {
  width: 100%;
  height: 100%;
}

.form {
    height: 80%;
    margin-top: 5%;
}

.form-select {
    display: inline-block;
    width: 100px;
    margin-right: 5px;
}

.title {
    height: 60px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 60px;
}

.form-data {
    display: grid;
    grid-template-columns: 2.5fr 5fr 2.5fr;
    margin: 10px;
    grid-template-areas: "head content .";
}

textarea {
    resize: none !important;
}

.form-head {
    margin-right: 10px;
    font-size: 14px;
    text-align: right;
    grid-area: "head";
    line-height: 35px;
}

.form-content {
    grid-area: "content";
    font-size: 14px;
}

.form-button {
    width: calc((100% -20px)*0.5);
    margin: auto;
}

#custom-bnt {
    float: right;
    margin-left: 5px;
    display: inline-block;
    width: 80px;
    margin-right: 5px;
}

</style>
