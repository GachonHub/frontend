<template>
    <div class="commit_table">
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th v-for="item in days" v-bind:key="item">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Jan</th>
                    <div v-for="item in 5" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 5*7-31 = 4 -->
                </tr>
                <tr>
                    <th>Feb</th>
                    <div v-for="item in 4" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 4*7-(28-4) = 4 -->
                </tr>
                <tr>
                    <th>Mar</th>
                    <div v-for="item in 4" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 4*7-(31-4) = 1 -->
                </tr>
                <tr>
                    <th>Apr</th>
                    <div v-for="item in 5" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 5*7-(30-1) = 6 -->
                </tr>
                <tr>
                    <th>May</th>
                    <div v-for="item in 4" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 4*7-(31-6) = 3 -->
                </tr>
                <tr>
                    <th>Jun</th>
                    <div v-for="item in 4" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 4*7-(30-3) = 1 -->
                </tr>
                <tr>
                    <th>Jul</th>
                    <div v-for="item in 5" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 5*7-(31-1) = 5 -->
                </tr>
                <tr>
                    <th>Aug</th>
                    <div v-for="item in 4" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 4*7-(31-5) = 2 -->
                </tr>
                <tr>
                    <th>Sep</th>
                    <div v-for="item in 4" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 4*7-(30-2) = 0 -->
                </tr>
                <tr>
                    <th>Oct</th>
                    <div v-for="item in 5" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 5*7-(31-2) = 6 -->
                </tr>
                <tr>
                    <th>Nov</th>
                    <div v-for="item in 4" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <!-- 4*7-(30-6) = 4 -->
                </tr>
                <tr>
                    <th>Dec</th>
                    <div v-for="item in 4" v-bind:key="item">
                        <td v-for="item in 7" v-bind:key="item"></td>
                    </div>
                    <div>
                        <td></td>
                    </div>
                    <!-- 4*7-(31-4) = 1 -->
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            days: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
            month: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

        }
    },
}
</script>

<style scoped>
/* :root {
    --zero-percent:#EBEDF0;
    --zero-border: #DFE1E4;
    --twentyf-percent:#B1D7B4;
    --twentyf-border:#9CCA9F;
    --fifty-percent:#79B081;
    --fifty-border:#669F6E;
    --seventyf-percent:#698D6E;
    --seventyf-border:#4A7D51;
    --hundred-percent:#336B3E;
    --hundred-border: #32683D;
}
.title > th, tr>td:nth-child(1){
    font-size: 14px;
    font-weight: 700;

    text-align: left;

    background-color: white;
    border: 0;
    border-radius: 0;
}*/
table{
    display:flex;
    display: -webkit-box;
    display: -ms-flexbox;
    overflow-x: auto;
    overflow-y: hidden;
    font-size: 14px;
    font-weight: 700;

    text-align: left;
}

tbody {display:flex;}

th{display:block;}

td {
    display:block;
    width: 20px;
    height: 20px;
    background-color: #EBEDF0;
    border: 2px solid #DFE1E4;
    box-sizing: border-box;
    border-radius: 5px;
}

div {
    display: inline-block;
}
/*
.disabled {
    background-color: transparent;
    border: 0;
} */

</style>