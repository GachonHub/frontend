<template>
    <div>
        <!-- {{$route.params.id}} -->
        <div id="title">{{question.title}}</div>
        <hr>
        <div id="post-info">
            {{question.author}}
            {{question.date}}
        </div>
        <hr>
        <div id="content">{{question.content}}</div>
        <hr>

    </div>
</template>

<script>
export default {
    name : "post-view",
    props : {
        question : Array
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

#post-info {
    height: 50px;
    line-height: 50px;
}

#content {
    min-height: 200px;
    padding: 30px;
    display: block;
}


</style>