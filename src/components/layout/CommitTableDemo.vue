<template>
    <div>
        <table>
            <tr>
                <th id="head">sun</th>
                <th id="head">sat</th>
                <th id="head">fri</th>
                <th id="head">thu</th>
                <th id="head">wed</th>
                <th id="head">tue</th>
                <th id="head">mon</th>
                <th id="head">&nbsp;</th>
            </tr>
            
            <template v-for="item in month">
                <tr v-for="(index,data) in parseInt(item.date)" :key="data">
                    <td class="items" v-for="idx in 7" :key="idx">{{idx}}</td>
                    <th class="head1" style="align-item:left;" v-if="index==1" :rowspan="parseInt(item.date)"><div id="head" style="width:96px;">jan</div></th>
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
    width: 200px;
    transform: rotate(-90deg);
    font-size: 5px;
    border: 0;
}

#head { 
    -webkit-transform: rotate(90deg);
    border: 0;
}

.items {
    background: #EBEDF0;
    border: 2px solid #DFE1E4;
}

table tr td {
    width: 20px;
    height: 20px;
}

</style>