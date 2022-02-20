<template>
    <div>
        <div class="title">{{contest.title}}</div>

        <div class="post-info">
            <table>
                <td >작성자</td>
                <td class="bd-l">{{contest.writer}}</td>
                <td class="bd-l">작성일</td>
                <td class="bd-l">{{contest.date}}</td>
                <td class="bd-l w-820"></td>
                <td class="bd-l">조회수 10</td>
            </table>
        </div>

        <div class="contents">
            <img class="cont-img content-left" :src="contest.img">
            <div class="content-right" v-html="toContet"></div>
        </div>
        <hr>
        <div class="more">
            <div class="sub-title">다른 공모전</div>
            <div class="box" v-for="item in more" :key="item">
                <img class="box-img" :src="item.img">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        contest : Object,
        more : Array
    },
    computed: {
        toContet() {
            return this.contest.content.replaceAll("\n", "<br/>")
        }
    }
}
</script>
<style scoped>
/* title */
.title {
    height: 100px;
    line-height: 100px;
    text-align: center;

    font-weight: 400;
    font-size: 20px;
}
/* post-info */
table {
    border-top: 0.5px solid #b2b2b2;
    border-bottom: 0.5px solid #b2b2b2;
    text-align: center;

    font-weight: 500;
    font-size: 14px;
}
table td {
    border: 0;
}
.w-820 {
    width: 820px;
}
.bd-l {
    border-left: 0.5px solid #b2b2b2;
}
/* contents */
.contents {
    margin-top: 36px;
    margin-bottom: 36px;
    display: inline-flex;
}
.cont-img {
    width: 247px;
    height: 330px;

    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
}
.content-left {
    width: 247px;
    margin-right: 50px;
}
/* hr */
hr {
    margin: 0;
}
/* more */
.sub-title {
    line-height: 85px;
    height: 85px;

    font-weight: 500;
    font-size: 14px;
}
.box {
    display: inline-flex;
}
.box-img {
    width: 164px;
    height: 217px;
    margin-right: 7px;  

    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
}
</style>