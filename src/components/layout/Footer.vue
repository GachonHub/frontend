<template>
    <div class="footer">
        
        <div class="container">
            <h1 class="green_footer">ⓒ GachonHub</h1>
            &nbsp;
            <h1 class="black_footer">by jaeesu & tearofglass</h1>
        </div>
        <hr>
    </div>
</template>

<style scoped>
.footer {
    width: 100%;
    height: 40px;
}
.container {
    max-width: 1200px;
    width: auto;
    height: 100%;
    margin: 0 auto;
    background-color: white;
    
    display: flex;
    justify-content: center;
}
hr {
    width: 100%;
    height: 0.1px;
    top: 0;
    margin: 0;
    background-color: grey;

    position: absolute;
}
h1 {
    margin:11px 0 0 0;
    font-size: 18px;
    font-weight: normal;
}
.green_footer {
    color: #8EB094;
}
.black_footer {
    color: black;
}
</style>