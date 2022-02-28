<template>
    <div class="container" style="padding-top: 32px;">
        <div class="profile" >
            <div style="line-height : 180px; text-align : center;">
                <img class="profile-img" :src="apiRes.avatarUrl">
            </div>
            <div class="profile-name">
                {{apiRes.name}}
                <button class="profile-bnt ib" @click="groupinfoModal = true"></button>
            </div>
            <div id="member-bnt">
                <button @click="modalshow=true" id="member-button">
                    <div class="memberChange" v-for="(index) in (memberLength>5 ? 5 : memberLength)" :key="index">
                        <img class="m-eclipse" :src="apiRes.users[index-1].avatarUrl">
                    </div>
                </button>
            </div>

            <MemberChange v-if="modalshow" @close="modalshow=false" class="modal-member" :authorId="apiRes.authorId" :members="apiRes.users" ></MemberChange>

            <div id="modal_background" v-if="groupinfoModal">
                <GroupUpdate id="update-modal" :groupinfoModal="groupinfoModal" :data="apiRes" @save="updateInfo" @close="groupinfoModal=false"></GroupUpdate>
            </div>
        </div>

        <div class="description">
            <div class="sub-title green">{{(apiRes.type == "CREW") ? '동아리' : '스터디'}} 소개</div>
            <div class="gray-bd" v-html="apiRes.description"></div>
            <ul>
                <li class="gray-bd list">공부 분야 : {{apiRes.field}}</li>
                <li class="gray-bd list">현재 인원 : {{apiRes.people}}명</li>
            </ul>
        </div>

        <div class="repository">
            <div>
                <div class="sub-title green ib">대표 레포지토리</div>
            </div>

            <div v-if="mainRepos.length == 0" style="padding-left:40px; padding-top:50px;">
                <div id="repo-blank">
                    <div>
                        등록할 레포지토리가 없습니다.<br>
                        github에서 첫 레포지토리를 만들어보세요.
                    </div>
                </div>
            </div>
            <template v-for="item in mainRepos" :key="item">
                <a :href="item.url" target="_blank">
                    <div class="box">
                        <div class="repo_title">{{item.name}}</div>
                        <div class="repo_content">{{(item.description == undefined) ? "github에서 레포지토리 설명을 추가해보세요." :item.description}}</div>
                        <div class="repo_lan"><div class="eclipse"></div>{{item.lang}}</div>
                        <div class="repo_public">Public</div>
                    </div>
                </a>
            </template>
            
            <div v-if="reposModal" id="modal_background"></div>
        </div>

    </div>
</template>

<script>
import MemberChange from "../../layout/post/MemberChange.vue"
import GroupUpdate from "../../layout/GroupUpdate.vue"

import {getGroup, updateGroup} from "../../../api/ApiGroups.js"

export default {
    components: {
        MemberChange,
        GroupUpdate
    },
    data() {
        return {
            apiRes : {},
            groupinfoModal:false,
            modalshow:false,
            modal: false,
            userId: localStorage.getItem("user"),
            reposModal : false,
            repos : [],
            mainRepos : [],
            memberLength : 0
        }
    },
    created() {
        getGroup(this.$route.params.id)
            .then(res => {
                this.apiRes = res.data;
                console.log(this.apiRes.reposList);
                if (this.apiRes.reposList != undefined) {
                    this.repos = this.apiRes.reposList;
                    this.mainRepos = this.repos.filter(x => x.main == true);
                    console.log("main!!");
                    console.log(this.mainRepos);
                }
                this.memberLength = this.apiRes.users.length;
            })
    },
    methods: {
        updateInfo(field, people, description, recruiting, recruitContent, list) {
            updateGroup(this.$route.params.id, field, people, description, recruiting, recruitContent, list)
            .then(res => {
                this.$router.go();
                return res.data;
            })
        }
    },
    mounted() {
        this.apiRes.description = String(this.apiRes.description).replaceAll("\n", "<br/>");
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

    margin: 30px 0;
}
.green {
    color: #8EB094;
}
a {
    text-decoration: none;
    color: black;
}

#modal_background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    top: 0px;
    left: 0px;
    background-color:rgba(0,0,0,.4);
}

#update-modal {
    position: absolute;
    width: 900px;
    height: 685px;
    left: 50%;
    margin-left: -450px;
    top: 50%;
    margin-top: -323px;
}

.profile {
    display: grid;
    grid-template-areas: "image name member";
    grid-template-columns: 2fr 2fr 6fr;
    
    width: 1200px;
    height: 180px;
    
    background: #EBEDF0;
}
.profile-img {
    grid-area: "image";
    width: 150px;
    height: 150px;
    border-radius: 70%;
    
    /* position: relative;
    left: 33px;
    vertical-align: middle; */
}
.profile-name {
    grid-area: "name";
    display: inline-block;
    line-height: 180px;
    /* position: relative;
    left: 60px; */
}

#member-bnt {
    grid-area: "member";
}

#member-button {
    /* position: relative;
    vertical-align: middle; */
    left: 200px;
    background: transparent;
    border: 0;
    line-height: 180px;
    float: right;
}
.memberChange {
    display: inline-flex;
}
.m-eclipse {
    width: 20px;
    height: 20px;
    border-radius: 70%;
    background:gray;
}
.modal-member {
    position: absolute;
    width: 300px;
    height: 390px;
    left: 1050px;
    top: 190px;
    z-index: 999;
}
.studyinfo-btn {
    position: relative;
    left: 875px;
    vertical-align: middle;
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
.profile-bnt {
    background: url("../../../assets/profile/pencil-square.svg");
    background-size: 100%;
    width:16px;
    height:16px;
    border: none;
    margin: auto
}

#repo-blank {
    height:120px;
    width:1160px;
    border: 1px solid lightgray;
    border-radius: 20px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
}
.box {
    width: 357px;
    height: 97px;
    background-color: white;
    border: 1px solid #A5A5A5;
    border-radius: 6px;
    display: inline-block;
    margin-right: 40px;
    
}
.repo_title {
    position: relative;
    top: 14px;
    left: 15px;
    font-size: 14px;
    font-weight: 800;
    color: #0969DA;
    width: 343px;
    margin: 0;
}
.repo_content {
    position: relative;
    top: 22px;
    left: 15px;
    font-size: 13px;
    font-weight: 400;
    width: 343px;
    margin: 0;
}

.repo_lan {
    position: relative;
    top: 30px;
    left: 19px;
    font-size: 12px;
    font-weight: 400;
    width: 300px;
    margin: 0;
}
.repo_public {
    width: 52px;
    height: 20px;
    background: #FFFFFF;
    border: 1px solid #A5A5A5;
    box-sizing: border-box;
    border-radius: 30px;
    position: relative;
    top: -46px;
    left: 291px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    font-weight: 700;
    color: #646464;
} 
#modal_background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    top: 0px;
    left: 0px;
    background-color:rgba(0,0,0,.4);
}
#mainRepos-selection {
    position : fixed !important;
    background-color:white;
    z-index: 90;
    width: 400px;
    height: 520px;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -260px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    border-radius: 4px;
}

.ib {
    display: inline-block;
}

</style>