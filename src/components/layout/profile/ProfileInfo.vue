<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">{{title}}</div>
                <form>
                    <div class="form-data">
                        <label for="f-title" class="form-head">학과</label>
                        <input type="text" id="f-title" :value="info.major" class="form-control form-content"/><br>
                    </div>

                    <div class="form-data">
                        <label for="content" class="form-head">재학 여부</label>
                        <input type="text" id="content" :value="info.graduate" class="form-control form-content"/><br>
                    </div>
                    <div id="title" style="margin-left:auto; margin-right:auto;">
                        <div style="font-size : 18px; text-align:center;"><b>메인 레포지토리</b></div>
                        <div style="font-size : 10px; text-align:center;">*메인 레포지토리는 최대 3개까지 선택 가능*</div>
                    </div>
                    <div style="background-color : white;">
                        <MainRepos id="mainRepos-selection" :repos = info.repos></MainRepos>
                    </div>
                    <div class="form-button">
                        <button class="form-control" id="custom-bnt" @click="$emit('close')">취소</button>
                        <button class="form-control" id="custom-bnt" @click="$emit('save', form)">작성</button>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>

<script>
import MainRepos from "../../layout/profile/MainRepos.vue"

export default {
  name: "post-creation",
  components: {
      MainRepos
  },
  props : {
      title: String,
      info: Object
  }
};

</script>


<style scoped>
.app {
  width: 100%;
  height: 100%;
}

#mainRepos-selection {
    background-color:white;
    width: 400px;
    height: 250px;
    margin: auto;
    overflow-y: scroll;
    -ms-overflow-style: none;
    border-radius: 4px;
}

#mainRepos-selection::-webkit-scrollbar {
    display: none;
}

#main-repos {
    width: 50%;
    margin : auto;
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
    height:50px;
    padding-top: 10px;
    width: 400px;
    margin: auto;
    line-height: 50px;
}

#custom-bnt {
    float: right;
    margin-left: 5px;
    display: inline-block;
    width: 80px;
}

</style>
