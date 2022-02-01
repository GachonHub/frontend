<template>
    <div class="app">
        <router-link :to="baseUri + '/1'" v-if="page != 1">
            <img class="bnt d_prev" :src="require('@/assets/double_prev.png')" alt="double prev button">
        </router-link>
        <router-link :to="baseUri + '/' + prevPage" v-if="page != 1">
            <img class="bnt prev" :src="require('@/assets/prev.png')" alt="prev button">
        </router-link>
        <div id="page">{{page}}</div>
        <router-link :to="baseUri + '/' + nextPage" v-if="page != lastPage">
            <img class="bnt next" :src="require('@/assets/next.png')" @click="nextPage()" alt="next button">
        </router-link>
        <router-link :to="baseUri + '/' + lastPage" v-if="page != lastPage">
            <img class="bnt d_next" :src="require('@/assets/right-arrow.png')" alt="double next button">
        </router-link>
        
    </div>
</template>

<script>
export default {
    name: "page-button",
    props : {
        page: {
            Type: Number,
            default: 1
        },
        lastPage: Number,
        baseUri: String
    },
    created() {
        this.nextPage = parseInt(this.page) + 1;
        this.prevPage = parseInt(this.page) - 1;
    }
}
</script>

<style scoped>
.app {
    height: 15px;

}
.bnt {
    width: 15px;
    height: 15px;
    margin-top: auto;
    margin-bottom: auto;
}

#page {
    font-size: 14px;
    height: 15px;
    display:inline-block;
}

</style>