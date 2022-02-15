<template>
    <div>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <th id="head" v-for="item in week" :key="item">
                    <div id="div-th">{{item}}</div>
                </th>
                
            </tr>
            
            <template v-for="item in commits">
                <tr v-for="weeks in item.length" :key="weeks"> <!--주-->
                    <td class="items" v-for="day in week.length" :key="day"> <!--일-->
                        <div id="div-td" v-for="items in item.commit" :key="items">{{items}}</div>
                    </td> 
                    <th class="head1" style="vertical-align:top;" :rowspan="commits.length">
                        <div id="head" style="width:20px; height:20px;">{{item.name}}</div>
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
            commits: [
                {
                    month : "1",
                    commit : [
                        {
                            week : "1",
                            data : [1,2,1,2,1,2,0]
                        },
                        {
                            week : "2",
                            data : [1,2,1,2,1,2,0]
                        },
                        {
                            week : "3",
                            data : [1,2,1,2,1,2,0]
                        },
                        {
                            week : "4",
                            data : [1,2,1,2,1,2,0]
                        },
                        {
                            week : "5",
                            data : [1,2,1,2,1,2,0]
                        },
                    ]
                },

                {
                    month : "2",
                    commit : [
                        {
                            week : "1",
                            data : [1,2,1,2,1,2,0]
                        },
                        {
                            week : "2",
                            data : [1,2,1,2,1,2,0]
                        },
                        {
                            week : "3",
                            data : [1,2,1,2,1,2,0]
                        },
                        {
                            week : "4",
                            data : [1,2,1,2,1,2,0]
                        }
                    ]
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
    margin-top: -330px;
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