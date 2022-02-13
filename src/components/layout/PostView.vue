<template>
    <div>
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
        <div id="content">
            {{question.content}}
            <img class="p-4" :src="question.img" alt="">
        </div>
        <hr>
        <template v-for="item in reply" :key="item">
        <!-- 문의 사항 댓글 -->
        <!-- <div class="form-control" id="reply" style="background-color:#EBEDF0;">
            <div id="reply-title">
                re: {{question.title}} {{reply.date}}
            </div>
            <div id="reply-content">
                {{reply.content}}
            </div>
        </div> -->
            <div class="form-control" :id="(item.author === question.author) ? 'reply1' : 'reply'">
                <div id="reply-title">
                    {{item.author}}&nbsp;&nbsp;&nbsp;{{item.date}}
                </div>
                <div id="reply-content">
                    {{item.content}}
                </div>
            </div>
        </template>


    </div>
</template>

<script>
export default {
    name : "post-view",
    props : {
        question : Array,
        reply: Array,
    }
}
</script>

<style scoped>

hr {
  margin: 0;
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

#post-info {
    height: 50px;
    line-height: 50px;
}

#content {
    min-height: 200px;
    padding: 50px;
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

#reply-content {
    padding: 10px;
}

</style>