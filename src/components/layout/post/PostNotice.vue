 <template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">{{title}}</div>
                <form action="register.php" method="post" novalidate="true">
                    <div class="form-data">
                        <label for="title" class="form-head">제목</label>
                        <input type="text" id="title" class="form-control form-content" @blur="isValid($event.target.value, 'title')" :placeholder="hello"/><br>
                    </div>

                    <div class="form-data">
                        <label for="cnt" class="form-head" style="height: 200px">내용</label>
                        <input type="text" id="cnt" class="form-control form-content" @blur="isValid($event.target.value, 'cnt')" :placeholder="hello" /><br>
                    </div>

                </form>
                <div class="form-button">
                    <button class="form-control" id="custom-bnt" @click="$emit('close')">삭제</button>
                    <button class="form-control" id="custom-bnt" @click="write()">작성</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: "post-creation",
  props : {
      updateItem : Object,
      title: String
  },
  data() {
    return {
        hello : null,
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
        if(document.getElementById('title').classList.contains('is-invalid')) return;
        if(document.getElementById('content').classList.contains('is-invalid')) return;
        this.$router.go();
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
