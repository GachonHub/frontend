<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="title">{{title}}</div>
            <form class="form">
                <div class="form-data">
                    <label for="f-title" class="form-head">제목</label>
                    <input type="text" id="f-title" class="form-content"/><br>
                </div>

                <div class="form-data" v-if="isCategory">
                    <label for="category1" class="form-head">카테고리</label>
                    <div class="form-content">
                        <select id="category1">
                            <option :value="index" v-for="(item, index) in items" v-bind:key="item">
                                {{ item }}
                            </option>
                        </select>
                        
                        <select id="category2">
                            <option value="item" v-for="item in items2[0]" v-bind:key="item">
                                {{ item }}
                            </option>
                        </select><br>
                    </div>
                </div>

                <div class="form-data">
                    <label for="content" class="form-head" style="height: 200px">내용</label>
                    <input type="text" id="content" class="form-content"/><br>
                </div>

                <div class="form-data" v-if="isSecret">
                    <label for="isSecret" class="form-head">비밀글 여부</label>
                    <input type="text" id="isSecret" class="form-content"/><br>
                </div>

                <div class="form-data" v-if="isSecret">
                    <label for="password" class="form-head">비밀번호</label>
                    <input type="text" id="password" class="form-content"/><br>
                </div>
            </form>
            <button @click="writeNewPost()">작성</button>
            <button @click="$emit('close')">close</button>
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
      isSecret: Boolean,
      isCategory: Boolean
  }
};

</script>


<style scoped>
.app {
  width: 100%;
  height: 100%;
}

img {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 10px;
}

.title {
  width: calc(100%-20px);
  height: 60px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 60px;
  padding-left: 20px;
}

.form-data {
    display: grid;
    grid-template-columns: 3fr 7fr;
    width: 100%;
    margin: 5px;
    grid-template-areas: "head content";
}

textarea {
    resize: none !important;
}

.form-head {
    /* width: 100%; */
    margin-right: 10px;
    text-align: right;
    grid-area: "head";
}

.form-content {
    width: 70%;
    grid-area: "content";
}

</style>
