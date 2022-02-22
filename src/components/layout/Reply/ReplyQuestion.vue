<template>
    <div class="container">
        <div class="comment">
            <input id="comment" type="text">
            <button @click="add()">입력</button>
        </div>

        <div v-for="(item,index) in reply" :key="item" class="form-control" :id="(item.author === author) ? 'reply1' : 'reply'">
            <div id="reply-title">
                {{item.author}}&nbsp;&nbsp;&nbsp;{{item.date}}
                <button :id="'update-'+index" @click="update(index)"><i class="bi bi-pencil-square"></i></button>
                <button :id="'save-'+index" @click="save(index)" style="display:none;"><i class="bi bi-check-square"></i></button>
                <button :id="'delte_reply'+index" @click="delete_reply()"><i class="bi bi-x-square"></i></button>
                
            </div>
            <div class="R_C" :id="'reply_content-'+index">
                {{item.content}}
            </div>
            <div :id="'reply_update_div-'+index" style="display:none;">
                <input class="R_U" :id="'reply_update-'+index" type="text" :value="item.content">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        reply:Array,
        author:String
    },
    methods: {
        add() {
            var word = document.getElementById('comment').value;
            console.log(word);
            document.getElementById('comment').value="";
        },
        update(idx) {
            document.getElementById('reply_content-'+idx).style.display="none";
            document.getElementById('update-'+idx).style.display="none";
            
            document.getElementById('save-'+idx).style.display="inline-block";
            document.getElementById('reply_update_div-'+idx).style.display="block";
        },
        save(idx) {
            var word = document.getElementById('reply_update-'+idx).value;
            console.log(word);

            document.getElementById('reply_content-'+idx).style.display="block";
            document.getElementById('update-'+idx).style.display="inline-block";
            
            document.getElementById('save-'+idx).style.display="none";
            document.getElementById('reply_update_div-'+idx).style.display="none";
        },
        delete_reply() {

        }
    },
}
</script>

<style scoped>
.container {
    padding-top: 15px;
}
.comment {
    width: 100%;
    margin-top: 10px;
}
#comment {
    width: 90%;
    height: 70px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 0;

}
.comment > button {
    width: 10%;
    height: 70px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 0;
}

.form-control {
    font-size: 12px;
    border: none;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 800px;
}

#reply {
    border: 2px solid #EBEDF0;
    float: left;
}

#reply1 {
    background-color: #EBEDF0;
    float: right;
}

#reply-title {
    padding: 10px;
    padding-bottom: 0;
}
button {
    display: inline-block;
    border: 0;
    background: transparent;
    width: 12px;
    height: 12px;
    margin:10px;
    margin-left: 0;
}
#reply-title > button:nth-child(1) :hover{
    color: red;
}
#reply-title > button:nth-child(2) :hover{
    color: lightgreen;
}
#reply-title > button:nth-child(3) :hover{
    color: red;
}
.R_C, .R_U {
    margin: 10px;
    
}

</style>