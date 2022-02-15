<template>
    <div class="list_view">
        <Title title="공모전 ⚡"></Title>
        <div style="display: inline-block; margin-top:10px;">
            <span style="font-size:14px;">카테고리</span>
            <Category style="display:inline-block;" :items = "categoryList" :items2 = "categoryList2"></Category>
        </div>
        <hr>
        <ListComponent v-for="item in items" v-bind:key="item" :data="item"/>
    </div>
</template>

<script>
import ListComponent from '../../layout/ListComponent.vue'
import Title from '../../layout/common/Title.vue'
import Category from '../../layout/common/SecondaryCategory.vue'

export default {
    components: {
        ListComponent,
        Title,
        Category
    },
    data() {
        return {
            categoryList: [
                {num : 0, val: "선택"},
                {num : 1 , val: "정보보안"},
                {num : 2 , val : "코딩"}
                ],
            categoryList2: [["선택"], ["리버싱", "포렌식", "전체"], ["c언어", "자바", "파이썬", "전체"]],
            items: [
                {
                    field: "정보보안",
                    sympathy: 10,
                    title: "리버싱 스터디",
                    content: "리버싱 스터디 같이 하실 구합니다. 따로 자격요건은 없구요. 기초부터 배울 예정이니 많은 지원 바랍니다. 열심히 하실 분들만 신청해주세요.  교재는 이걸로 하고요. 진도는 매주 한단원씩 나갈 예정입니다. 모임은 주로 오프라인에서 할 ...",
                    writer: "tearofglass",
                    img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                },
                {
                    field: "CTF",
                    sympathy: 10,
                    title: "CTF 스터디",
                    content: "리버싱 스터디 같이 하실 구합니다. 따로 자격요건은 없구요. 기초부터 배울 예정이니 많은 지원 바랍니다. 열심히 하실 분들만 신청해주세요.  교재는 이걸로 하고요. 진도는 매주 한단원씩 나갈 예정입니다. 모임은 주로 오프라인에서 할 ...",
                    writer: "tearofglass",
                    img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                },
                {
                    field: "AI",
                    sympathy: 10,
                    title: "AI 스터디",
                    content: "리버싱 스터디 같이 하실 구합니다. 따로 자격요건은 없구요. 기초부터 배울 예정이니 많은 지원 바랍니다. 열심히 하실 분들만 신청해주세요.  교재는 이걸로 하고요. 진도는 매주 한단원씩 나갈 예정입니다. 모임은 주로 오프라인에서 할 ...",
                    writer: "tearofglass",
                    img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                },
                {
                    field: "네트워크",
                    sympathy: 10,
                    title: "네트워크 스터디",
                    content: "리버싱 스터디 같이 하실 구합니다. 따로 자격요건은 없구요. 기초부터 배울 예정이니 많은 지원 바랍니다. 열심히 하실 분들만 신청해주세요.  교재는 이걸로 하고요. 진도는 매주 한단원씩 나갈 예정입니다. 모임은 주로 오프라인에서 할 ...",
                    writer: "tearofglass",
                    img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                },
            ]
        }
    },
}
</script>

<style scoped>
.list_view {
    width: 1200px;
    margin: 0 auto;
}
.list_title {
    width: 1200px;
    height: 60px;
}
.list_title > a {
    font-size: 22px;
    font-weight: 700;

    position: relative;
    top: 19px;
    left: 20px;
}

hr {
    border: 0;
    background-color: #E5E5E5;
    height: 2px;
}
</style>