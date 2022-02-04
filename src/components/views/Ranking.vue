<template>
    <div class="ranking">
        <div class="container">
            <div class="title">랭킹 👑</div>
            <div class="tab_content">
                <input type="radio" name="tabmenu" id="tab01" checked>
                <label for="tab01">Personal</label>
                <input type="radio" name="tabmenu" id="tab02">
                <label for="tab02">Group</label>
                <!-- personal section -->
                <div class="personal conbox con1">
                    <div class="superb">
                        <!-- 1위 -->
                        <div class="first">
                            <h1 class="first_rank_area">1위</h1>
                            <h1 class="first_id_area">tearofglass</h1>
                        </div>
                        <hr class="line01">
                        <div class="first_info">
                            <div class="accumulate_commits">
                                <h2 class="first_accumulate_title">누적 커밋 수</h2>
                                <h3 class="first_accumulate_data">10111</h3>
                            </div>
                            <hr class="line02">
                            <div class="previous_commits">
                                <h2 class="first_previous_title">전일 커밋 수</h2>
                                <h3 class="first_previous_data">+ 11</h3>
                            </div>
                        </div>
                        <!-- 2위 -->
                        <div class="second">

                            <div class="second_rank_area">2위</div>
                            <div class="second_id_area">tearofglass</div>
                            <div class="second_info">
                                <div class="accumulate_commits">
                                    <div class="second_accumulate_title">누적 커밋 수</div>
                                    <div class="second_accumulate_data">1000</div>
                                </div>
                                <hr class="line03">
                                <div class="previous_commits">
                                    <div class="second_previous_title">전일 커밋 수</div>
                                    <div class="second_previous_data">+11</div>
                                </div>
                            </div>

                        </div>
                        <!-- 3위 -->
                        <div class="third">

                            <div class="second_rank_area">3위</div>
                            <div class="second_id_area">tearofglass</div>
                            <div class="second_info">
                                <div class="accumulate_commits">
                                    <div class="second_accumulate_title">누적 커밋 수</div>
                                    <div class="second_accumulate_data">1000</div>
                                </div>
                                <hr class="line03">
                                <div class="previous_commits">
                                    <div class="second_previous_title">전일 커밋 수</div>
                                    <div class="second_previous_data">+11</div>
                                </div>
                            </div>

                        </div>
                        <!-- 4위 -->
                        <div class="fourth">

                            <div class="second_rank_area">4위</div>
                            <div class="second_id_area">tearofglass</div>
                            <div class="second_info">
                                <div class="accumulate_commits">
                                    <div class="second_accumulate_title">누적 커밋 수</div>
                                    <div class="second_accumulate_data">1000</div>
                                </div>
                                <hr class="line03">
                                <div class="previous_commits">
                                    <div class="second_previous_title">전일 커밋 수</div>
                                    <div class="second_previous_data">+11</div>
                                </div>
                            </div>

                        </div>
                        <!-- 5위 -->
                        <div class="fifth">

                            <div class="second_rank_area">5위</div>
                            <div class="second_id_area">tearofglass</div>
                            <div class="second_info">
                                <div class="accumulate_commits">
                                    <div class="second_accumulate_title">누적 커밋 수</div>
                                    <div class="second_accumulate_data">1000</div>
                                </div>
                                <hr class="line03">
                                <div class="previous_commits">
                                    <div class="second_previous_title">전일 커밋 수</div>
                                    <div class="second_previous_data">+11</div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    <div class="others">
                        <div class="others_table_title">
                            <div class="others_rank_title">순위</div>
                            <div class="others_id_title">아이디</div>
                            <div class="others_commitsNprevious_title">누적 커밋 수 (전일대비)</div>
                        </div>
                        <div v-for="(item,index) in items" v-bind:key="index"
                            class="others_table_items">
                            <div class="others_rank_items">{{item.rank}}</div>
                            <div class="others_id_items">{{item.id}}</div>
                            <div class="others_commitsNprevious_items">{{item.commits}} (+{{item.previous}})</div>
                        </div>

                    </div>
                </div>

                <!-- group section -->
                <div class="group conbox con2">
                    <div class="superb">
                        
                        <div class="first">
                            <h1 class="first_rank_area">1위</h1>
                            <h1 class="first_id_area">Pay1oad</h1>
                        </div>
                        <hr class="line01">
                        <div class="first_info">
                            <div class="accumulate_commits">
                                <h2 class="first_accumulate_title">누적 커밋 수</h2>
                                <h3 class="first_accumulate_data">10111</h3>
                            </div>
                            <hr class="line02">
                            <div class="previous_commits">
                                <h2 class="first_previous_title">전일 커밋 수</h2>
                                <h3 class="first_previous_data">+ 11</h3>
                            </div>
                        </div>

                        <div class="second">
                            <div class="second_rank_area">2위</div>
                            <div class="second_id_area">tearofglass</div>
                            <div class="second_info">
                                <div class="accumulate_commits">
                                    <div class="second_accumulate_title">누적 커밋 수</div>
                                    <div class="second_accumulate_data">1000</div>
                                </div>
                                <hr class="line03">
                                <div class="previous_commits">
                                    <div class="second_previous_title">전일 커밋 수</div>
                                    <div class="second_previous_data">+11</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="third">

                            <div class="second_rank_area">3위</div>
                            <div class="second_id_area">tearofglass</div>
                            <div class="second_info">
                                <div class="accumulate_commits">
                                    <div class="second_accumulate_title">누적 커밋 수</div>
                                    <div class="second_accumulate_data">1000</div>
                                </div>
                                <hr class="line03">
                                <div class="previous_commits">
                                    <div class="second_previous_title">전일 커밋 수</div>
                                    <div class="second_previous_data">+11</div>
                                </div>
                            </div>

                        </div>
                        
                        <div class="fourth">

                            <div class="second_rank_area">4위</div>
                            <div class="second_id_area">tearofglass</div>
                            <div class="second_info">
                                <div class="accumulate_commits">
                                    <div class="second_accumulate_title">누적 커밋 수</div>
                                    <div class="second_accumulate_data">1000</div>
                                </div>
                                <hr class="line03">
                                <div class="previous_commits">
                                    <div class="second_previous_title">전일 커밋 수</div>
                                    <div class="second_previous_data">+11</div>
                                </div>
                            </div>

                        </div>
                        
                        <div class="fifth">

                            <div class="second_rank_area">5위</div>
                            <div class="second_id_area">tearofglass</div>
                            <div class="second_info">
                                <div class="accumulate_commits">
                                    <div class="second_accumulate_title">누적 커밋 수</div>
                                    <div class="second_accumulate_data">1000</div>
                                </div>
                                <hr class="line03">
                                <div class="previous_commits">
                                    <div class="second_previous_title">전일 커밋 수</div>
                                    <div class="second_previous_data">+11</div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    <div class="others">
                        <div class="others_table_title">
                            <div class="others_rank_title">순위</div>
                            <div class="others_id_title">아이디</div>
                            <div class="others_commitsNprevious_title">누적 커밋 수 (전일대비)</div>
                        </div>
                        <div v-for="(item,index) in items" v-bind:key="index"
                            class="others_table_items">
                            <div class="others_rank_items">{{item.rank}}</div>
                            <div class="others_id_items">{{item.id}}</div>
                            <div class="others_commitsNprevious_items">{{item.commits}} (+{{item.previous}})</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {rank:6,id:'tearofglass', commits: 4567, previous:7},
                {rank:7,id:'jaeesu', commits: 4566, previous:7},
                {rank:8,id:'tearofglass', commits: 4565, previous:7},
                {rank:9,id:'tearofglass', commits: 4564, previous:7},
                {rank:10,id:'tearofglass', commits: 4563, previous:7},
                {rank:11,id:'tearofglass', commits: 4562, previous:7},
                {rank:12,id:'tearofglass', commits: 4561, previous:7},
                {rank:13,id:'tearofglass', commits: 4560, previous:7},
                {rank:14,id:'tearofglass', commits: 4559, previous:7},
                {rank:15,id:'tearofglass', commits: 4558, previous:7}
                ]
        }
    }
}


</script>

<style scoped>
.container {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
}

/* 탭메뉴 */
input[type="radio"] {
    display: none; 
    }
input[type="radio"] + label {
    position: absolute;

    width: 101px;
    height: 20px;
    padding-top: 3px;

    text-align: center;
    margin-bottom: 60px;
    background: #FFFFFF;
    color: #717171;
    font-size: 14px;
    cursor: pointer;
}
input[type="radio"]:checked + label {
    background: #717171; 
    color: white;
}

label[for="tab01"] {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    top: 20px;
    left: 116px;

    font-size: 14px;
}
label[for="tab02"] {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    top: 20px;
    left: 217px;

    font-size: 14px;
}

.tab_content {
    position: relative;
}

/* 탭 메뉴 내용 부분 */
.conbox {
    
    width: 100%;
    height: auto;
    background: white; 
    margin: 0 auto;
    display: none;
}
input[id="tab01"]:checked ~ .con1 {display: block;}
input[id="tab02"]:checked ~ .con2 {display: block;}

.title { 
    width: calc(100%-20px);
    height: 60px;

    text-align: left;
    font-size: 18px;
    font-weight: 700;
    line-height: 60px;
    padding-left: 20px;
}
.superb {
    width: 100%;
    height: 290px;
    /* float: left; */
    background-image: 
    url(https://images.unsplash.com/photo-1551651057-f3f83700a831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
    background-size: 1200px;
    background-position: center;
    
}

/* superb */
.first {
    display: inline-block;
    width: 208px;
    height: 193px;
    background: rgba(75, 116, 121, 0.77);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    position: absolute;
    top: 71px;
    left: 116px;
}
.first_rank_area {
    width: 52px;
    height: 75px;
    background-color: #52C9BC;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    color: #27524F;
    font-weight: 800;
    line-height: 75px;
    text-align: center;
}
.first_id_area {
    position: absolute;
    top: 113px;

    color: #FFFFFF;
    width: 208px;
    text-align: center;
    font-weight: 800;
}

.first_info {
    display: inline-block;
    width: 208px;
    height: 193px;
    background: rgba(75, 116, 121, 0.77);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    position: absolute;
    top: 71px;
    left: 324px;
}
.first_accumulate_title {
    position: absolute;
    top: 36px;
    width: 193px;
    text-align: center;

    color: #CCE8DF;
    font-weight: 700;
}
.first_accumulate_data {
    position: absolute;
    top: 63px;
    width: 193px;
    text-align: center;

    color: #FFFFFF;
    font-weight: 800;
}
.first_previous_title {
    position: absolute;
    top: 121px;
    width: 193px;
    text-align: center;

    color: #CCE8DF;
    font-weight: 700;
}
.first_previous_data {
    position: absolute;
    top: 148px;
    width: 193px;
    text-align: center;

    color: #FFFFFF;
    font-weight: 800;
}

.second {
    display: inline-block;
    width: 537px;
    height: 46px;
    background-color: #569A8E;
    border-radius: 5px;
    
    position: absolute;
    top: 71px;
    left: 548px;
    right: 115px;
}
.second_rank_area {
    width: 68px;
    height: 31px;
    position: absolute;
    top: 8px;
    background-color: #4B7479;

    font-size: 17px;
    font-weight: 800;
    color: white;
    line-height: 31px;
    text-align: center;
}
.second_id_area {
    font-size: 16px;
    font-weight: 800;
    color: white;
    line-height: 46px;

    position: absolute;
    left: 79px;
}
.second_accumulate_title {
    font-size: 10px;
    font-weight: 700;
    color: #CCE8DF;

    position: absolute;
    top: 11px;
    left: 335px;
}
.second_accumulate_data {
    font-size: 14px;
    font-weight: 800;
    color: white;
    
    position: absolute;
    top: 25px;
    left: 344px;
}
.second_previous_title {
    font-size: 10px;
    font-weight: 700;
    color: #CCE8DF;

    position: absolute;
    top: 11px;
    left: 435px;
}
.second_previous_data {
    font-size: 14px;
    font-weight: 800;
    color: white;

    position: absolute;
    top: 25px;
    left: 446px;
}

.third {
    display: inline-block;
    width: 537px;
    height: 46px;
    background-color: #569A8E;
    border-radius: 5px;

    position: absolute;
    top: 120px;
    left: 548px;
    right: 115px;
}
.fourth {
    display: inline-block;
    width: 537px;
    height: 46px;
    background-color: #569A8E;
    border-radius: 5px;

    position: absolute;
    top: 169px;
    left: 548px;
    right: 115px;
}
.fifth {
    display: inline-block;
    width: 537px;
    height: 46px;
    background-color: #569A8E;
    border-radius: 5px;

    position: absolute;
    top: 218px;
    left: 548px;
    right: 115px;
}
/* others */
.others {
    width: 100%;

    position: relative;
    z-index: 1;
}
.others_table_title {
    width: 100%;
    height: 42px;
    background-color: #9EC6BA;

    position: relative;
    top: 0;
    z-index: 10;

    line-height: 42px;
    font-size: 18px;
    font-weight: 800;
    color: #FFFFFF;
}
.others_rank_title, .others_rank_items {
    display: inline-block;
    position: absolute;
    left: 74px;
    line-height: 42px;

}
.others_id_title, .others_id_items {
    display: inline-block;
    position: absolute;
    left: 305px;
    width:387px;
    text-align: center;
    line-height: 42px;
}
.others_commitsNprevious_title, .others_commitsNprevious_items {
    display: inline-block;
    position: absolute;
    left: 813px;
    width:387px;
    text-align: center;
    line-height: 42px;
}
/* others items */
.others_table_items {
    width: 100%;
    height: 42px;
    background-color: #EBEDF0;

    position: relative;
    top: 0px;
    margin-top: 20px;

    font-size: 16px;
    font-weight: 800;
    color: #A4A4A4;
}

/* line */
.line01 {
    width: 0.1px;
    height: 159px;
    background: #90B6B8;
    margin: 0;
    border: 0;

    position: absolute;
    left: 324px;
    top: 88px;
    z-index: 10;
}.line02 {
    width: 160px;
    height: 0.1px;
    background-color: #90B6B8;
    margin: 0;
    border: 0;

    position: absolute;
    left: 25px;
    top: 97px;
    z-index: 10;
}
.line03 {
    width: 0.1px;
    height: 30px;
    background-color: #8CC3CA;
    border: 0;

    position: absolute;
    top: 0px;
    left: 411px;
}
/* font size */
h1 {
    font-size: 22px;
    margin: 0;
}
h2 {
    font-size: 12px;
    margin: 0;
}
h3 {
    font-size: 16px;
    margin: 0;
}
</style>