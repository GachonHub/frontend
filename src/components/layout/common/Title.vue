<template>
    <div>
        <div class="title">
            <div class="MainTitle">{{title}}</div>
            <div class="SecondaryTitle" v-if="SecondaryTitle != undefined">{{SecondaryTitle}}</div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name : "common-title",
    props : {
        title: String,
        SecondaryTitle: String
    }
}
</script>

<style scoped>
.title {
    height: 60px;
    line-height: 60px;
    text-align: left;
    font-weight: 700;
  /* display: inline-block; */
  /* float: left; */
}

.MainTitle {
    font-size: 18px;
    display: inline-block;
}

.SecondaryTitle {
    padding-left: 20px;
    font-size: 14px;
    display: inline-block;
}

hr {
  margin: 0;
  border: 0;
  border-top: 1px solid #b2b2b2;
}
</style>