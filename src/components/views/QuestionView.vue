<template>
    <div class="container">
        <div class="title"><a>문의 사항</a></div>
        <div class="view">
        <PostView :title="question.title" :author="question.author"
            :date="question.date" :content="question.content"></PostView>
            
        </div>
    </div>
</template>


<script>

import PostView from "../layout/PostView.vue"

export default {
    name: "question-view",
    components: {
        PostView
    },
    data() {
        return {
            question : {
                title : "휴학에 대해 문의드립니다.",
                author : "jaeesu",
                date : "2021.01.01",
                content : "저는 현재 에너지IT학과 4학년 1학기까지 마친 학생입니다. 많은 고민 끝에 한 학기 정도만 휴학을 생각하게 되었는데 에너지IT학과가 전기공학과로 통합되서 이번이 마지막 학기입니다. 만약 휴학 후 내년에 복학하고 졸업하면 학과 이름은 어떻게 기재되는지 궁금합니다. 어떻게 되는지에 따라서 휴학 여부를 결정할 것이기 때문에 빠르게 답해주시면 감사하겠습니다."
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

.title {
    height: 60px;
}

</style>