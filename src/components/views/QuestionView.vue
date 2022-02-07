<template>
    <div class="container">
        <Title title="질문글" isSecondaryExists=true :SecondaryTitle="question.category"></Title>
        <div class="view">
        <PostView :title="question.title" :author="question.author"
            :date="question.date" :content="question.content"></PostView>
            
        </div>
    </div>
</template>


<script>

import PostView from "../layout/PostView.vue"
import Title from "../layout/common/Title.vue"

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
                category : "보안",
                content : "리눅스 포트 확인 중인데, 열려있는데 닫혀있다고 이중으로 뜨네요."+
                "개발 환경은 ubuntu linux 20.04 lts입니다."+
                "제발 살려주세요ㅠㅠㅠㅠ"
                //img
            },
            reply : {
                content : "안녕하세요 학사지원팀입니다. 학칙상 2019학년도 학사편제개편에 따라 모집단위가 폐지된 에너지IT학과 소속 학생 중 휴학 후 복학시 해당학년의 학과편제가 없는 경우 전기공학과로 소속변경 한다. 단, 학생 본인이 희망할 경우 에너지IT학과 소속으로 한다. 라고 표시되어 있습니다. 이점 참고하시기 바랍니다. "
            }
        }
    }
}
</script>

<style scoped>
.container {
    margin: auto;
    max-width: 1200px;
}

</style>