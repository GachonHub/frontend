<template>
    <div class="profile">
        <div class="info">
            <div class="profile_image"><img id="profileImage" :src="this.info.avatarUrl" alt=""></div>
            <div class="profile_name">{{this.info.name}}</div>
            <div class="profile_major">{{this.info.major}}</div>
            <div class="profile_content">{{this.info.description}}</div>
        </div>
        <div class="repo">
            <div class="title repository_title">메인 저장소 🗂</div>
            <div v-for="item in repos" v-bind:key="item" class="box">
                <div class="repo_title">{{item.title}}</div>
                <div class="repo_content">{{item.content}}</div>
                <div class="repo_lan"><div class="eclipse"></div>{{item.lan}}</div>
                <div class="repo_public">Public</div>
            </div>
        </div>
        <div class="grass">
            <div class="title grass_title">잔디 🌿</div>
            <CommitTable class="commit_table"/>
        </div>
    </div>
</template>

<script>
import CommitTable from '../layout/CommitTable.vue'
import {apiGetRequest} from "../../api/ApiCommon.js"

export default {
    components:{
        CommitTable
    },
    data() {
        return {
            info : Array,
            repos : Array
        }
    },
    created() {
        apiGetRequest("/api/me?id=" + this.$route.params.id)
            .then(res => {
                this.info = res.data;
                this.repos = res.data.repos;
            })
            .catch(err => {
                if (err.response.status == 400) {
                    alert("로그인을 해주세요.");
                    this.$router.push("/");
                }
            })
    }
}
</script>

<style scoped>

.profile {
    max-width: 1200px;
    min-width: 1200px;
    padding: 0;
    margin: auto;
}

.info {
    max-width: 100%;
    height: 250px;
    background-image: 
    url(https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80);
    background-size: 1200px;
    background-position: center;
}
/* 
.profile_image {
    width: 183px;
    height: 183px;
    border-radius: 100%;
    transform: scaleX(-1);

    background-image: 
    url(https://images.unsplash.com/photo-1638957319391-9b81b996afca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80);
    background-size: 250px;
    background-position: center;
    
    position: relative;
    top: 33px;
    left: 51px;
} */


#profileImage {
    width: 183px;
    height: 183px;
    border-radius: 100%;
    transform: scaleX(-1);
    background-size: 250px;
    background-position: center;
    position: relative;
    top: 33px;
    left: 51px;
}

.profile_name {
    color: white;
    font-size: 18px;
    font-weight: 800;
    position: relative;
    top: -88px;
    left: 306px;
    width: 20%;
    
}
.profile_major {
    color: #595959;
    font-size: 16px;
    font-weight: 800;
    width: 20%;

    position: relative;
    left: 305px;
    top: -82px;
}
.profile_content {
    color: white;
    font-size: 22px;
    font-weight: 600;
    width: 40%;

    position: relative;
    left: 610px;
    top: -114px;
}


.box {
    position: relative;
    top: 100px;
    margin-left: 40px;
}
.title {
    font-size: 22px;
    font-weight: 700;
    color: black;
}
.repo {
    width: 100%;
    height: 260px;
    background-color: white;
}
.repository_title {
    position: relative;
    top: 67px;
    left: 5px;
    width: 20%;
}
.repo_title {
    position: relative;
    top: 16px;
    left: 15px;
    font-size: 14px;
    font-weight: 800;
    color: #0969DA;

    width: 343px;
    margin: 0;
}
.repo_content {
    position: relative;
    top: 28px;
    left: 15px;
    font-size: 13px;
    font-weight: 400;

    width: 343px;
    margin: 0;
}
.repo_lan {
    position: relative;
    top: 37px;
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
    top: -38px;
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
    height: 407px;
}
.grass_title {
    position: relative;
    top: 70px;
    left: 17px;
    width: 20%;
}
.commit_table {
    position: relative;
    top: 90px;
    left: 50px;
    width: 1110px;
    height: 177px;
}

</style>