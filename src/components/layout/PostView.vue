<template>
    <div id="post-view">
        <div id="title">{{post.title}}</div>
        <div id="post-info">
            <table>
                <td></td>
                <td id="wth80">작성자</td>
                <td id="wth100">{{post.user}}</td>
                <td id="wth80">작성일</td>
                <td id="wth100">{{post.writeAt}}</td>
            </table>
        </div>
        <div v-html="toContent(post.content)" class="content"></div>
        <img v-for="item in post.fileList" :key="item" :src="item.img" alt="img">
        <div class="form-button">
            <button class="form-control" id="custom-bnt" @click="$emit('close')">삭제</button>
            <button class="form-control" id="custom-bnt" @click="modal = true">수정</button>
        </div>
        <PostQuestion v-if="modal" id="modal" @close="modal = false" :updateItem = "post"></PostQuestion>
        <hr>
    </div>
</template>

<script>
import PostQuestion from "../layout/post/PostQuestion.vue";

export default {
    name : "post-view",
    components: {
        PostQuestion
    },
    data() {
        return {
            modal : false
        }
    },
    props : {
        post : Array,
        reply: Array,
    },
    methods: {
        toContent(post) {
            return post.replaceAll("\n","<br/>");
        },
    }
}
</script>

<style scoped>

#post-view {
    width: 100%;
}

#modal {
    background-color: white;
}

hr {
  margin: 0;
  margin-top: 50px;
  border: 0;
  border-top: 1px solid #b2b2b2;
}

#title {
    height: 100px;
    line-height: 100px;
    text-align: center;
}

table {
    border-top: 0.5px solid #b2b2b2;
    border-bottom: 0.5px solid #b2b2b2;
    text-align: center;
}

table td {
    border: none;
}

#wth80 {
    width: 80px;
    border-left: 0.5px solid #b2b2b2;
}

#wth100 {
    width: 100px;
    border-left: 0.5px solid #b2b2b2;
}
.content { 
    padding: 50px;
}

#post-info {
    height: 50px;
    line-height: 50px;
}

img {
    display: block;
    border: 1px solid gray;
    box-sizing: border-box;
    margin: 0 50px;
    
}

#content {
    min-height: 200px;
    padding: 50px;
    
}

.form-button {
    width: 1200px;
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