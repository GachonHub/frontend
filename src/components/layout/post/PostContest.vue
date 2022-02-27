<template>
    <transition name="modal" appear>
        <div class="app">
            <div class="form">
                <div class="title">공모전 추가</div>
                <form>
                    <div class="form-data">
                        <label for="title" class="form-head">제목</label>
                        <input type="text" id="title" v-model="form.title" class="form-control form-content"/><br>
                    </div>
                    <div class="form-data">
                        <label for="" class="form-head">카테고리</label>
                        <Category class="form-content" :items = "items" @save="getCategory"></Category>
                    </div>

                    <div class="form-data">
                        <label for="content" class="form-head" style="height: 200px">내용</label>
                        <input type="text" id="content" v-model="form.content" class="form-control form-content"/><br>
                    </div>
                    <div class="form-data">
                        <label for="image" class="form-head">첨부파일</label>
                        <input type="file" id="image" class="form-control form-content"><br>
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
import Category from "../../layout/common/SecondaryCategory.vue"

export default {
    components: {
        Category
    },
    data() {
        return {
            main : 0,
            sub : 0,
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
        }
    },
    methods : {
        getCategory(main, sub) {
            this.main = main;
            this.sub = sub;
        },
        create() {
            this.form.category = this.sub;
            const files = document.getElementById("image").files;
            this.$emit('save', this.form, files);
        }
    }
}
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
