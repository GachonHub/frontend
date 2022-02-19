<template>
    <div class="container">
        <Title title="질문글" isSecondaryExists=true :SecondaryTitle="question.category"></Title>
        <div class="view">
            <PostView :question="question" :reply="reply"></PostView>
        </div>
    </div>
</template>


<script>

import PostView from "../../layout/PostView.vue"
import Title from "../../layout/common/Title.vue"
// import {apiGetRequest} from "../../api/ApiCommon.js"

export default {
    name: "question-view",
    components: {
        PostView,
        Title
    },
    data() {
        return {
            question : {
                title : "고수님들 리눅스 질문좀요ㅠㅠㅠㅠ",
                author : "jaeesu",
                date : "2021.01.01",
                category: "linux",   
                content : "리눅스 포트 확인 중인데, 열려있는데 닫혀있다고 이중으로 뜨네요."+
                "개발 환경은 ubuntu linux 20.04 lts입니다."+
                "제발 살려주세요ㅠㅠㅠㅠ",
                img : "data:image/png;base64,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"
                
            },
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
    // created() {
    //     apiGetRequest("/api/posts/question/" + (parseInt(this.$route.params.id)))
    //         .then(res => {
    //         /* eslint-disable no-console */
    //         console.log(res.data);
    //         this.apiRes = res.data;
    //   })
    // }
//route 변경 감지로 바꾸기
}
</script>

<style scoped>
.container {
    margin: auto auto 40px auto;
    max-width: 1200px;
}

</style>