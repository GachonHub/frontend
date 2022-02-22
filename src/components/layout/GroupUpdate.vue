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
            
            <div class="form-data">
                <label for="recruit" class="form-head">스터디원 모집글</label>
                <input type="text" id="recruit" class="form-control form-content" :value="study.recruitContent"/>
            </div>

            <label class="form-head">레포지토리 설정</label>
            <div class="repo-description">메인 레포지토리는 최대 3개까지 선택할 수 있습니다.</div>
            <MainRepos style="width: 500px; height:250px; overflow-y:scroll;"></MainRepos>

            
        </form>
        <div class="form-button">
            <button class="form-control delete" id="custom-bnt" @click="deleteInfo()">삭제</button>
            <button class="form-control save" id="custom-bnt" @click="save()">작성</button>
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
    padding: 50px;
}
.form-head {
    font-weight: 700;
}
.form-data > input {
    margin-bottom: 10px;
}
input {
    width: 500px;
    min-height: 38px;
    /* word-break: break-all;
    overflow: scroll; */
}
button {
    float: right;
    margin-left: 10px;
    display: inline-block;
    width: 80px;
    margin-top: 10px;
}
.repo-description {
    font-size: 10px;
}
</style>