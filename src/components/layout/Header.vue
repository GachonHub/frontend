<template>
    <div class="header">
        <div class="container">
            <ul class="nav_list">
                <!-- 햄버거 메뉴 & 사이드바 -->
                <li class="sidebar-bnt nav_item">
                    <input type="checkbox" id="menu-bnt" @change="isChecked()">
                    <label for="menu-bnt">
                        <span class="icon" id="icon-1"></span>
                        <span class="icon" id="icon-2"></span>
                        <span class="icon" id="icon-3"></span>
                    </label>
                </li>

                <!-- 로고 -->
                <li class="nav_item logo_area">
                    <router-link to="/">
                        <a class="nav logo">GACHONHUB</a>
                    </router-link>
                </li>

                <!-- 로그인 버튼 -->
                <div class="nav_item login_area">
                    <a :href="GITHUB_OAUTH_URI" class="nav login">LOGIN</a>
                </div>
                    
                <!-- 프로필 아이콘 -->
                <li class="nav_item profile_icon_area">
                    <router-link to="/profile">
                        <i class="nav profile bi bi-person-circle"></i>
                    </router-link>
                </li>

                <!-- 채팅 아이콘 -->
                <li class="nav_item telegram_icon_area">
                    <i class="nav telegram bi bi-chat-dots"></i>
                </li>
            </ul>
        </div>

        <Sidebar v-if="isOpenSidebar" class="sidebar"></Sidebar>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import {GITHUB_OAUTH_URI} from '../../constants.js'

export default {
    name: 'Header',
    components: {
        Sidebar
    },
    data () {
        return {
            GITHUB_OAUTH_URI: GITHUB_OAUTH_URI,
            isOpenSidebar: false
        }
    },
    methods : {
        isChecked() {
            var checked = document.getElementById("menu-bnt").checked;
            var icon1 = document.getElementById("icon-1");
            var icon2 = document.getElementById("icon-2");
            var icon3 = document.getElementById("icon-3");

            if (checked) {
                this.isOpenSidebar = true;
                icon1.style.top = "50%";
                icon1.style.transform = "translateY(-50%) rotate(45deg)";
                icon2.style.opacity = "0";
                icon3.style.bottom = "50%";
                icon3.style.transform = "translateY(50%) rotate(-45deg)";

            } else {
                this.isOpenSidebar = false;
                var style1 = getComputedStyle(icon1);
                icon1.style = style1;
                var style2 = getComputedStyle(icon2);
                icon2.style = style2;
                var style3 = getComputedStyle(icon3);
                icon3.style = style3;
            }
        }
    },
    watch: {
        $route(to, from) {
            if (to.path != from.path) {
                var check = document.getElementById("menu-bnt");
                check.checked = false;
                this.isChecked();
            }
        }
    }
    
}


</script>

<style scoped>

#menu-bnt {
    display: none;
}

.sidebar-bnt {
    width: 30px;
    height: 20px;
    float: left;
    padding-top: 10px;
}

label {
    display: block;    
    position: relative;
    width: 30px;
    height: 20px;
    z-index: 222;
    cursor: pointer;
}

.icon {
    display: block;
    position: absolute;
    background: #000;
    width: 30px;
    height: 3px;
}

#icon-1 {
    top: 5%;
}
#icon-2 {
    top: 45%;
    transform: "translateY(50%)";
}
#icon-3 {
    bottom: 0;
}

.sidebar {
    top: 40px;
    width: 1200px;
    margin: 0 auto 0 auto;
}


.header {
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0px;
    top: 0px;
    z-index: 100;
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
    background-color: white;
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
}
.container {
    max-width: 1200px;
    width: auto;
    height: 100%;
    margin: 0 auto;
    z-index: 100;
    padding-left: 0;
    padding-right: 0;

    background-color: white;
}

ul{
    margin: 0;
    padding: 0;
}
li {
    padding: 0;
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
    line-height: 40px;
    float: right;
}
</style>