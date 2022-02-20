<template>
    <div id="post-view">
        <div id="title">{{post.title}}</div>
        <div id="post-info">
            <table>
                <td id="wth80">작성자</td>
                <td id="wth100">{{post.user}}</td>
                <td id="wth80">작성일</td>
                <td id="wth100">{{post.writeAt}}</td>
                <td></td>
                <td id="wth80r">조회수</td>
                <td id="wth100r">{{post.git}}</td>
            </table>
        </div>
        <div v-html="toContent(post.content)" class="content"></div>
        <img v-if="post.img" :src="post.img" alt="img">
        <div class="form-button">
            <button class="form-control" id="custom-bnt" @click="deletePost">삭제</button>
            <button class="form-control" id="custom-bnt" @click="modal=true">수정</button>
        </div>
        <PostNotice v-if="modal" :notice = this.post @close="modal=false" @save = update></PostNotice>
        <hr>

    </div>
</template>

<script>

import {deleteNotice, createNotice} from "../../api/ApiNotice.js"
import PostNotice from "../layout/post/PostNotice.vue"

export default {
    name : "post-view",
    components : {
        PostNotice
    },
    props : {
        post : Object,
        reply: Array,
        type : String
    },
    data() {
        return {
            modal : false
        }
    },
    methods: {
        toContent(question) {
            return question.replaceAll("\n","<br/>");
        },
        deletePost() {
            deleteNotice(this.$route.params.id);
      },
      update(form) {
          form.id = this.post.id;
          createNotice(form, "PUT");
      }
    }
}
</script>

<style scoped>

hr {
  margin: 0;
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
    border-right: 0.5px solid #b2b2b2;
}

#wth100 {
    width: 100px;
    border-right: 0.5px solid #b2b2b2;
}

#wth80r {
    width: 80px;
    border-left: 0.5px solid #b2b2b2;
}

#wth100r {
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
    width: 1100px;
    margin: auto;
    text-align: right;
    height: 50px;
}

#custom-bnt {
    margin-left: 5px;
    display: inline-block;
    width: 80px;
}


</style>