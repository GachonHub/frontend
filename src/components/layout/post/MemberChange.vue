<template>
    <div class="wrap">
        <input v-show="authorId==userId" id="search_text" class="form-control" type="text" @input="filter()">
        <button v-show="authorId==userId" id="input_btn" type="button" class="form-control" @click="addMember()">추가</button>
        <div>
            <table>
                <tr v-for="(item, index) in members2" :key="item">
                    <div v-if="item.name.includes(word) && !(arr.includes(item))">
                        <td class="member" :id="'member'+index" ><img :src="item.img"> {{item.name}} <button style="float:right;" @click="deleteMember(index, item.name)">삭제</button></td>
                    </div>
                </tr>
            </table>
        </div>
        <button class="close-btn" @click="$emit('close')">닫기</button>
        

    </div>
</template>

<script>
export default {
    props: {
        authorId:String,
        userId:String,
        members:Array,
        allMembers:Array
    },
    data() {
        return {
            members2 : [],
            word : "",
            arr : [],
        }
    },
    methods: {
        filter() {
            if (document.getElementById("search_text") == null) return;
            this.word = document.getElementById("search_text").value.toLowerCase();

            console.log(this.word);    
        },
        addMember() {
            var member = document.getElementById('search_text').value;
            console.log(member);
            for (var i=0; i<this.allMembers.length; i++) {
                if(this.allMembers[i].name == member) {
                    var memberinfo = this.allMembers[i];
                    console.log(this.memberInfo);
                    this.members2.push(memberinfo);
                    
                    break;
                }
                // deleteMember 덜 구현됨 list에서 삭제해야 함
            }
        },
        deleteMember(index, name) {
            this.members2.slice(index,1);
            this.arr.push(name);
        }
    },
    created() {
        this.members2=this.members;
    },
}
</script>
<style scoped>
.wrap {
    position: absolute;
    background: white;
    border: 1px solid lightgray;
    padding: 30px;
    width: 300px;
    max-height: 400px;
    z-index: 999;
    border-radius: 5px;
}
#search_text {
    width: 70%;
    display: inline-block;
    border-radius: 0;
}
#input_btn {
    width: 30%;
    display: inline-block;
    border-radius: 0;
}

.wrap > div {
    overflow-y: scroll;
    max-height: 250px;
    -ms-overflow-style: none;
}
.wrap>div::-webkit-scrollbar {
    display: none;
}
table {
    border-bottom: 0;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    
}
td {
    border: 1px solid lightgray;
    width: 240px;
    padding: 0 10px;
    background: white;
}
td:hover {
    background:#ebedf0;
}
td > button {
    border : 1px solid #ced4da;
    background: white;
}
img {
    width: 30px;
    height: 30px;
    border-radius: 70%;
}

.close-btn {
    width: 100%;
    height: 38px;
    border: 1px solid #ced4da;
    background: white;
    
}
</style>