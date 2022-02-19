<template>
    <div class="container" style="padding-top: 32px;">
        <div class="profile" >
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
            <div>
                <div class="sub-title green ib">대표 레포지토리</div>
                <button class="profile-bnt ib" id="repos-bnt" @click="reposModal = true"></button>
            </div>

            <div v-if="repos.length == 0" style="padding-left:40px; padding-top:50px;">
                <div id="repo-blank">
                    <div>
                        등록할 레포지토리가 없습니다.<br>
                        github에서 첫 레포지토리를 만들어보세요.
                    </div>
                </div>
            </div>
            <div v-for="item in repos" v-bind:key="item" class="box">
                <div class="repo_title">{{item.title}}</div>
                <div class="repo_content">{{item.content}}</div>
                <div class="repo_lan"><div class="eclipse"></div>{{item.lan}}</div>
                <div class="repo_public">Public</div>
            </div>
            
            <div v-if="reposModal" id="modal_background">
                <MainRepos id="mainRepos-selection" @close="reposModal = false"></MainRepos>
            </div>
        </div>


        <div class="recruit">
            <div class="sub-title black ib">모집 여부</div>
            <Switch class="switch ib" :recruit="study.recruit"></Switch>
            <div class="recruit-content" v-html="toRecruit"></div>
        </div>
    </div>
</template>

<script>
import MainRepos from "../../layout/profile/MainRepos.vue"
import Switch from "../../layout/common/switch.vue"


export default {
    components: {
        MainRepos,
        Switch
    },
    data() {
        return {
            reposModal : false,
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
            },
            repos: [
                {
                    title: "everything",
                    content: "테스트 코드 저장을 위한 저장소",
                    lan: "HTML"
                },
                {
                    title: "anything",
                    content: "데모 코드 저장을 위한 저장소",
                    lan:"HTML, CSS"
                },
                {
                    title: "something",
                    content: "테스트, 데모버전",
                    lan:"C"
                }
            ]
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
    /* margin-top: 72px; */
    
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
.profile-bnt {
    background: url("../../../assets/profile/pencil-square.svg");
    background-size: 100%;
    width:16px;
    height:16px;
    border: none;
    margin: auto
}
#repos-bnt {
    position: relative;
    left: 10px;
    z-index: 40;
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