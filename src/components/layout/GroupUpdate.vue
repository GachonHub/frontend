<template>
    <div v-if="groupinfoModal" class="groupinfoModal">
        <form>
            <div class="form-data">
                <label for="introduction" class="form-head">스터디 소개</label>
                <input type="text" id="introduction" class="form-control form-content" :value="study.content"/>
            </div>
            <div class="form-data">
                <label for="field" class="form-head">공부 분야</label>
                <input type="text" id="field" class="form-control form-content" :value="study.fields"/>
            </div>
            <div class="form-data">
                <label for="member_num" class="form-head">현재 인원</label>
                <input type="text" id="member_num" class="form-control form-content" :value="study.member"/>
            </div>

            <label>레포지토리 설정</label>
            <MainRepos style="height:200px; overflow-y:scroll;"></MainRepos>

            <div class="form-data">
                <label for="recruit" class="form-head">스터디원 모집글</label>
                <input type="text" id="recruit" class="form-control form-content" :value="study.recruitContent"/>
            </div>
        </form>
        <div class="form-button">
            <button class="form-control" id="custom-bnt" @click="deleteInfo()">삭제</button>
            <button class="form-control" id="custom-bnt" @click="save()">작성</button>
        </div>
    </div>
</template>

<script>
import MainRepos from "../layout/profile/MainRepos.vue"
export default {
    components:{
        MainRepos
    },
    props:{
        groupinfoModal:Boolean,
        study:Object
    },
    data() {
        return {
            form:{},
            selectedReposList: [],
            count : 0,
            repos : [
                {
                    "id" : 1,
                    "name" : "gachonhub",
                    "description" : "gachonhub 개발을 위한 백엔드 레포지토리",
                    "lang" : "java",
                    "check" : true
                },
                {
                    "id" : 5,
                    "name" : "gachonhub",
                    "description" : "gachonhub 개발을 위한 백엔드 레포지토리",
                    "lang" : "java",
                    "check" : false
                },
                {
                    "id" : 7,
                    "name" : "gachonhub",
                    "description" : "gachonhub 개발을 위한 백엔드 레포지토리",
                    "lang" : "java",
                    "check" : false
                },
                {
                    "id" : 9,
                    "name" : "gachonhub",
                    "description" : "gachonhub 개발을 위한 백엔드 레포지토리",
                    "lang" : "java",
                    "check" : true
                },
                {
                    "id" : 33,
                    "name" : "gachonhub",
                    "description" : "gachonhub 개발을 위한 백엔드 레포지토리",
                    "lang" : "java",
                    "check" : false
                },
                {
                    "id" : 44,
                    "name" : "gachonhub",
                    "description" : "gachonhub 개발을 위한 백엔드 레포지토리",
                    "lang" : "java",
                    "check" : false
                },
                {
                    "id" : 99,
                    "name" : "gachonhub",
                    "description" : "gachonhub 개발을 위한 백엔드 레포지토리",
                    "lang" : "java",
                    "check" : false
                }
            ]
        }
    },
    methods: {
        deleteInfo() {
            this.$router.push("/");
        },
        save() {
            var intro_content = document.getElementById("introduction").value;
            var recruit_content = document.getElementById("recruit").value;
            console.log(intro_content);
            console.log(recruit_content);
            this.$router.go();
        }
        
    }
}
</script>

<style scoped>
.groupinfoModal {
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    position:absolute; 
    z-index:999;
}
form {
    padding: 50px;
}
input {
    width: 500px;
    min-height: 38px;
    /* word-break: break-all;
    overflow: scroll; */
}
button {
    width: 50%;
    display: inline-block;
    border-radius: 0;

    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>