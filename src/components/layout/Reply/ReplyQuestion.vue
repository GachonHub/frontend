<template>
    <div class="container">
        <div v-for="item in reply" :key="item" class="form-control" :id="(item.author === author) ? 'reply1' : 'reply'">
            <div id="reply-title">
                {{item.author}}&nbsp;&nbsp;&nbsp;{{item.date}}
            </div>
            <div id="reply-content">
                {{item.content}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        reply:Array,
        author:String
    }
}
</script>

<style scoped>
.container {
    padding-top: 15px;
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