<template>
    <div>
            <table cellspacing="0" cellpadding="0">
            <tr>
                <th id="head" v-for="item in week" :key="item">
                    <div id="div-th">{{item}}</div>
                </th>
                
            </tr>
            
            <template v-for="item in commit">
                <tr v-for="(data, index) in item.data" :key="data">
                    <td id="head1" v-for="idx in 7" :key="idx">
                        {{data.commits[idx-1]}}
                    </td>
                    <th id="head" v-if="index==0" :rowspan="item.data.length" :key="index">
                        {{item.month}}
                    </th>
                </tr>
            </template>

        </table>

    </div>
</template>

<script>
export default {
    data() {
        return {
            week : ["SUN", "STA", "FRI", "THU", "WED", "TUE", "MON", " "],
            month : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
            commit: [
                {
                    month : "JAN",
                    data: [
                        {
                            "week" : 1,
                            commits: [10]
                        },
                        
                        {
                            "week" : 2,
                            commits: [1,4,6,1,7,9,10]
                        },
                        
                        {
                            "week" : 3,
                            commits: [1,1,3,4,5,6,10]
                        },
                        
                        {
                            "week" : 4,
                            commits: [1,1,3,4,5,6,10]
                        },
                        
                        {
                            "week" : 5,
                            commits: [1,1,3,4,5,6,10]
                        }
                    ]
                },
                {
                    month : "FEB",
                    data: [
                        {
                            "week" : 1,
                            commits: [1,1,3,4,5,6,10]
                        },
                        
                        {
                            "week" : 2,
                            commits: [1,4,6,1,7,9,10]
                        },
                        
                        {
                            "week" : 3,
                            commits: [1,1,3,4,5,6,10]
                        },
                        
                        {
                            "week" : 4,
                            commits: [1,1,3,4,5,6,10]
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
}

#head {
    transform: rotate(90deg);
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
    /* height: 20px; */
    transform: rotate(90deg);
}



</style>