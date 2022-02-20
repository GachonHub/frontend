<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">{{title}}</div>
                <form>
                    <div class="form-data">
                        <label for="f-title" class="form-head">그룹 이름</label>
                        <input type="text" id="f-title" v-model="form.name" class="form-control form-content"/><br>
                    </div>
                    <div class="form-data">
                        <label for="field" class="form-head">공부 분야</label>
                        <input type="text" id="field" v-model="form.field" class="form-control form-content"/><br>
                    </div>
                    <div class="form-data">
                        <label for="people" class="form-head">인원</label>
                        <input type="text" id="people" v-model="form.people" class="form-control form-content"  style="width: 50px;"/><br>
                    </div>
                    <div class="form-data">
                        <label for="addr" class="form-head">대표 레포지토리 주소</label>
                        <input type="text" id="addr" v-model="form.repos" class="form-control form-content"  placeholder="master 브랜치의 READMD.md와 연동됩니다." /><br>
                    </div>
                    <div class="form-data">
                        <label for="image" class="form-head">대표 이미지</label>
                        <input type="file" id="image" class="form-control form-content"><br>
                    </div>                    
                    <div class="form-data">
                        <label for="description" class="form-head">설명</label>
                        <input type="text" id="description" v-model="form.description" class="form-control form-content"  style="height : 150px;"/><br>
                    </div>
                </form>
                <div class="form-button">
                    <button class="form-control" id="custom-bnt" @click="$emit('close')">취소</button>
                    <button class="form-control" id="custom-bnt" @click="makeFormData">작성</button>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
export default {
  name: "post-creation",
  methods: {
      makeFormData: function () {
          const image = document.getElementById("image").files;
          this.$emit("save", this.form, image);
      }
  },
  data() {
    return {
      items: ["선택", "정보보안", "코딩"],
      items2: [["none"], ["리버싱", "포렌식"], ["c언어", "자바", "파이썬"]],
      form: {}
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
  align-items: center;
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

input::placeholder {
    font-size: 10px;
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
    margin-right: 5px;
    display: inline-block;
    width: 80px;
}

</style>
