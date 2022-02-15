<template>
    <div>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <th id="head" v-for="item in week" :key="item">
                    <div id="div-th">{{item}}</div>
                </th>
                
            </tr>
            
            <template v-for="item in month">
                <tr v-for="(index,data) in parseInt(item.date)" :key="data">
                    <td class="items" v-for="idx in 7" :key="idx">
                        <div id="div-td">{{idx}}</div>
                    </td>
                    <th class="head1" style="vertical-align:top;" v-if="index==1" :rowspan="parseInt(item.date)">
                        <div id="head" style="width:20px; height:20px;">jan</div>
                    </th>
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
            week : ["SUN", "SAT", "FRI", "THU", "WED", "THU", "MON", " "],
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
    width: 150px;
    height: 500px;
    transform: rotate(-90deg);
    font-size: 5px;
    border: 0;
    margin: 100px auto auto 500px;
}

#head {
    writing-mode: vertical-rl;
    border: 0;
}

.items {
    background: #EBEDF0;
    border: 2px solid #DFE1E4;
    line-height: 15px;
    width: 15px;
    height: 15px;
    font-size: 5px;
}

#div-td {
    width: 15px;
    height: 15px;
    margin: 0;
    padding: 0;
}

#div-th {
    font-size: 5px;
    width: 15px;
    margin: 0;
}

table tr th {
    line-height: 20px;
    font-size: 5px;
    border: 0;
}

#head1 {
    height: 20px;
}



</style>