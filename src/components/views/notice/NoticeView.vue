<template>
     <div class="container">
       <Title title="공지 사항" isSecondaryExists="False" class="title"></Title>
        <div class="view">
        <PostView :post="apiRes" class="content" type="notice" @save="update"></PostView>
        </div>
    </div> 
</template>


<script>

import PostView from "../../layout/post/PostView.vue"
import Title from "../../layout/common/Title.vue"

import {readNotice} from "../../../api/ApiNotice.js"

export default {
    name: "question-view",
    components: {
        PostView,
        Title
    },
    data() {
        return {
            apiRes : {},
        }
    },
    methods: {
        read() {
            readNotice(this.$route.params.id)
            .then(res => {
                this.apiRes = res;
            })
        }
    },
    created() {
        this.read()
    }
}
</script>

<style scoped>
 .container {
    margin: auto;
    max-width: 1200px;
    padding: 0;
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