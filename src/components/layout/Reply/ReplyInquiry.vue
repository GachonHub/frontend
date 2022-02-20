<template>
    <div class="container">
        <span><i class="bi bi-arrow-return-right"></i></span>
        <div class="content">{{reply.content}}</div>
    </div>
</template>

<script>
export default {
    props : {
        reply: Array
    }
}
</script>

<style scoped>
.container {
    display: inline-flex;
    padding: 50px;
    padding-top: 20px;
    
}
i {
    padding: 15px;
    border-radius: 10px;
    position: relative;
    top: 15px;
    color: #3c4043;
    background: #f8f9fa;
}
.content {
    background:#ebedf0;
    border-radius: 10px;
    padding: 15px;
    position: relative;
    top: 3px;
    margin-left: 15px;
}
</style>