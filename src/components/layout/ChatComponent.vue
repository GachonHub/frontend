<template>
    <div class="chat_component">
        <div v-if="writer=='jaeesu' && content != ''" class="right">
            <div class="time">{{time}}</div>
            <div class="righttail">   
                <div class="content">{{content}}</div>
            </div>
        </div>
        <div v-if="writer!='jaeesu' && content != ''" class="left">
            <div class="lefttail">
                <div class="content">{{content}}</div>
            </div>
            <div class="time">{{time}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        writer: String,
        content: String,
        lastDate: String,
        time: String
    }
}
</script>

<style scoped>
.chat_component {
    flex-direction: column;
}
time {
    align-items: center;
}
.chat_component> div {
    position: relative;
    display: flex;
    
}
.right {
    display: flex;
    justify-content: flex-end;
}
.right > div > .content {
    margin-right: 20px;
    
}
/* 메시지 꼬리 부분 */
.righttail::after {
    content: '';
    position: absolute;
    top: 30px;
    right: 5px;
    border-top: 15px solid white;
    border-right: 15px solid transparent;
}
.left > div > .content{
    margin-left: 20px;  
}
/* 메시지 꼬리 부분 */
.lefttail::before {
    content: '';
    position: absolute;
    top: 30px;
    left: 5px;
    border-top: 15px solid white;
    border-left: 15px solid transparent;
}
.content {
    max-width: 589px;
    margin-top: 20px;
    padding: 10px;

    background-color: white;
    border-radius: 10px;

    /* 자동 줄넘김 */
    word-break:break-all; 

}
.time {
    width: 98px;
    display: flex;
    align-items: flex-end;
    margin: 0 10px;
    color: white;

}
</style>