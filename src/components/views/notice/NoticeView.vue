<template>
     <div class="container">
       <Title title="공지 사항" isSecondaryExists="False" class="title"></Title>
        <div class="view">
        <PostView :post="apiRes" class="content" type="notice" @save="update"></PostView>
        </div>
    </div> 
</template>


<script>

import PostView from "../../layout/PostView.vue"
import Title from "../../layout/common/Title.vue"

import {readNotice} from "../../../api/ApiNotice.js"

export default {
    name: "question-view",
    components: {
        PostView,
        Title
    },
    data() {
        return {
            apiRes : {},
            question : {
                title : "22-1학기 국가장학금 신청마감 안내",
                author : "관리자",
                date : "2021.01.01",
                content : 
                "국가장학금 ★신청마감 7일 전★\n"+

                "더 든든해진 국가장학금, 지금 바로 신청하세요!\n\n\n"+

                

                "[’22년 국가장학금 지원 확대]\n"+

                "① 연간 350만원~등록금 전액 지원\n"+

                "▶ (학자금 지원 8구간) 67.5→350만원,\n"

            }
        }
    },
    methods: {
        read() {
            readNotice(this.$route.params.id)
            .then(res => {
                this.apiRes = res;
            })
        }
    },
    created() {
        this.read()
    }
}
</script>

<style scoped>
 .container {
    margin: auto;
    max-width: 1200px;
    padding: 0;
}

.title {
  height: 60px;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  line-height: 60px;
  padding-left: 20px;
}
</style>