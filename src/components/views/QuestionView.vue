<template>
    <div class="container">
        <Title title="질문글" isSecondaryExists=true SecondaryTitle="hello"></Title>
        <div class="view">
        <PostView :question="apiRes"></PostView>
            
        </div>
    </div>
</template>


<script>

import PostView from "../layout/PostView.vue"
import Title from "../layout/common/Title.vue"
import {apiGetRequest} from "../../api/ApiCommon.js"

export default {
    name: "question-view",
    components: {
        PostView,
        Title
    },
    created() {
        apiGetRequest("/api/posts/question/" + (parseInt(this.$route.params.id)))
            .then(res => {
            /* eslint-disable no-console */
            console.log(res.data);
            this.apiRes = res.data;
      })
    }
//route 변경 감지로 바꾸기
}
</script>

<style scoped>
.container {
    margin: auto;
    max-width: 1200px;
}

</style>