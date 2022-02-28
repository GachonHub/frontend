<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">{{title}}</div>
                <form>
                    <div class="form-data">
                        <label for="title" class="form-head">그룹 이름</label>
                        <input type="text" id="title" class="form-control form-content" @blur="isValid($event.target.value, 'title')"/><br>
                    </div>
                    <div class="form-data">
                        <label for="field" class="form-head">공부 분야</label>
                        <input type="text" id="field" class="form-control form-content" @blur="isValid($event.target.value, 'field')"/><br>
                    </div>
                    <div class="form-data">
                        <label for="people" class="form-head">인원</label>
                        <input type="text" id="people" class="form-control form-content"  style="width: 70px;" @blur="isValid($event.target.value, 'people')"/><br>
                    </div>
                    <div class="form-data">
                        <label for="addr" class="form-head">Github Organization 이름</label>
                        <input type="text" id="addr" class="form-control form-content"  placeholder="레포지토리, 커밋 등이 연동됩니다." @blur="isValid($event.target.value, 'addr')"/><br>
                    </div>                   
                    <div class="form-data">
                        <label for="description" class="form-head">설명</label>
                        <textarea type="text" id="description" class="form-control form-content"  style="height : 150px;" @blur="isValid($event.target.value, 'description')"/><br>
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
export default {
  name: "post-creation",
  methods: {
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
      write() { 
          //제약조건 함수
        if(document.getElementById('title').classList.contains('is-valid')){
            if(document.getElementById('field').classList.contains('is-valid')) {
                if(document.getElementById('people').classList.contains('is-valid')) {
                    if(document.getElementById('addr').classList.contains('is-valid')) {
                        if(document.getElementById('description').classList.contains('is-valid')) {
                            var title = document.getElementById('title').value;
                            var field = document.getElementById('field').value;
                            var people = document.getElementById('people').value;
                            var orgName = document.getElementById('addr').value;
                            var description = document.getElementById('description').value;
                            this.$emit("save", title, field, people, orgName, description);
                        }
                    }
                }
            }
        }
      }
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
