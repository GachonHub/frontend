<template>
    <div>
        <input id="checkbox" type="checkbox" @change="check($event.target.checked)" :checked="recruit">
        <label for="checkbox">
            <div id="swc">
                <div id="sphere"></div>
            </div>
        </label>
    </div>

</template>

<script>
export default {
    props: {
        recruit:Boolean
    },
    methods: {
        check(recruit) {
            console.log(recruit);
            // var recruit = document.getElementById("checkbox").checked;
            console.log((recruit)?"#75b798":"lightgray");
            console.log((recruit)?"translate(17px)":"translate(0px)");
                document.getElementById("swc").style.background=(recruit)?"#75b798":"lightgray";
                document.getElementById("sphere").style.transform = (recruit)?"translate(17px)":"translate(0px)";

            this.$emit('save', recruit);
        }
    }
}
</script>

<style scoped>
#checkbox {
    display: none;
}

#swc {
    width: 35px;
    height: 18px;
    border-radius: 20px;
    background-color: lightgray;
    box-shadow: inset 1px 5px 1px rgba(0,0,0,0.25);
}
#sphere {
    width: 10px;
    height: 10px;
    border-radius: 70%;
    background: white;
    position:relative;
    top: 4px;
    left: 4px;
}
</style>