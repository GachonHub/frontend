<template>
     <div class="container">
       <Title title="공지 사항" isSecondaryExists="False" class="title"></Title>
        <div class="view">
        <PostView :question="question" class="content"></PostView> 
        </div>
    </div> 
</template>


<script>

import PostView from "../../layout/PostView.vue"
import Title from "../../layout/common/Title.vue"

export default {
    name: "question-view",
    components: {
        PostView,
        Title
    },
    data() {
        return {
            question : {
                title : "22-1학기 국가장학금 신청마감 안내",
                author : "관리자",
                date : "2021.01.01",
                content : 
                "국가장학금 ★신청마감 7일 전★\n"+

                "더 든든해진 국가장학금, 지금 바로 신청하세요!\n\n\n"+

                

                "[’22년 국가장학금 지원 확대]\n"+

                "① 연간 350만원~등록금 전액 지원\n"+

                "▶ (학자금 지원 8구간) 67.5→350만원,\n"+

                "(7구간) 120→350만원,\n"+

                "(5~6구간) 368→390만원으로 인상\n"+

                "② (기초·차상위) 첫째 연간 700만원,\n"+

                "둘째 등록금 전액 지원\n"+

                "③ (다자녀) 8구간 이하 셋째부터 등록금 전액 지원\n\n\n"+

                

                "[’22년 1학기 국가장학금 신청 안내]\n"+

                "▶ 국가장학금 신청기간: 12. 30.(목) 18시까지\n"+

                "▶ 서류제출 및 가구원 동의: ’22. 1. 4.(화) 18시까지\n"+

                "* 공동인증서, 금융인증서 외\n"+

                "☆카카오톡, 통신사PASS 등 간편인증☆ 사용 가능\n"+

                "▶ 모바일 앱 바로가기: mo.kosaf.go.kr/apps"
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
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  line-height: 60px;
  padding-left: 20px;
}
</style>