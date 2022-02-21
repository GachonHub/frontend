<template>
    <div>
        <input id="checkbox" type="checkbox" @change="check">
        <label for="checkbox">
            <div id="switch">
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
        check() {
            var recruit = document.getElementById("checkbox").checked;
            if (recruit) {
                document.getElementById("switch").style.background="#75b798";
                document.getElementById("sphere").style.transform = "translate(17px)";
            }
            // on
            else {
                document.getElementById("switch").style.background="lightgray";
                document.getElementById("sphere").style.transform = "translate(0px)";

            }
            // off
            this.$emit('save', recruit);
        }
    },
    mounted() {
        this.check(this.recruit);
    }
}
</script>

<style scoped>
#checkbox {
    display: none;
}

#switch {
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