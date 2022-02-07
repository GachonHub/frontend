<template>
    <div class="container">
        <button type="button" id="modal_btn">스터디원 모집글 작성하기</button>
        <div class="black_bg modal_wrap">
            <div class="modal_close"><a href="#">close</a></div>
            <div>모달창 내용</div>
        </div>
        
    </div>
</template>

<script>
    window.onload = function() {
 
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
 
    document.querySelector('#modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);
 
};
</script>

<style scoped>

.black_bg {
    display: none;
    background-color: black;
    position: relative;
    
    color: red;
    z-index: 100;

    width: 1200px;
    height: calc(100vh - 110px);
    margin: 0 auto;
}
</style>