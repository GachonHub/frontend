<template>
    <div class="sidebar_area">
        <div class="container">
            <ul>
                <li class="title"><router-link to="/">랭킹 👑</router-link></li>
            </ul>
            <ul>
                <hr>
            </ul>
            <ul>
                <li class="title">커뮤니티</li>
                <li class="sub_menu"><router-link to="/study/1">모집중인 스터디 ⚡</router-link></li>
                <li class="sub_menu"><router-link to="/crew/1">모집중인 동아리 ⚡</router-link></li>
                <li class="sub_menu"><router-link to="/contest/1">공모전 🌺</router-link></li>
                <li class="sub_menu"><router-link to="/question/1">질문게시판 🎤</router-link></li>
            </ul>
            <ul>
                <hr>
            </ul>
            <ul>
                <li class="title">지원</li>
                <li class="sub_menu"><router-link to="/notice/1">공지사항</router-link></li>
                <li class="sub_menu"><router-link to="/inquiry/1">문의사항</router-link></li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>

/* 사이드 메뉴 css */
.container {
    max-width: 1200px;
    display: flex;
    justify-content: space-evenly;
    background: #CCD6CE;
    z-index: 5;
}
ul, li {
    margin: 0;
    padding: 0;
}
ul{
    padding-bottom: 40px;
}
li {
    list-style: none;
}
hr {
    border: 0;
    width: 0.1px;
    height: 90%;
    background-color: white;

    position: relative;
    top: 30px;
}
.title {
    font-weight: bold;
    padding-top: 20px;
}
.sub_menu {
    padding-top: 10px;
}

a {
    text-decoration: none;
    color: black;
}
</style>