<template>
    <div class="ranking">
        <div class="container">
            <Title title="랭킹 👑" isSecondaryExists="False"></Title>
            
                <div id="personal">
                    
                    <div class="superb">
                        <button id="personal_btn" @click="personalR()"><div>Personal</div></button>
                        <button id="group_btn" @click="groupR()"><div>Group</div></button>
                        <!-- 1위 -->
                        <div class="first">
                            <h1 class="first_rank_area">1위</h1>
                            <h1 class="first_id_area">{{first.nickname}}</h1>
                        </div>
                        <hr class="line01">
                        <div class="first_info">
                            <div class="accumulate_commits">
                                <h2 class="first_accumulate_title">누적 커밋 수</h2>
                                <h3 class="first_accumulate_data">{{(first.commit == null) ? 0 : first.commit}}</h3>
                            </div>
                            <hr class="line02">
                            <div class="previous_commits">
                                <h2 class="first_previous_title">전일 커밋 수</h2>
                                <h3 class="first_previous_data">{{(first.lastCommit == null) ? 0 : first.lastCommit}}</h3>
                            </div>
                        </div>
                        <!-- 2위 ~ 5위 -->
                        <div v-for="(item, index) in mainList" :key="item">
                            <div class="second">
                                <div  class="second_rank_area">{{index+2}}위</div>
                                <div class="second_id_area">{{item.nickname}}</div>
                                <div class="second_info">
                                    <div class="accumulate_commits">
                                        <div class="second_accumulate_title">누적 커밋 수</div>
                                        <div class="second_accumulate_data">{{(item.commit == undefined) ? 0 : item.commit}}</div>
                                    </div>
                                    <hr class="line03">
                                    <div class="previous_commits">
                                        <div class="second_previous_title">전일 커밋 수</div>
                                        <div class="second_previous_data">{{(item.lastCommit == undefined) ? 0 : item.lastCommit}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- 6위 ~ -->
                    </div>
                    <div class="others">
                        <div class="others_table_title">
                            <div class="others_rank_title">순위</div>
                            <div class="others_id_title">아이디</div>
                            <div class="others_commitsNprevious_title">누적 커밋 수 (전일대비)</div>
                        </div>
                        <div v-for="(item,index) in apiRes.splice(6, 15)" v-bind:key="index">
                            <div v-if="item.rank>=6"
                                class="others_table_items">
                                <div class="others_rank_items">{{item.rank}}</div>
                                <div class="others_id_items">{{item.id}}</div>
                                <div class="others_commitsNprevious_items">{{item.commits}} (+{{item.previous}})</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import {getCommitRank} from "../../api/ApiGithub.js"
import Title from "../layout/common/Title.vue"

export default {
    components: {
        Title
    },
    data() {
        return {
            first:{},
            apiRes : [],
            mainList : [],
            personal: [
                    {rank:1,id:'jaeesu',commits:1234,previous:234},
                    {rank:2,id:'tearofglass',commits:1234,previous:234},
                    {rank:3,id:'tearofglass',commits:1234,previous:234},
                    {rank:4,id:'tearofglass',commits:1234,previous:234},
                    {rank:5,id:'tearofglass',commits:1234,previous:234},
                    {rank:6,id:'tearofglass',commits:1234,previous:234},
                    {rank:7,id:'tearofglass',commits:1234,previous:234},
                    {rank:8,id:'tearofglass',commits:1234,previous:234},
                    {rank:9,id:'tearofglass',commits:1234,previous:234},
                    {rank:10,id:'tearofglass',commits:1234,previous:234},
                    {rank:11,id:'tearofglass',commits:1234,previous:234},
                    {rank:12,id:'tearofglass',commits:1234,previous:234},
                    {rank:13,id:'tearofglass',commits:1234,previous:234},
                    {rank:14,id:'tearofglass',commits:1234,previous:234},
                    {rank:15,id:'tearofglass',commits:1234,previous:234},
                    {rank:16,id:'tearofglass',commits:1234,previous:234},
                    {rank:17,id:'tearofglass',commits:1234,previous:234},
                    {rank:18,id:'tearofglass',commits:1234,previous:234},
                    {rank:19,id:'tearofglass',commits:1234,previous:234},
                    {rank:20,id:'tearofglass',commits:1234,previous:234}
                ],
                group:[
                    {rank:1,id:'Pay1oad',commits:1234,previous:234},
                    {rank:2,id:'Pay1oad',commits:1234,previous:234},
                    {rank:3,id:'Pay1oad',commits:1234,previous:234},
                    {rank:4,id:'Pay1oad',commits:1234,previous:234},
                    {rank:5,id:'Pay1oad',commits:1234,previous:234},
                    {rank:6,id:'Pay1oad',commits:1234,previous:234},
                    {rank:7,id:'Pay1oad',commits:1234,previous:234},
                    {rank:8,id:'Pay1oad',commits:1234,previous:234},
                    {rank:9,id:'Pay1oad',commits:1234,previous:234},
                    {rank:10,id:'Pay1oad',commits:1234,previous:234},
                    {rank:11,id:'Pay1oad',commits:1234,previous:234},
                    {rank:12,id:'Pay1oad',commits:1234,previous:234},
                    {rank:13,id:'Pay1oad',commits:1234,previous:234},
                    {rank:14,id:'Pay1oad',commits:1234,previous:234},
                    {rank:15,id:'Pay1oad',commits:1234,previous:234},
                    {rank:16,id:'Pay1oad',commits:1234,previous:234},
                    {rank:17,id:'Pay1oad',commits:1234,previous:234},
                    {rank:18,id:'Pay1oad',commits:1234,previous:234},
                    {rank:19,id:'Pay1oad',commits:1234,previous:234},
                    {rank:20,id:'Pay1oad',commits:1234,previous:234},
                ]
        }
        
    }, 
    methods: {
        personalR() {
            this.mainList = this.personal;
            document.getElementById("personal_btn").style.background = "#717171";
            document.getElementById("personal_btn").style.color = "white";
            document.getElementById("group_btn").style.background = "white";
            document.getElementById("group_btn").style.color = "#717171";
        },
        groupR() {
            this.mainList = this.group;
            document.getElementById("group_btn").style.background = "#717171";
            document.getElementById("group_btn").style.color = "white";
            document.getElementById("personal_btn").style.background = "white";
            document.getElementById("personal_btn").style.color = "#717171";
        }
    },
    created() {
        getCommitRank()
        .then(res => {
            this.apiRes = res;
            if(this.apiRes[0] != undefined) {
                this.first = this.apiRes[0];
            }
            this.mainList = [];
            for (var i = 1; i < 5; i++) {
                if (i < this.apiRes.length) {
                    this.mainList.push(this.apiRes[i]);
                } else{
                    this.mainList.push({
                        id : "",
                        nickname : "",
                        commit : "",
                        lastCommit : ""
                    })
                }
            }
        })
        
    },
}


</script>

<style scoped>
.container {
    max-width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
}
#personal {
    display: block;
}
#group {
    display: none;
}

#personal_btn {
    position: relative;
    top:-143px;
    left: 105px;

    width: 101px;
    height: 27px;
    background: #717171;
    color: white;
    border: 2px solid #717171;
    box-sizing: border-box;
    border-radius: 5px 0px 0px 5px;
}
#personal_btn > div {
    /* line-height: 23px; */
}
#group_btn {
    position: relative;
    top:-143px;
    left: 103px;

    width: 101px;
    height: 27px;
    background: white;
    color: #717171;
    border: 2px solid #717171;
    box-sizing: border-box;
    border-radius: 0px 5px 5px 0px;
}
.superb {
    width: 100%;
    height: 290px;
    /* float: left; */
    background-image: 
    url(https://images.unsplash.com/photo-1551651057-f3f83700a831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
    background-size: 1200px;
    background-position: center;
    
}

/* superb */
.first {
    display: inline-block;
    width: 208px;
    height: 193px;
    background: rgba(75, 116, 121, 0.77);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    position: relative;
    top: 76px;
    left: -100px;
}
.first_rank_area {
    width: 52px;
    height: 75px;
    background-color: #52C9BC;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    color: #27524F;
    font-weight: 800;
    line-height: 75px;
    text-align: center;
}
.first_id_area {
    position: absolute;
    top: 113px;

    color: #FFFFFF;
    width: 208px;
    text-align: center;
    font-weight: 800;
}

.first_info {
    display: inline-block;
    width: 208px;
    height: 193px;
    background: rgba(75, 116, 121, 0.77);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    position: relative;
    top: 76px;
    left: -100px;
}
.first_accumulate_title {
    position: absolute;
    top: 36px;
    width: 193px;
    text-align: center;

    color: #CCE8DF;
    font-weight: 700;
}
.first_accumulate_data {
    position: absolute;
    top: 63px;
    width: 193px;
    text-align: center;

    color: #FFFFFF;
    font-weight: 800;
}
.first_previous_title {
    position: absolute;
    top: 121px;
    width: 193px;
    text-align: center;

    color: #CCE8DF;
    font-weight: 700;
}
.first_previous_data {
    position: absolute;
    top: 148px;
    width: 193px;
    text-align: center;

    color: #FFFFFF;
    font-weight: 800;
}

.second {
    display: inline-block;
    width: 537px;
    height: 46px;
    background-color: #569A8E;
    border-radius: 5px;
    
    position: relative;
    top: -130px;
    left: 548px;
}
.second_rank_area {
    width: 68px;
    height: 31px;
    position: absolute;
    top: 8px;
    background-color: #4B7479;

    font-size: 17px;
    font-weight: 800;
    color: white;
    line-height: 31px;
    text-align: center;
}
.second_id_area {
    font-size: 16px;
    font-weight: 800;
    color: white;
    line-height: 46px;

    position: absolute;
    left: 79px;
}
.second_accumulate_title {
    font-size: 10px;
    font-weight: 700;
    color: #CCE8DF;

    position: absolute;
    top: 11px;
    left: 335px;
}
.second_accumulate_data {
    font-size: 14px;
    font-weight: 800;
    color: white;
    
    position: absolute;
    top: 25px;
    left: 344px;
}
.second_previous_title {
    font-size: 10px;
    font-weight: 700;
    color: #CCE8DF;

    position: absolute;
    top: 11px;
    left: 435px;
}
.second_previous_data {
    font-size: 14px;
    font-weight: 800;
    color: white;

    position: absolute;
    top: 25px;
    left: 446px;
}

/* others */
.others {
    width: 100%;

    position: relative;
    z-index: 1;
}
.others_table_title {
    width: 100%;
    height: 42px;
    background-color: #9EC6BA;

    position: relative;
    top: 0;
    z-index: 10;

    line-height: 42px;
    font-size: 18px;
    font-weight: 800;
    color: #FFFFFF;
}
.others_rank_title, .others_rank_items {
    display: inline-block;
    position: absolute;
    left: 74px;
    line-height: 42px;

}
.others_id_title, .others_id_items {
    display: inline-block;
    position: absolute;
    left: 305px;
    width:387px;
    text-align: center;
    line-height: 42px;
}
.others_commitsNprevious_title, .others_commitsNprevious_items {
    display: inline-block;
    position: absolute;
    left: 813px;
    width:387px;
    text-align: center;
    line-height: 42px;
}
/* others items */
.others_table_items {
    width: 100%;
    height: 42px;
    background-color: #EBEDF0;

    position: relative;
    top: 0px;
    margin-top: 20px;

    font-size: 16px;
    font-weight: 800;
    color: #A4A4A4;
}

/* line */
.line01 {
    width: 0.1px;
    height: 159px;
    background: #90B6B8;
    margin: 0;
    border: 0;

    position: absolute;
    left: 324px;
    top: 88px;
    z-index: 10;
}.line02 {
    width: 160px;
    height: 0.1px;
    background-color: #90B6B8;
    margin: 0;
    border: 0;

    position: absolute;
    left: 25px;
    top: 97px;
    z-index: 10;
}
.line03 {
    width: 0.1px;
    height: 30px;
    background-color: #8CC3CA;
    border: 0;

    position: absolute;
    top: 0px;
    left: 411px;
}
/* font size */
h1 {
    font-size: 22px;
    margin: 0;
}
h2 {
    font-size: 12px;
    margin: 0;
}
h3 {
    font-size: 16px;
    margin: 0;
}
</style>