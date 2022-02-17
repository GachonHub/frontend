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

                    <td id="head1 items" v-for="idx in 7" :key="idx" 
                    :class="[ data.commits[idx-1]==0 ? 'no items' : (data.commits[idx-1]<=2 ? 'zero items' : (data.commits[idx-1]<=4 ? 'twofive items' : ( data.commits[idx-1]<=6 ? 'fifty items' : ( data.commits[idx-1]<=8 ? 'sevenfive items':( data.commits[idx-1]<=10 ? 'hundred items' : 'items'))))) ]">
                        <!-- {{data.commits[idx-1]}} -->
                    </td>
                    <th id="month-head" v-if="index==0" :rowspan="item.data.length" :key="index">
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
            week : ["SAT","FRI","THU","WED","TUE","MON","SUN"," "],
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
                        },
                        {
                            "week" : 6,
                            commits: [1,3,5,7,8,9,10]
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
                },
                {
                    month : "Mar",
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
                },
                {
                    month : "APR",
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
                },
                {
                    month : "MAY",
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
                        },
                        {
                            "week" : 5,
                            commits: [1,6,6,7,8,8,10]
                        }
                    ]
                },
                {
                    month : "JUN",
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
                },
                {
                    month : "JUL",
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
                        },
                        {
                            "week" : 5,
                            commits: [1,6,6,7,8,8,10]
                        }
                    ]
                },
                {
                    month : "AUG",
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
                },
                {
                    month : "SEP",
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
                },
                {
                    month : "OCT",
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
                        },
                        {
                            "week" : 5,
                            commits: [1,6,6,7,8,8,10]
                        }
                    ]
                },
                {
                    month : "NOV",
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
                },
                {
                    month : "DEC",
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
    margin: -500px auto auto 500px;
    border-collapse: separate;
    border-spacing: 5px;
}

#head {
    transform: rotate(90deg);
    border: 0;
}

#month-head {
    writing-mode: vertical-rl;
    text-align: left;
}

.items {
    line-height: 15px;
    border: 0;
    width: 15px;
    height: 15px;
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
    transform: rotate(90deg);
    height: 20px;
    width: 20px;
}

/* 테이블 색상 */
.no {
    border: 0;
    background: transparent;
}
.zero {
    background: #EBEDF0;
     border: 2px solid #DFE1E4;
    box-sizing: border-box;
    border-radius: 5px; 
}
.twofive {
    background: #B1D7B4;
    border: 2px solid #9CCA9F;
    box-sizing: border-box;
    border-radius: 5px;
}
.fifty {
    background: #79B081;
    border: 2px solid #669F6E;
    box-sizing: border-box;
    border-radius: 5px;
}
.sevenfive {
    background: #698D6E;
    border: 2px solid #4A7D51;
    box-sizing: border-box;
    border-radius: 5px;
}
.hundred {
    background: #336B3E;
    border: 2px solid #32683D;
    box-sizing: border-box;
    border-radius: 5px;
}

</style>