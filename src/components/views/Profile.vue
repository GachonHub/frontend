<template>
    <div class="profile">
        <Snsbar id="sns-bar" :snsList="data.sns" :groupList="data.groups"></Snsbar>
        <div id="user" :style="{backgroundImage : `url(${back})`}">
            <div class="user-img">
                <img class="profile_image" :src="this.data.avatarUrl" alt="">
            </div>
            
            <div class="user-info">
                <div style="margin-left:-30px; margin-right:30px;">
                    <div style="background:white; width:80px; height: 80px; margin:10px; text-align:center; border-radius:10px; opacity:70%; color: #595959; font-size: 16px; font-weight: 800;">
                        <p style="line-height:40px;" class="profile_rank">rank</p>
                        <p style="line-height:30px;" class="profile_rank">{{rank}}</p>
                    </div>
                    <div style="background:white; width:80px; height: 80px; margin:10px; text-align:center; border-radius:10px; opacity:70%; color: #595959; font-size: 16px; font-weight: 800;">
                        <p style="line-height:40px;"  class="profile_commits">commits</p>
                        <p style="line-height:30px;" class="profile_commits">{{commits}}</p>
                    </div>
                </div>
                <div>
                    <p class="profile_name">{{this.data.nickname}}
                        <button class="profile-bnt" @click="modal = true"></button>
                    </p>
                    <p class="profile-etc" v-if="this.data.major"><i class="bi bi-book"></i>{{this.data.major}}</p>
                    <p class="profile-etc" v-if="this.data.company"><i class="bi bi-building"></i>{{this.data.company}}</p>
                    <p class="profile-etc" v-if="this.data.graduate"><i class="bi bi-mortarboard"></i>{{(this.data.graduate) ? "졸업" : "재학"}}</p>
                    
                </div>
            </div>
            <div  v-if="modal" id="modal_background">
                <ProfileInfo id="info-modal" title="프로필 수정" :info="data"
                    @close="modal=false" @save="updateProfile"></ProfileInfo>
            </div>

            <div class="user-description">
                <div class="profile_content">{{this.data.description}}</div>
            </div>
            
        </div>

        <div class="repo">
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
            <template v-for="item in mainRepos" v-bind:key="item">
                <a :href="item.url" target="_blank">
                    <div class="box">
                        <div class="repo_title">{{item.name}}</div>
                        <div class="repo_content">{{(item.description == undefined) ? "github에서 레포지토리 설명을 추가해보세요." :item.description}}</div>
                        <div class="repo_lan"><div class="eclipse"></div>{{item.lang}}</div>
                        <div class="repo_public">Public</div>
                    </div>
                </a>
            </template>
            
        </div>
        
        <div class="grass">
            <div class="title grass_title">잔디 🌿</div>
            <CommitTable class="commit_table"/>
        </div>
    </div>
</template>

<script>
import CommitTable from '../layout/CommitTable.vue'
import Snsbar from "../layout/profile/Snsbar.vue"
import ProfileInfo from "../layout/profile/ProfileInfo.vue"


import {updateUserInfo} from "../../api/ApiUser.js"
import {getUserInfo} from "../../api/ApiUser.js"

export default {
    components:{
        CommitTable,
        Snsbar,
        ProfileInfo
    },
    data() {
        return {
            mainRepos : [],
            modal : false,
            back : "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            data : {},
            commits:1234,
            rank: 1,
        }
    },
    methods : {
        readProfile() {
            getUserInfo(this.$route.params.id)
            .then(res => {
                this.snsList = res.sns;
                this.data = res;
                this.mainRepos = this.data.repos.filter(x => x.main == true);
                this.back = (this.data.back) ? this.data.back : this.back;
            })
            .catch(err => {
                console.log(err.message);
                if (err.response.status == 401) {
                    alert("로그인을 해주세요.");
                    this.$router.push("/");
                }
            })
        },
        updateProfile(major, graduate, sns, list) {
            updateUserInfo(major, graduate, sns, list)
            .then(res => {
                this.$router.go();
                return res;
            })
        },

    },
    created() {
        this.readProfile();
    }
}
</script>

<style scoped>
i {
    padding: 5px;
}
.profile {
    max-width: 1200px;
    min-width: 1200px;
    padding: 0;
    margin: auto;
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

#info-modal {
    position: absolute !important;
    top: 50%;
    margin-top: -300px;
    border: 1px solid #cccccc;
    /* box-shadow: 5px 5px 5px 5px lightgray; */
    border-radius: 10px;
    height: 600px;
    width: 800px;
    z-index: 30;
    left: 50%;
    margin-left: -400px;
    background-color: white;
}

.profile-bnt {
    background: url("../../assets/profile/pencil-square.svg");
    background-size: 100%;
    width:16px;
    height:16px;
    border: none;
    margin: auto
}

#repos-bnt {
    position: relative;
    bottom: 33px;
    left: 145px;
    z-index: 40;
    background: url("../../assets/profile/pencil-square.svg");
    background-size: 100%;
    width:16px;
    height:16px;
    border: none;
    margin: auto
}

#sns-bar {
    position: absolute;
    left: calc(50% + 620px);
    
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

#mainRepos-selection::-webkit-scrollbar {
    display: none;
}

#user {
    width: 100%;
    height: 250px;
    background-size: 1200px;
    background-position: center;
    display: grid;
    grid-template-columns: 2.25fr 2.25fr 5fr;
    grid-template-areas: "img info * description";
}

.user-img {
    grid-area: "img";
    text-align: center;
    line-height: 250px;
}

p {
    margin: 0;
}

.user-info {
    grid-area: "info";
    text-align: left;
    padding-left: 20px;
    display: flex;
    align-items: center;

}

.user-description {
    grid-area: "description";
    text-align: center;
    line-height: 250px;
}

.profile_image {
    width: 183px;
    height: 183px;
    border-radius: 100%;
    transform: scaleX(-1);
    background-size: 250px;
    background-position: center;
}

.profile_name {
    color: white;
    font-size: 18px;
    font-weight: 800;
    
}
.profile-etc {
    color: #595959;
    font-size: 16px;
    font-weight: 800;
}

.profile_content {
    color: white;
    font-size: 22px;
    font-weight: 600;
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
.title {
    font-size: 22px;
    font-weight: 700;
    color: black;
}
.repo {
    width: 100%;
    height: 260px;
    padding-top: 65px;
    padding-left: 5px;
    background-color: white;
}

.sub-title {
    font-size: 18px;
    font-weight: bold;

    margin: 30px 0;
}
.green {
    color: #8EB094;
}
.ib {
    display: inline-block;
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
.eclipse {
    display: inline-block;
    position: relative;
    top: 1px;
    left: -3px;
    width: 10px;
    height: 10px;
    border: 0;
    border-radius: 100%;
    background-color: #FF0000;
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
.box1{
    position: relative;
    top: 100px;
    left:20px;
}
.box2 {
    position: relative;
    top: 100px;
    left: 70px;
}
.box3 {
    position: relative;
    top: 100px;
    left: 120px;
}

.grass {
    width: 100%;
    padding-top: 70px;
    height: 400px;
}
.grass_title {
    width: 20%;
}
.commit_table {
    position: relative;
    top: 90px;
    left: 50px;
    width: 1110px;
    height: 177px;
}

a {
    text-decoration: none;
    color: black;
}

</style>