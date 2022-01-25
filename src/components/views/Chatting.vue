<template>
    <div class="chatting">
        <div>
            <!-- 채팅 목록 -->
            <div class="chat_list">
                <div class="chat_logo">
                    <a>채팅 목록</a>
                </div>
                <div class="chatter_list">
                    <div class="chatter"
                    v-for="item in tearofglass" 
                    v-bind:key="item">
                        {{item.writer}},{{item.content}},{{item.time}}
                    </div>
                </div>
            </div>
            
            <!-- 채팅 내용 -->
            <div class="chat_area">
                <div class="sender_info">
                    <a>tearofglass</a> 
                </div>
                <div class="chat_content" id="scrollDiv">
                    <chat_c 
                    v-for="item in tearofglass" 
                    v-bind:key="item" 
                    :writer="item.writer" 
                    :content="item.content"
                    :time="item.time"/>
                </div>
                <div class="sending">
                    <textarea 
                    v-model="content" 
                    placeholder="대화를 시작해보세요." 
                    cols="30"
                    row="10" wrap="physical"
                    onclick="this.value=''"
                    >
                    </textarea>
                    <button class="submit_btn" @click="write">
                        Submit
                    </button>
                </div>
                
            </div>
        </div>
    </div>    
</template>

<script>

import chat_c from "../layout/ChatComponent.vue"

export default {
    components: {
        chat_c
    },
    props: 
    {
        content: String
    },
    data() {
        return {
            tearofglass: [
                {
                    writer:"tearofglass",
                    content:"안녕",
                    time: "2/16 14:44"
                },
                { 
                    writer: "jaeesu",
                    content:"헬로",
                    time: "12/6 14:33"
                },
                {
                    writer:"tearofglass",
                    content:"안녕",
                    time: "12/16 14:44"
                },
            ],
            takataka: [
                {
                    writer:"takataka",
                    content:"안녕",
                    time: "2/16 14:44"
                },
                { 
                    writer: "jaeesu",
                    content:"헬로",
                    time: "12/6 14:33"
                }
            ]
        }
    },
    
    methods: {
        write() {
            

            let today = new Date();   

            //let year = today.getFullYear(); // 년도
            let month = today.getMonth() + 1;  // 월
            let date = today.getDate();  // 날짜
            // let day = today.getDay();  // 요일

            let hours = today.getHours(); //시
            let minutes = today.getMinutes(); //분

            this.tearofglass.push({
                writer: 'jaeesu',
                content: this.content,
                time: month + '/' + date + ' ' + hours + ':' + minutes
            })

            var scrollDiv = document.getElementById("scrollDiv");
            scrollDiv.scrollTop = scrollDiv.scrollHeight;
            
        }
        
    },
    

}

</script>

<style scoped>
.chatting {
    width: 1200px;
    margin: 0 auto;
}
.chatting > div {
    text-align: center;
    margin: 60px 0 20px 0;
}
/* 채팅 목록 */
.chat_list {
    display: inline-block;
}

.chat_list {
    width: 340px;
    height: 874px;

    border: 2px solid #8EB094;
    /* box-sizing: border-box; */
    border-radius: 10px;
}

.chat_logo {
    width: 100%; 
    height: 114px; 
    line-height: 114px;
    padding-left: 20px;
    text-align: left;
    float: left;
}
.chatter_list {
    width: 342px;
    height: 760px;
    /* 야매로 빈틈 메움 */
    float: left;
    position: relative;
    left: -1px;

    background-color: #8EB094;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.chatter {
    width: 100%;
    height: 126px;
    
    margin-top: 2px;
}
.chatter:hover {
    background-color: white;
}
/* 채팅 내용 */
.chat_area {
    display: inline-block;

    width: 700px;
    height: 874px;
    margin-left: 20px;

    border: 2px solid #8EB094;
    border-radius: 12px;
}
/* chat_area part1 */
.sender_info {
    width: 100%;
    height: 114px;

    background-color: white;
    color: black;
    font-weight: 700;
    text-align: left;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.sender_info > a {
    line-height:114px; 
    padding-left:20px;
}
/* chat_area part2 */
.chat_content {
    width: 702px;
    height: 610px;
    padding-bottom: 20px;
    text-align: left;

    /* 야매로 빈틈 메움 */
    position: relative;
    left: -2px; 
    
    background-color: #8EB094;

    overflow-y: scroll;
}
/* chat_area part3 */
.sending {
    width: 100%;
    height: 30px;
}
textarea {
    width: 540px;
    height: 130px;
    border-bottom-left-radius: 10px;
    border: 0;
    padding: 0;

}
.submit_btn {
    position: relative;
    /* bottom: 11px; */
    bottom: 60.5px;

    width: 160px;
    height: 130px;
    border-bottom-right-radius: 10px;
    border: 0;
    padding: 0;

    background-color: rgb(218, 218, 218);
    color: #8EB094;
    line-height: 130px;

    cursor: pointer;
    
}
</style>