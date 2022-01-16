<template>
    <div class="header">
        <div class="container">
            <ul class="nav_list">
                <!-- 햄버거 메뉴 & 사이드바 -->
                <li class="nav_item sidebar_area">
                    <Sidebar class="nav sidebar"/>
                </li>

                <!-- 로고 -->
                <li class="nav_item logo_area">
                    <a href="#" class="nav logo">GACHONHUB</a>
                </li>

                <!-- 로그인 버튼 -->
                <div class="nav_item login_area">
                    <a href="#" class="nav login">LOGIN</a>
                </div>
                    
                <!-- 프로필 아이콘 -->
                <li class="nav_item profile_icon_area">
                    <router-link to="/profile">
                        <b-icon-person-circle class="nav profile"></b-icon-person-circle>
                    </router-link>
                </li>

                <!-- 채팅 아이콘 -->
                <li class="nav_item telegram_icon_area">
                    <b-icon-bell-fill class="nav telegram"></b-icon-bell-fill>
                </li>
            </ul>
        </div>
        <hr>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
    name: 'Header',
    components: {
        Sidebar
    }
    
}
</script>

<style scoped>
.header {
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0px;
    top: 0px;
    z-index: 100;

    background-color: white;
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
}
.container {
    max-width: 1200px;
    width: auto;
    height: 100%;
    margin: 0 auto;
    z-index: 100;

    background-color: white;
}

ul{
    margin: 0;
    padding: 0;
}
li {
    padding: 0;
}
hr {
    min-width: 1200px;
    bottom: 0;
    background-color: grey;
    margin: 0;
}
.nav_item {
    list-style: none;
}

a {
    text-decoration-color: none;
    color: black;
    text-decoration-line: none;
    font-size: 17px;
}

.sidebar {
    padding-top: 10px;
    padding-left: 20px;
    float: left;
}
.logo_area {
    padding-top: 10px;
    padding-left: 20px;
    float: left;
}
.telegram, .profile{
    padding-top: 12px;
    padding-right: 20px;
    float: right;
}
.login_area {
    padding-top: 10px;
    padding-right: 20px;
    float: right;
}
</style>