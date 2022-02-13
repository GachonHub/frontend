<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="title">{{title}}</div>
            <form class="form">
                <div class="form-data">
                    <label for="f-title" class="form-head">제목</label>
                    <input type="text" id="f-title" class="form-control form-content"/><br>
                </div>

                <div class="form-data" v-if="isCategory">
                    <label for="category1" class="form-head">카테고리</label>
                    <div class="form-content">
                        <select class="form-select" id="category1">
                            <option :value="index" v-for="(item, index) in items" v-bind:key="item">
                                {{ item }}
                            </option>
                        </select>
                        
                        <select class="form-select" id="category2">
                            <option value="item" v-for="item in items2[0]" v-bind:key="item">
                                {{ item }}
                            </option>
                        </select><br>
                    </div>
                </div>

                <div class="form-data">
                    <label for="content" class="form-head" style="height: 200px">내용</label>
                    <input type="text" id="content" class="form-control form-content"/><br>
                </div>

                <div class="form-data" v-if="isImage">
                    <label for="image" class="form-head">이미지</label>
                    <input type="file" id="image" class="form-control form-content"><br>
                </div>

                <div class="form-check form-switch form-data" v-if="isSecret">
                    <label for="isSecret" class="form-head">비밀글 여부</label>
                    <input type="checkbox" id="isSecret" role="switch" class="form-check-input form-content" style="margin-left:6px;">
                </div>
                <div class="form-data" v-if="isSecret">
                    <label for="password" class="form-head">비밀번호</label>
                    <input type="text" id="password" class="form-control form-content"/><br>
                </div>
            </form>
            <div class="form-button">
                <button class="form-control" id="custom-bnt" @click="$emit('close')">취소</button>
                <button class="form-control" id="custom-bnt" @click="writeNewPost()">작성</button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: "post-creation",
  methods: {
      writeNewPost: function () {
          alert("New post");
      }
  },
  data() {
    return {
      items: ["선택", "정보보안", "코딩"],
      items2: [["none"], ["리버싱", "포렌식"], ["c언어", "자바", "파이썬"]]
    };
  },
  props : {
      title: String,      
      isImage: {
          Type: Boolean,
          default: false
      },
      isSecret: {
          Type: Boolean,
          default: false
      },
      isCategory: {
          Type: Boolean,
          default: false
      }
  }
};

</script>


<style scoped>
.app {
  width: 100%;
  height: 100%;
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

.form-check{
    padding: 0;
    margin: 0;
}


.form-head {
    margin-right: 10px;
    font-size: 14px;
    text-align: right;
    grid-area: "head";
}

.form-content {
    grid-area: "content";
    font-size: 14px;
}

.form-button {
    width: calc((100% -20px)*0.5);
    margin: auto;
    /* text-align: right; */
}

#custom-bnt {
    float: right;
    margin-left: 5px;
    display: inline-block;
    width: 80px;
}

</style>
