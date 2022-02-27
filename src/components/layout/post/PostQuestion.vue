<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">질문글 작성</div>
                <form>
                    <div class="form-data">
                        <label for="title" class="form-head">제목</label>
                        <input type="text" id="title" v-model="form.title" class="form-control form-content" @blur="isValid($event.target.value, 'title')"/><br>
                    </div>
                    <div class="form-data">
                        <label for="category" class="form-head">카테고리</label>
                        <Category id="category" class="form-content" :items = "items" @save="getCategory" @blur="isCategoryValid('category')"></Category>
                    </div>
                    <div class="form-data">
                        <label for="cnt" class="form-head" style="height: 200px">내용</label>
                        <input type="text" id="cnt" v-model="form.content" class="form-control form-content" @blur="isValid($event.target.value, 'cnt')"/><br>
                    </div>
                    <div class="form-data">
                        <label for="image" class="form-head">이미지</label>
                        <input type="file" id="image" class="form-control form-content"><br>
                    </div>
                </form>
                <div class="form-button">
                    <button class="form-control" id="custom-bnt" @click="$emit('close')">취소</button>
                    <button class="form-control" id="custom-bnt" @click="write()">작성</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Category from "../common/SecondaryCategory2.vue"

export default {
  name: "post-creation",
  components: {
      Category,
  },
  props: {
        updateItem : Object
  },
  data() {
    return {
        form : {},
        items: [
            {
                num : 0,
                val: "선택",
                sub : [
                    {num : 1, val: "선택"},
                ]
            },
            {
                num : 6, 
                val: "정보보안",
                sub : [
                    {num : 1, val: "포렌식"},
                    {num : 2, val: "웹해킹"},
                    {num : 3, val: "리버싱"},
                    {num : 4, val: "포너블"},
                ]
            },
            {
                num : 7,
                 val : "개발",
                sub : [
                    {num : 5, val: "spring"},
                    {num : 6, val: "django"},
                    {num : 7, val: "ios"},
                    {num : 8, val: "web"},
                    {num : 9, val: "android"}
                ]
            }
        ]
    };
  },
  methods : {
      getCategory(main, sub) {
          this.main = main;
          this.sub = sub;
      },
      create() {
          const files = document.getElementById('image').files;
          this.form.id = this.updateItem.id;
          this.form.category = this.sub;
          this.$emit('save', files, this.form);

      },
      isValid(value, id) {
          console.log(value.trim());
        var element = document.getElementById(id);
        if (value.trim().length == 0) {
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
        } else{
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
        }
      },
      isCategoryValid(id) {
          var element = document.getElementById(id);
          var mainC = this.main;
          var subC = this.sub;
          console.log(mainC,subC);
          if (mainC != 0 && subC != 1) {
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
          }
          else {
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
          }
      },
      write() { 
          //제약조건 함수
        if(document.getElementById('title').classList.contains('is-valid')){
            if(document.getElementById('cnt').classList.contains('is-valid')) {
                if(document.getElementById('category').classList.contains('is-valid')){
                    this.$router.go();
                }
            }
        }
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
