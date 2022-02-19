<template>
    <div>
        <Title title="공모전" isSecondaryExists="True" :SecondaryTitle="contest.category"></Title>
        <ContestView :contest="contest" :more="more"></ContestView>
    </div>
</template>

<script>
import Title from "../../layout/common/Title.vue"
import ContestView from "../../layout/ViewContest.vue"

export default {
    components: {
        Title,
        ContestView
    },
    data() {
        return {
            contest : {
                title : "제 5회 정보보호 영재 교육원 정보보안 경진대회 단체전",
                writer: "이지언",
                date : "2021.12.6",
                category: "보안 | 정보보안 공모전",
                 
                img:"http://www.contestkorea.com/admincenter/files/meet/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%ED%95%99%EC%8A%B5%EC%9A%A9%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%ED%99%9C%EC%9A%A9%20%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4%20%EA%B3%B5%EB%AA%A8%EC%A0%84[1].jpg",
                content : "■ 참여 방법\n"+
                        "1) 재단 홈페이지에서 공모전 참여양식 다운로드\n"+
                        '· 재단 홈페이지 → [재단 소식] → [보도자료] → "금융소비자 권익 제고」 아이디어 공모전 개최\n"'+
                        "■ 공모 주제\n"+
                        "- 일상생활에서 금융소비자 권익을 제고하기 위한 법령 · 제도 · 정책 개선방안(아이디어)\n"+
                        "■ 참가 대상\n"+
                        "- 제한 없음\n" +
                        "- 개인 또는 팀(5인 이내) 무관\n"+
                        "- 심사일정: 2022.2.~3.\n"+
                        "- 시상일정: 2022.4.\n"+
                        "※ 접수 상황에 따라 심사 및 시상 일정 변동 가능"

            },
            more : [
                {
                    img : "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80"
                },
                {
                    img : "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80"
                },
                {
                    img : "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80"
                },
                {
                    img : "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80"
                },
                {
                    img : "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80"
                },
                {
                    img : "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80"
                },
                {
                    img : "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80"
                }
            ]
        }
    }
    
}
</script>

<style scoped>
div {
    margin : 0 auto;
    max-width: 1200px;
}
</style>