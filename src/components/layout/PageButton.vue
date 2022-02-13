<template>
    <div class="app">

        <table>
            <tr>
                <td>
                    <a :href="uri + '/1'" v-if="page > 1">
                        <img class="bnt d_prev" :src="require('@/assets/double_prev.png')" alt="double prev button">
                    </a>
                </td>
                <td>
                    <a :href="uri + '/' + prevPage" v-if="page > 1">
                        <img class="bnt prev" :src="require('@/assets/prev.png')" alt="prev button">
                    </a>
                </td>
                <td>
                    <div id="page">{{page}}</div>
                </td>
                <td>
                    <a :href="uri + '/' + nextPage" v-if="page < lastPage">
                        <img class="bnt next" :src="require('@/assets/next.png')" @click="nextPage()" alt="next button">
                    </a>
                </td>
                <td>
                    <a :href="uri + '/' + lastPage" v-if="page < lastPage">
                        <img class="bnt d_next" :src="require('@/assets/right-arrow.png')" alt="double next button">
                    </a>
                </td>
            </tr>
        </table>
        
    </div>
</template>

<script>
import {FRONT_BASE_URL} from "../../constants.js"

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
        this.uri = FRONT_BASE_URL + this.baseUri;
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
}

#page {
    font-size: 14px;
    height: 15px;
    display:inline-block;
}

table {
    width: 100px;
    border: none;
}

table tr td {
    height: 24px;
    border: none;
}

</style>