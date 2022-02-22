<template>
    <div class="nav">
        <ul class="list-group">
            <li  v-for="item in repos" :key="item" @click="check(item.id)" :id="`${item.id}-body`" 
                class="list-group-item">
                <div id="repos-body">
                    <p style="font-size : 16px;"><b>{{item.name}}</b></p>
                    <p style="font-size : 14px;">{{item.description}}</p>
                    <p style="font-size : 12px;">{{item.lang}}</p>
                </div>
                <input :id="`${item.id}-id`" type="checkbox" style="">
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    data() {
        return {
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
    methods : {
        save() {
            
        },
        exit() {

        },
        check(index) {
            var doc = document.getElementById(index + "-id");
            console.log(doc.checked);
            if (doc.checked) {
                document.getElementById(index + "-body").style.background = "white";

                this.count -= 1;
                this.selectedReposList = this.selectedReposList.filter((element) => element !== index);
            } else {
                if (this.count == 3) {
                    doc.checked = false;
                    alert("메인 레포지토리는 최대 3개까지 선택할 수 있습니다.");
                    return;
                }
                document.getElementById(index + "-body").style.background = "#a3cfbb";
                this.count += 1;
                this.selectedReposList.push(index);
            }
            doc.checked = (doc.checked) ? false : true;
        }
    },
    mounted() {
        for(var i = 0; i <this.repos.length; i++) {
            if (this.repos[i].check) {
                this.count += 1;
                document.getElementById(this.repos[i].id + "-body").style.background = "#a3cfbb";
                document.getElementById(this.repos[i].id + "-id").checked = true;
                this.selectedReposList.push(this.repos[i].id);
            }
        }
    }
}
</script>

<style scoped>
.title, .btns{
    display: inline-flex;
}

.nav {
    /* height: 320px; */
    width: 400px;
    border: 1px solid rgba(0,0,0,.125);
    box-sizing: border-box;
}
ul {
    width: 100%;
}

.list-group-item {
    border-left: none;
    border-right: none;
}

li {
    cursor: pointer;
    height: 100px;
    width: 100%;
    /* border-radius: 0 !important; */
}

input {
    display: none;
}

#title {
    padding: 10px;
}

p {
    margin: 0;
}

#repos-body {
    padding: 10px;
}

</style>