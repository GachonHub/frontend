<template>
    <div>
        <button type="button" id="Interlock-b"><i id="Interlock-i" class="bi bi-arrow-clockwise"></i></button>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
button {
    border-radius: 70%;
    background: white;
    color: green;
    border-color: lightgray;
    width: 32px;
    height: 32px;
}
button:hover {
    background: rgb(163, 207, 187);
    color: white;
    transform: rotate(90deg);
    transition: 1s;
}
button:not( :hover){
    background: white;
    color: green;
    transform: rotate(-90deg);
    transition: 1s;
}
</style>