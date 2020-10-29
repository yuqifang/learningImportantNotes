window.onload = function () {
    // 信用交易
    var monthBill = new Vue({
        el: '#monthBill',
        data: {
            showStart: false,
            minDate: new Date(2000, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            choiceTime: '' // 选择的时间
        },
        created: function () {
            

        },
        mounted: function () {
            this.investAllShow(); // 投资总览echarts
            this.profitsShow();   // 收益表现echarts
        },
        methods: {
            goMonth: function () {
                // 跳转至期权交易投资账单下的“月度账单”
                __webCallTql.send(
                    'tdxOpenNativeModule',
                    {
                        'OpenName': "月度账单",
                        'OpenType': 'native',
                        'OpenID': 'Ggqq.tzzd.monthBill',
                        'OpenParam': {
                            "UrlType": "Absolute",
                        }
                    }
                )
            },
            goAnalysis: function () {
                // 跳转至期权交易投资账单下的“投资分析”
                __webCallTql.send(
                    'tdxOpenNativeModule',
                    {
                        'OpenName': "投资分析",
                        'OpenType': 'native',
                        'OpenID': 'Ggqq.tzzd.investAnalysis',
                        'OpenParam': {
                            "UrlType": "Absolute",
                        }
                    }
                )
            },

            investAllShow: function () {
                var that = this;
                // 投资总览echarts
                that.$nextTick(function () {
                    var option = {
                        tooltip: {
                            // 鼠标经过一点时，弹窗的样式
                            trigger: 'axis',
                            confine: true, // 将tooltip框限制在图标的区域内
                            axisPointer: {
                                lineStyle: {
                                    color: '#FEB3AC' // 选中某个折线点平行与Y轴竖线的颜色
                                }
                            },
                            showContent: true,   // 显示提示框浮层
                            backgroundColor: '#FEEFEE',
                            borderColor: '#FEEFEE',
                            padding: [5, 10],
                            textStyle: {
                                color: '#333'
                            }
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisLine:{ // 设置轴线的属性
                                lineStyle:{
                                    color:'#F0F0F0', // 修改X轴的颜色
                                }             
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#999' // 修改X轴文字的颜色
                                }
                            }
                        },
                        yAxis: {
                            type: 'value',
                            axisLine: {
                                show: false // 不显示y坐标轴线
                            },
                            axisTick:{
                                show:false // 不显示坐标轴刻度
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#999' // 修改Y轴文字的颜色
                                }
                            },
                            splitLine: {
                                // 平行于X轴分割线的颜色
                                show: true,
                                lineStyle: {
                                    color: ['#F0F0F0']
                                }
                            }
                        },
                        series: [{
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type:'line',
                            smooth:true,
                            symbolSize: 6,   //设定实心点的大小
                            lineStyle:{
                                color:'#FE6859' //改变折线颜色
                            },
                            lineWidth: 2,
                            itemStyle: {
                                normal: {
                                    areaStyle: {type: 'default'},
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(254, 104, 89, 0.4)'},
                                            {offset: 0.5, color: 'rgba(254, 104, 89, 0.2)'},
                                            {offset: 1, color: 'rgba(254, 104, 89, 0.1)'}
                                        ]
                                    ),
                                    borderColor:'#FE6859', // 拐点边框颜色
                                    borderWidth:2 // 拐点边框大小
                                }
                            }
                        }],
                        grid: {
                            left: 0,
                            top: '15px',
                            right: '15px',
                            bottom: '20px',
                            containLabel: true
                        }
                    };
                    var allSeeEcharts = echarts.init(document.getElementById('allSeeEcharts'));
                    // 使用刚指定的配置项和数据显示图表。
                    allSeeEcharts.setOption(option);
                });
            },

            profitsShow: function () {
                // 收益表现echarts
                var that = this;
                that.$nextTick(function () {
                    var option = {
                        tooltip: {
                            // 鼠标经过一点时，弹窗的样式
                            trigger: 'axis',
                            confine: true, // 将tooltip框限制在图标的区域内
                            axisPointer: {
                                lineStyle: {
                                    color: '#FEB3AC' // 选中某个折线点平行与Y轴竖线的颜色
                                }
                            },
                            showContent: true,   // 显示提示框浮层
                            backgroundColor: '#FEEFEE',
                            borderColor: '#FEEFEE',
                            padding: [5, 10],
                            textStyle: {
                                color: '#333'
                            }
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisLine:{ // 设置轴线的属性
                                lineStyle:{
                                    color:'#F0F0F0', // 修改X轴的颜色
                                }             
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#999' // 修改X轴文字的颜色
                                }
                            }
                        },
                        yAxis: {
                            type: 'value',
                            axisLine: {
                                show: false // 不显示y坐标轴线
                            },
                            axisTick:{
                                show:false // 不显示坐标轴刻度
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#999' // 修改Y轴文字的颜色
                                }
                            },
                            splitLine: {
                                // 平行于X轴分割线的颜色
                                show: true,
                                lineStyle: {
                                    color: ['#F0F0F0']
                                }
                            }
                        },
                        series: [
                            {
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type:'line',
                                smooth:true,
                                symbolSize: 6,   // 设定实心点的大小
                                lineStyle:{
                                    color:'#FE6859' // 改变折线颜色
                                },
                                lineWidth: 2,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {type: 'default'},
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: 'rgba(254, 104, 89, 0.3)'},
                                                {offset: 0.5, color: 'rgba(254, 104, 89, 0.15)'},
                                                {offset: 1, color: 'rgba(254, 104, 89, 0.1)'}
                                            ]
                                        ),
                                        borderColor:'#FE6859', // 拐点边框颜色
                                        borderWidth:2 // 拐点边框大小
                                    }
                                }
                            },
                            {
                                data: [1420, 632, 201, 1434, 620, 500, 100],
                                type:'line',
                                smooth:true,
                                symbolSize: 6,      // 设定实心点的大小
                                lineStyle:{
                                    color:'#3E7ED9' // 改变折线颜色
                                },
                                lineWidth: 2,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {type: 'default'},
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: 'rgba(62, 126, 217, 0.4)'},
                                                {offset: 0.5, color: 'rgba(62, 126, 217, 0.2)'},
                                                {offset: 1, color: 'rgba(62, 126, 217, 0.1)'}
                                            ]
                                        ),
                                        borderColor:'#3E7ED9', // 拐点边框颜色
                                        borderWidth:2 // 拐点边框大小
                                    }
                                }
                            },
                        ],
                        grid: {
                            left: 0,
                            top: '15px',
                            right: '15px',
                            bottom: '20px',
                            containLabel: true
                        }
                    };
                    var allSeeEcharts = echarts.init(document.getElementById('performanceEcharts'));
                    // 使用刚指定的配置项和数据显示图表。
                    allSeeEcharts.setOption(option);
                })   
            },

            formatter: function(type, val) {
                if (type === 'year') {
                    return `${val}年`;
                } else if (type === 'month') {
                    return `${val}月`;
                }
                return val;
            },
            showYearMonth: function () {
                this.showStart = true
            },
            confirmPicker: function (time) {
                this.showStart = false;
                var year = time.getFullYear();
                var month = time.getMonth() + 1;
                this.choiceTime = year + '-' + month;
            },
            cancelPicker: function () {
                this.showStart = false;
            }
        },

        filters: {

        },

        watch: {

        }
    });
}


