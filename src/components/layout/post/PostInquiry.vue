<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">{{title}}</div>
                <form>
                    <div class="form-data">
                        <label for="f-title" class="form-head">제목</label>
                        <input type="text" id="f-title" v-model="form.title" class="form-control form-content"/><br>
                        
                    </div>

                    <div class="form-data">
                        <label for="content" class="form-head" style="height: 200px">내용</label>
                        <input type="text" id="content" v-model="form.content" class="form-control form-content"/><br>
                        
                    </div>

                    <div class="form-data">
                        <label for="file" class="form-head">첨부파일</label>
                        <input type="file" id="file" class="form-control form-content"><br>
                    </div>
                </form>
                <div class="form-button">
                    <button class="form-control" id="custom-bnt" @click="$emit('close')">취소</button>
                    <button class="form-control" id="custom-bnt" @click="create()">작성</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
  name: "post-creation",
  props : {
      title: String,
      baseUri : String
  },
  data() {
    return {
        form:[],
      items: [
        {num : 0, val: "선택"},
        {num : 1 , val: "정보보안"},
        {num : 2 , val : "코딩"}
        ],
      items2: [["none"], ["리버싱", "포렌식"], ["c언어", "자바", "파이썬"]],
    };
  },
  methods: {
      create() {
          const rm = new FormData();
        //   const file = document.getElementById("file").files;
        //   rm.append
          rm.append("title", this.form.title);
          rm.append("content", this.form.content);

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
    height: 70%;
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
    /* text-align: right; */
}

#custom-bnt {
    float: right;
    margin-left: 5px;
    display: inline-block;
    width: 80px;
}

</style>
