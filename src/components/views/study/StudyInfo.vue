<template>
    <div class="container">
        <div class="profile">
            <img class="profile-img" :src="study.img">
            <div class="profile-name">{{study.name}}</div>
        </div>
        <div class="description">
            <div class="sub-title green">동아리 소개</div>
            <div class="gray-bd" v-html="toContent"></div>
            <ul>
                <li class="gray-bd list">공부 분야 : {{study.fields}}</li>
                <li class="gray-bd list">현재 인원 : {{study.member}}명</li>
            </ul>
        </div>
        <div class="repository">
            <div class="sub-title green">대표 레포지토리</div>
        </div>
        <div class="recruit">
            <div class="sub-title black ib">모집 여부</div>
            <Switch class="switch ib" :recruit="study.recruit"></Switch>
            <div class="recruit-content" v-html="toRecruit"></div>
        </div>
    </div>
</template>

<script>
import Switch from "../../layout/common/switch.vue"

export default {
    components: {
        Switch
    },
    data() {
        return {
            study: {
                img: require("/Users/ljiun/frontend/src/assets/pay1oad.jpeg"),
                name: "Pay1oad",
                content: "가천대학교 정보 * 보안 동아리입니다.\n"+
                        "동아리실은 학생회관 1층 101호에 위치하고 있습니다.",
                fields: "정보보안",
                member: "90",
                recruit: true,
                recruitContent: "지원 자격 : 16학번~22학번\n"+
                                "모집 기간 : 2022/01/01 ~ 2022/02/01\n"+
                                "payload 인스타그램 : instargram/pay1oad\n"
            }
        }
    },
    computed: {
            toContent() {
            return this.study.content.replaceAll("\n", "<br/>")
            },
            toRecruit() {
                return this.study.recruitContent.replaceAll("\n", "<br/>")
            }
    }
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0;
}
/* profile */
.sub-title {
    font-size: 18px;
    font-weight: bold;

    margin: 10px 0;
}
.green {
    color: #8EB094;
}
.profile {
    margin-top: 72px;
    
    width: 1200px;
    height: 180px;
    
    background: #EBEDF0;
}
.profile-img {
    width: 150px;
    height: 150px;
    border-radius: 70%;
    
    position: relative;
    left: 33px;
    vertical-align: middle;
}
.profile-name {
    display: inline-flex;
    line-height: 180px;
    position: relative;
    left: 60px;
}
/* description */
.content {
    width:1200px;
    
}
.gray-bd {
    border: 2px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 15px;
}
ul {
    padding: 0;
    margin: 0;
}
li {
    list-style:none;
    display: inline-block;
    margin-top: 5px;
    margin-right: 5px;
}
/* repository */
/* recruit */

.black {
    color: black;
}
.ib {
    display: inline-block;
}
.switch {
    position: relative;
    top: 3px;
    left: 10px;
}
.recruit-content {
    width: 1200px;
    min-height: 170px;
    background: #EBEDF0;
    border-radius: 10px;  
    padding: 10px 10px;  
}
</style>