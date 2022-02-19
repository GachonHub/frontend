<template>
    <div class="container">
        <Title title="질문글" isSecondaryExists=true :SecondaryTitle="apiRes.category.name"></Title>
        <div class="view">
            <PostView :question="apiRes" :reply="reply"></PostView>
        </div>
    </div>
</template>


<script>

import PostView from "../../layout/PostView.vue"
import Title from "../../layout/common/Title.vue"
import {apiGetRequest} from "../../../api/ApiCommon.js"

export default {
    name: "question-view",
    components: {
        PostView,
        Title
    },
    data() {
        return {
            apiRes : [],
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
                }
            ]
        }
    },
    methods : {
        readComment() {
        apiGetRequest("/api/posts/question/" + (parseInt(this.$route.params.id)))
        },
        createComment() {

        },
        deleteComment() {

        }
    },
    created() {
        apiGetRequest("/api/posts/question/" + (parseInt(this.$route.params.id)))
            .then(res => {
            /* eslint-disable no-console */
            console.log(res.data);
            this.apiRes = res.data;
            })
            .catch(() => {
                alert("존재하지 않는 게시글입니다.");
                this.$router.push("/question/1");
            })
    }
}
</script>

<style scoped>
.container {
    margin: auto auto 40px auto;
    max-width: 1200px;
}

</style>