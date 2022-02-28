<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">{{title}}</div>
                <form>
                    <div class="form-data">
                        <label for="title" class="form-head">제목</label>
                        <input type="text" id="title" v-model="form.title" class="form-control form-content" @blur="isValid($event.target.value, 'title')"/><br>
                        
                    </div>

                    <div class="form-data">
                        <label for="cnt" class="form-head" style="height: 200px">내용</label>
                        <input type="text" id="cnt" v-model="form.content" class="form-control form-content" @blur="isValid($event.target.value, 'cnt')"/><br>
                        
                    </div>
                    <div class="form-data">
                        <label for="image" class="form-head">첨부파일</label>
                        <input type="file" id="image" class="form-control form-content"><br>
                    </div>

                    <div class="form-data">
                        <label for="isSecret" class="form-head">비밀글 여부</label>
                        <div>
                            <Switch id="isSecret" @save="checkSecret"></Switch>
                        </div>
                    </div>
                    <div class="form-data">
                        <label for="password" class="form-head">비밀번호</label>
                        <input type="text" id="password" v-model="form.password" class="form-control form-content" @blur="isValid($event.target.value, 'password')"/><br>
                    </div>
                </form>
                <div class="form-button">
                    <button class="form-control" id="custom-bnt" @click="$emit('close')">취소</button>
                    <button class="form-control" id="custom-bnt" @click="create">작성</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

import Switch from "../common/switch.vue"

export default {
  name: "post-creation",
  components: {
      Switch
  },
  props : {
      title: String,
      baseUri : String,
      updateItem : Object,
  },
  data() {
    return {
        secret : false,
        form:{},
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
          this.form.secret = this.secret;
          const image = document.getElementById('image').files;
          this.$emit('save', image, this.form);
      },
      checkSecret(bool) {
          this.secret = (bool) ? true : false;
          document.getElementById('password').readOnly = !(this.secret);
          if (!this.secret) {
            document.getElementById('password').classList.remove('is-invalid');
            document.getElementById('password').classList.remove('is-valid');
          }
          
          console.log(this.secret);
          this.isValid(this.$event.target.value, 'password');
      },
      isValid(value, id) {
          console.log(value.trim());
        var element = document.getElementById(id);


        if (!element.readOnly) {
            if (value.trim().length == 0) {
                element.classList.remove('is-valid');
                element.classList.add('is-invalid');
            } else{
                element.classList.remove('is-invalid');
                element.classList.add('is-valid');
            }
        }
      },
  }
};

</script>


<style scoped>
.app {
  width: 100%;
  height: 100%;
}

#isSecret {
    display: inline-block;
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
