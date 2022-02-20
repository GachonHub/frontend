<template>
    <div id="post-view">
        <div id="title">{{question.title}}</div>
        <div id="post-info">
            <table>
                <td></td>
                <td id="wth80">작성자</td>
                <td id="wth100">{{question.author}}</td>
                <td id="wth80">작성일</td>
                <td id="wth100">{{question.date}}</td>
            </table>
        </div>
        <div v-html="toContent(question.content)" class="content"></div>

            <img :src="question.img" alt="img">
        <hr>
    </div>
</template>

<script>
export default {
    name : "post-view",
    props : {
        question : Object,
        reply: Array,
    },
    methods: {
        toContent(question) {
            return question.replaceAll("\n","<br/>");
        }
    }
}
</script>

<style scoped>

hr {
  margin: 0;
  margin-top: 50px;
  border: 0;
  border-top: 1px solid #b2b2b2;
}

#title {
    height: 100px;
    line-height: 100px;
    text-align: center;
}

table {
    border-top: 0.5px solid #b2b2b2;
    border-bottom: 0.5px solid #b2b2b2;
    text-align: center;
}

table td {
    border: none;
}

#wth80 {
    width: 80px;
    border-left: 0.5px solid #b2b2b2;
}

#wth100 {
    width: 100px;
    border-left: 0.5px solid #b2b2b2;
}
.content { 
    padding: 50px;
}

#post-info {
    height: 50px;
    line-height: 50px;
}

img {
    display: block;
    border: 1px solid gray;
    box-sizing: border-box;
    margin: 0 50px;
    
}

#content {
    min-height: 200px;
    padding: 50px;
}

</style>