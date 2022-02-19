<template>
    <div id="switch">
        <div id="sphere"></div>
    </div>
</template>

<script>
export default {
    props: {
        recruit:Boolean
    },
    methods: {
        switch(recruit) {
            if (recruit) {
                document.getElementById("switch").style.background="#F2D522";
            }
            // on
            else {
                document.getElementById("sphere").style.transform = "translate(17px)";
            }
            // off
        }
    },

    //created, mounted, destroyed
    mounted() {
        this.switch(this.recruit);
    }
}
</script>

<style scoped>
#switch {
    width: 35px;
    height: 18px;
    border-radius: 20px;
    background-color: lightgray;
    box-shadow: inset 1px 5px 1px #999;
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