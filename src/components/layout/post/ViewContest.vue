<template>
    <div>
        <div class="title">{{contest.title}}</div>

        <div class="post-info">
            <table>
                <td >작성자</td>
                <td class="bd-l">{{contest.user}}</td>
                <td class="bd-l">작성일</td>
                <td class="bd-l">{{contest.writeAt}}</td>
                <td class="bd-l w-820"></td>
                <td class="bd-l">조회수 {{contest.hit}}</td>
            </table>
        </div>

        <div class="contents">
            <img class="cont-img content-left" :src="contest.image">
            <div class="content-right" v-html="toContet"></div>
        </div> 
        <div class="form-button">
            <button class="form-control" id="custom-bnt" @click="deletePost">삭제</button>
            <button class="form-control" id="custom-bnt" @click="modal=true">수정</button>
        </div>
        <PostContest id="modal" v-if="modal" @close="modal = false" @save="update"></PostContest>
        <hr>
        <div class="more">
            <div class="sub-title">다른 공모전</div>
                <div class="box" v-for="item in contestList" :key="item">
                    <router-link :to="{path : '/contest/id/' + item.id}">
                        <img class="box-img" :src="item.mainImage">
                    </router-link>
                </div>
        </div>
    </div>
</template>
<script>
import PostContest from "../post/PostContest.vue"

import {createContest, deleteContest} from "../../../api/ApiContest.js"

export default {
    components: {
        PostContest
    },
    props : {
        contest : Object,
        contestList : Array
    },
    data() {
        return {
            modal : false
        }
    },
    computed: {
        toContet() {
            return this.contest.content.replaceAll("\n", "<br/>")
        }
    },
    methods: {
        update(form, files) {
            form.id = this.$route.params.id;
            createContest(form, files, "PUT");
        },
        deletePost() {
            deleteContest(this.$route.params.id);
        }

    },
}
</script>
<style scoped>
/* title */
.title {
    height: 100px;
    line-height: 100px;
    text-align: center;

    font-weight: 400;
    font-size: 20px;
}
/* post-info */
table {
    border-top: 0.5px solid #b2b2b2;
    border-bottom: 0.5px solid #b2b2b2;
    text-align: center;

    font-weight: 500;
    font-size: 14px;
}
table td {
    border: 0;
}
.w-820 {
    width: 820px;
}
.bd-l {
    border-left: 0.5px solid #b2b2b2;
}
/* contents */
.contents {
    margin-top: 36px;
    margin-bottom: 36px;
    display: inline-flex;
}
.cont-img {
    width: 247px;
    height: 330px;

    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
}
.content-left {
    width: 247px;
    margin-right: 50px;
}
/* hr */
hr {
    margin: 0;
}
/* more */
.sub-title {
    line-height: 85px;
    height: 85px;

    font-weight: 500;
    font-size: 14px;
}
.box {
    display: inline-flex;
}
.box-img {
    width: 164px;
    height: 217px;
    margin-right: 7px;  

    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
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

#modal {
  position: absolute;
  background-color:white;
  border: 1px solid black;
  z-index: 20;
  margin: auto;
  width: 100%;
  top: 100px;
  height: 630px;
}

</style>