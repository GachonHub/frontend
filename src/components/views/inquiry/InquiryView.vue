<template>
     <div class="container">
       <Title title="문의 사항" isSecondaryExists="False"></Title>
        <div class="view">
        <PostView :post="apiRes" type="inquiry"></PostView>
        <Reply :reply="reply"></Reply>
        </div>
    </div>
</template>


<script>

import PostView from "../../layout/post/PostView.vue"
import Title from "../../layout/common/Title.vue"
import Reply from "../../layout/Reply/ReplyInquiry.vue"

import {getInquiry} from "../../../api/ApiInquiry.js"

export default {
    name: "question-view",
    components: {
        PostView,
        Title,
        Reply
    },
    data() {
        return {
            apiRes : {},
            reply : {
                content : "안녕하세요 학사지원팀입니다. 학칙상 2019학년도 학사편제개편에 따라 모집단위가 폐지된 에너지IT학과 소속 학생 중 휴학 후 복학시 해당학년의 학과편제가 없는 경우 전기공학과로 소속변경 한다. 단, 학생 본인이 희망할 경우 에너지IT학과 소속으로 한다. 라고 표시되어 있습니다. 이점 참고하시기 바랍니다. "
            }
        }
    },
    created() {
        getInquiry(this.$route.params.id)
        .then(res => {
            this.apiRes = res;
        })
    }
}
</script>

<style scoped>
 .container {
    margin: auto;
    max-width: 1200px;
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