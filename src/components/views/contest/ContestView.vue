<template>
    <div>
        <Title title="공모전" isSecondaryExists="True" :SecondaryTitle="apiRes.category"></Title>
        <ContestView :contest="apiRes" :contestList="apiResList"></ContestView>
        
    </div>
</template>

<script>
import Title from "../../layout/common/Title.vue"
import ContestView from "../../layout/post/ViewContest.vue"

import {getContest, getContestListById} from "../../../api/ApiContest.js"

export default {
    components: {
        Title,
        ContestView
    },
    data() {
        return {
            apiRes : [],
            apiResList : []
        }
    },
    methods: {
        get() {
            getContest(this.$route.params.id)
            .then(res => {
                this.apiRes = res;
            });
            getContestListById(this.$route.params.id)
            .then(res => {
                this.apiResList = res;
            });
        }
    },
    created() {
        this.get();
    },
    watch: {
        $route(to, from) {
            if (to.path != from.path) {
                this.get();
            }
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