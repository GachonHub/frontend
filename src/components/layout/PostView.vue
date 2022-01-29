<template>
    <div>
        {{$route.params.id}}
        <div id="title">
            {{title}}
        </div>
        <hr>
        <div id="post-info">
            {{author}}
            {{date}}
        </div>

        <div id="content">
            {{content}}
        </div>
        <hr>

    </div>
</template>

<script>
export default {
    name : "post-view",
    props : {
        title : String,
        author : String,
        date : String,
        content : String
    }
}
</script>

<style scoped>


hr {
  margin: 0;
  border: 0;
  border-top: 1px solid #b2b2b2;
}


</style>