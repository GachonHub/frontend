<template>
    <div class="profile">
        <div class="container">
            <div class="info">
                <div class="profile_image"></div>
                <div v-bind:key="info" class="profile_name">{{info.name}}</div>
                <div v-bind:key="info" class="profile_major">{{info.major}}</div>
                <div v-bind:key="info" class="profile_content">{{info.content}}</div>
            </div>
            <div class="repo">
                <div class="title repository_title">메인 저장소 🗂</div>
                <div v-bind:key="repo1" class="box box1">
                    <div class="repo_title">{{repo1.title}}</div>
                    <div class="repo_content">{{repo1.content}}</div>
                    <div class="repo_lan"><div class="eclipse"></div>{{repo1.lan}}</div>
                    <div class="repo_public">Public</div>
                </div>
                <div v-bind:key="repo2" class="box box2">
                    <div class="repo_title">{{repo2.title}}</div>
                    <div class="repo_content">{{repo2.content}}</div>
                    <div class="repo_lan"><div class="eclipse"></div>{{repo2.lan}}</div>
                    <div class="repo_public">Public</div>
                </div>
                <div v-bind:key="repo3" class="box box3">
                    <div class="repo_title">{{repo3.title}}</div>
                    <div class="repo_content">{{repo3.content}}</div>
                    <div class="repo_lan"><div class="eclipse"></div>{{repo3.lan}}</div>
                    <div class="repo_public">Public</div>
                </div>
            </div>
            <div class="grass">
                <div class="title grass_title">잔디 🌿</div>
                <CommitTable class="commit_table"/>
            </div>
        </div>
    </div>
</template>

<script>
import CommitTable from '../layout/CommitTable.vue'
export default {
    components:{
        CommitTable
    },
    data() {
        return {
            info: {
                name:"Robot Ta",
                major:"컴퓨터공학과",
                content:"제가 바로 보안의 미래입니다. 보안의 미래"
            },
            repo1: {
                title: "everything",
                content: "테스트 코드 저장을 위한 저장소",
                lan: "HTML"
            },
            repo2: {
                title: "anything",
                content: "데모 코드 저장을 위한 저장소",
                lan:"HTML, CSS"
            },
            repo3: {
                title: "something",
                content: "테스트, 데모버전",
                lan:"C"
            }
        }
    },
}
</script>

<style scoped>
.profile {
    width: 100%;
}
.container {
    width: 1200px;
    margin: 0 auto;
}
.info {
    width: 100%;
    height: 250px;
    background-image: 
    url(https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80);
    background-size: 1200px;
    background-position: center;
}
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
}
.profile_name {
    color: white;
    font-size: 18px;
    font-weight: 800;
    position: relative;
    top: -88px;
    left: 306px;
    
}
.profile_major {
    color: #595959;
    font-size: 16px;
    font-weight: 800;

    position: relative;
    left: 305px;
    top: -82px;
}
.profile_content {
    color: white;
    font-size: 22px;
    font-weight: 600;

    position: relative;
    left: 610px;
    top: -114px;
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
    top: 88px;
    left: 5px;
}
.repo_title {
    position: relative;
    top: 16px;
    left: 15px;
    font-size: 14px;
    font-weight: 800;
    color: #0969DA;
}
.repo_content {
    position: relative;
    top: 28px;
    left: 15px;
    font-size: 13px;
    font-weight: 400;
}
.repo_lan {
    position: relative;
    top: 37px;
    left: 19px;
    font-size: 12px;
    font-weight: 400;
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
    top: 121px;
    left:20px;
}
.box2 {
    position: relative;
    top: 121px;
    left: 70px;
}
.box3 {
    position: relative;
    top: 121px;
    left: 120px;
}

.grass {
    width: 100%;
    height: 407px;
}
.grass_title {
    position: relative;
    top: 101px;
    left: 17px;
}
.commit_table {
    position: relative;
    top: 153px;
    left: 50px;
}

</style>