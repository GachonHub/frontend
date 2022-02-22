<template>
    <div v-if="groupinfoModal" class="groupinfoModal">
        <form>
            <div id="study">
                <div id="study-info">
                    <div class="form-data">
                        <label for="introduction" class="form-head">스터디 소개</label>
                        <input type="text" style="height: 165px;" id="introduction" class="form-control form-content" :value="data.content"/>
                    </div>
                    <div class="form-data">
                        <label for="field" class="form-head">공부 분야</label>
                        <input type="text" id="field" class="form-control form-content" :value="data.fields"/>
                    </div>
                    <div class="form-data">
                        <label for="member_num" class="form-head">현재 인원</label>
                        <input type="text" id="member_num" class="form-control form-content" :value="data.member"/>
                    </div>

                    
                    <div class="form-data">
                        <label for="recruit" class="form-head">스터디원 모집</label>
                        <Switch @save="checkRecruit" id="switch"></Switch> 
                        <input type="text" style="height: 165px;" id="recruit" class="form-control form-content" :value="data.recruitContent"/>
                    </div>
                </div>
                
                <div id="study-repos">
                    <label class="form-head">레포지토리 설정</label>
                    <div class="repo-description">메인 레포지토리는 최대 3개까지 선택할 수 있습니다.</div>
                    <MainRepos style="width: 400px; height: 500px;overflow-y:scroll;"></MainRepos>
                </div>
            </div>
        </form>

        <div class="form-button">
            <div v-if="inputModal" style="display : inline-block; width: 350px;">
                <span style="font-size:10px;">*{{type}}를 삭제하시려면 {{type}}명을 입력하고 삭제 버튼을 눌러주세요*</span>
                <input class="form-control" type="text" style="width : 260px;">
                <button class="form-control" id="deleteInput" style="position: relative; bottom: 48px;" @click="deleteGroup">삭제</button>
            </div>
            <button class="form-control" style="width: 130px;" @click="inputModal = true">{{type}} 삭제</button>
            <button class="form-control" @click="save()">작성</button>
            <button class="form-control" @click="$emit('close')">취소</button>
        </div>
    </div>
</template>

<script>
import Switch from "../layout/common/switch.vue"
import MainRepos from "../layout/profile/MainRepos.vue"
export default {
    components:{
        MainRepos,
        Switch
    },
    props:{
        groupinfoModal:Boolean,
        data:Object
    },
    data() {
        return {
            type : (this.data.type == "CREW")?'동아리' : '스터디',
            inputModal : false,
            recuit : false,
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
        deleteGroup() {
            var val = document.getElementById("deleteInput").value;
            if (val != this.data.name) {
                alert(this.type + "명이 틀렸습니다.");
                return;
            }
            // delete api 날리기
            this.$router.push("/groups/" + this.type + "/1");
        },
        save() {
            var intro_content = document.getElementById("introduction").value;
            var recruit_content = document.getElementById("recruit").value;
            console.log(intro_content);
            console.log(recruit_content);
            this.$router.go();
        },
        checkRecruit(recruit) {
            this.recruit = recruit;
            document.getElementById("recruit").readOnly = !recruit;
        }
        
    }
}
</script>

<style scoped>

#study {
    display : grid;
    grid-template-areas: "info repo";
    grid-template-columns: 1fr 1fr;
}

#study-repo {
    grid-area: "repo";
}

#study-info {
    grid-area: "info";
}

#switch {
    display : inline-block;
    position : relative;
    top: 5px;
    left : 10px;
}

.groupinfoModal {
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    position:absolute; 
    z-index:999;
    padding : 30px 50px 30px 50px;
}
.form-head {
    font-weight: 700;
}
.form-data > input {
    margin-bottom: 10px;
}
input {
    width: 350px;
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