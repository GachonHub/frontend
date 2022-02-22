<template>
    <div class="container">
        <Title title="질문글" isSecondaryExists=true :SecondaryTitle="question.category"></Title>
        <div class="view">
            <PostView :post="apiRes" type="question"></PostView>
            <Reply :reply="reply" :author="question.author"></Reply>
        </div>
    </div>
</template>


<script>

import PostView from "../../layout/post/PostView.vue"
import Title from "../../layout/common/Title.vue"
import Reply from "../../layout/Reply/ReplyQuestion.vue"
import {getQuestion} from "../../../api/ApiQuestion.js"

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
            reply : [
                {
                    content : "구글 ㄱㄱ, 나도 모름",
                    author : "auth",
                    date: "2021.01.01 19:20"
                },
                {
                    content : "와 미미 인성 무엇 왜 저래;;",
                    author : "auth2",
                    date: "2021.01.01 19:22"
                },
                {
                    content : "ㄱㄴㄲ 미미 집 가라 왜저럼",
                    author : "auth55",
                    date: "2021.01.01 19:25"
                },
                {
                    content : "아 다들 걍 집가라",
                    author : "auth99",
                    date: "2021.01.01 19:27"
                },
                {
                    content : "여러분 싸우지 마세요...ㅠㅠㅠ",
                    author : "jaeesu",
                    date: "2021.01.01 19:30"
                },
                {
                    content : "여러분 싸우지 마세요...ㅠㅠㅠ",
                    author : "jaeesu",
                    date: "2021.01.01 19:30"
                }
            ]
        }
    },
    created() {
        getQuestion(this.$route.params.id)
        .then(res => {
            console.log(res);
            this.apiRes = res;
        })
    }
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    padding: 0;
    max-width: 1200px;
    min-width: 1200px;
}

</style>