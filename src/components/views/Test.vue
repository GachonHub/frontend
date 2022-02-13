<template>
    <div>
        <table>
            <tr>
                <th id="head">none</th>
                <th id="head">mon</th>
                <th id="head">tue</th>
                <th id="head">wed</th>
                <th id="head">thu</th>
                <th id="head">fri</th>
                <th id="head">sat</th>
                <th id="head">sun</th>
            </tr>
            
            <template v-for="item in month">
                <tr v-for="(index,data) in parseInt(item.date)" :key="data">
                    <td v-for="idx in 7" :key="idx">{{idx}}</td>
                    <th id="head" v-if="index==1" :rowspan="parseInt(item.date)">jan</th>
                </tr>

            </template>



            <!-- month, month.name month.date -->
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            month : [
                {
                    name : 'jan',
                    date : '4'
                },
                {
                    name : 'feb',
                    date : '4'
                },
                {
                    name : 'mar',
                    date : '4'
                },
                {
                    name : 'apr',
                    date : '4'
                },
                {
                    name : 'may',
                    date : '4'
                },
                {
                    name : 'jun',
                    date : '4'
                }
            ]
        }
    }
}
</script>

<style scoped>
table {
    width: 300px;
    -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
    transform: rotate(-90deg);
}

#head {
    -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
    transform: rotate(90deg);
}
</style>