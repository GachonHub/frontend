<template>
    <div class="list_component"  v-for="item in items" :key="item">
        <div><router-link :to="{path : ((baseUri == 'contest') ?'/contest/id/' + item.id : '/groups/' + baseUri + '/info/' + item.id)}">
            <div class="field">{{(baseUri == 'contest') ? item.category : item.field}}</div>
            <!-- <div class="sympathy" v-if="baseUri == 'contest'"><a  class="sympathy">공감</a>{{data.sympathy}}</div> -->
            <div class="study_name">{{(baseUri == 'contest') ? item.title : item.name}}</div>
            <div class="study_content">{{(baseUri == 'contest') ? item.content : item.description}}</div>
            <a class="writer">작성자 - </a><div class="writer">{{item.authorId}}</div>
            <div class="study_image" :src='item.mainImage' >
                <img :src="item.mainImage" alt="" style="width:100%; height:100%;">
            </div>
            </router-link>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
        baseUri: String
    }
}
</script>

<style scoped>
.list_component {
    width: 100%;
    height: 180px;
}

a {
    text-decoration: none;
    color: black;
}
a:hover {
    color: black;
}

.field {
    font-weight: bold;
    font-size: 12px;
    text-decoration-line: underline;
    color: #868383;

    position: relative;
    top: 42px;
    left: 20px;
}

.sympathy {
    font-size: 12px;
    
    display: inline-block;
    position: relative;
    top: 66px;
    left: 20px;
}
div.sympathy {
    color: #FF354E;

    display: inline-block;
}

.study_name {
    width: 692px;
    font-size: 18px;
    font-weight: 700;

    position: relative;
    top: 6px;
    left: 203px;
}

.study_content {
    font-size: 14px;
    font-weight: 700;
    color: #868383;
    width: 692px;

    position: relative;
    top: 30px;
    left: 203px;
}
.writer {
    font-size: 14px;
    font-weight: 400;
    color: #868383;

    display: inline-block;
    position: relative;
    top: 42px;
    left: 203px;
}
.study_image {
    /* background:
    url(https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80); */
    background-size:183px;
    background-position-y: -85px;
    width: 182px;
    height: 140px;

    position: relative;
    top: -83px;
    left: 997px;
}

hr {
    position:relative;
    bottom: 65px;
    border: 0;
    background-color: #E5E5E5;
    height: 2px;
    margin: 0;
}
</style>