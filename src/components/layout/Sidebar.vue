<template>
    <div class="sidebar_area">
        <input type="checkbox" id="menuicon">
        <label for="menuicon">
            <span></span>
            <span></span>
            <span></span>
        </label>
        
        <div class="sidebar">
            <div class="container">
                <ul>
                    <li class="title">랭킹 👑</li>
                </ul>
                <ul>
                    <hr>
                </ul>
                <ul>
                    <li class="title">커뮤니티</li>
                    <li class="sub_menu">모집중인 스터디 ⚡ </li>
                    <li class="sub_menu">모집중인 동아리 ⚡</li>
                    <li class="sub_menu">공모전 🌺</li>
                    <li class="sub_menu">질문게시판 🎤</li>
                </ul>
                <ul>
                    <hr>
                </ul>
                <ul>
                    <li class="title">지원</li>
                    <li class="sub_menu">공지사항</li>
                    <li class="sub_menu">문의사항</li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
input[id="menuicon"] {
    display: none;
}
input[id="menuicon"] + label {
    display: block;
    width: 30px;
    height: 20px;
    position: relative;
    cursor: pointer;
}
input[id="menuicon"] + label span {
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 30px;
    background: #000;
    transition: all .35s;
    z-index: 2;
}
input[id="menuicon"] + label span:nth-child(1) {
    top: 0;
}
input[id="menuicon"] + label span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
}
input[id="menuicon"] + label span:nth-child(3) {
    bottom: 0;
}
/* 체크가 되었을 때 */
input[id="menuicon"]:checked + label span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}
input[id="menuicon"]:checked + label span:nth-child(2) {
    opacity: 0;
}
input[id="menuicon"]:checked + label span:nth-child(3) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
}

/* 사이드 메뉴 */
div[class="sidebar"] {
    width: 100%;
    height: 210px;
    background: white;
    position: absolute;
    top: -210px; left: 0;
    z-index: -100;
    transition: all .35s;
}
input[id="menuicon"]:checked + label + div[class="sidebar"] {
    top: 40px;}

/* 사이드 메뉴 css */
.container {
    max-width: 1200px;
    width: auto;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    background: #CCD6CE;
}
ul, li {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
    
}
hr {
    height: 90%;
}
.title {
    font-weight: bold;
    padding-top: 20px;
}
.sub_menu {
    padding-top: 10px;
}
</style>