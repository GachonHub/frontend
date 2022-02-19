<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">{{title}}</div>
                <form>
                    <div class="form-data">
                        <label for="f-title" class="form-head">학과</label>
                        <input type="text" id="f-title" class="form-control form-content"/><br>
                    </div>

                    <div class="form-data">
                        <label for="content" class="form-head">재학 여부</label>
                        <input type="text" id="content" class="form-control form-content"/><br>
                    </div>
                </form>
                <div class="form-button">
                    <button class="form-control" id="custom-bnt" @click="$emit('close')">취소</button>
                    <button class="form-control" id="custom-bnt" @click="writeNewPost()">작성</button>
                </div>
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
  props : {
      title: String
  },
};

</script>


<style scoped>
.app {
  width: 100%;
  height: 100%;
}

.form {
    height: 70%;
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
