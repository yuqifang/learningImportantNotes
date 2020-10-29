window.onload = function () {
    // 投资分析
    var investAnalysis = new Vue({
        el: '#investAnalysis',
        data: {
            showRiskWindow: false,
            riskValue: 100
        },
        created: function () {

        },
        mounted: function () {
            var that = this;
                that.$nextTick(function () {
                    var positionSellingData = [
                        // name: 图例项的名称，icon：图例项的icon
                        {value: 335, name: '权力仓', icon: 'circle'}, 
                        {value: 310, name: '义务仓', icon: 'circle'}, 
                        {value: 135, name: '备兑义务仓', icon: 'circle'}
                    ];
                    var positionSellingOption = {
                        backgroundColor: '#fff',
                        tooltip: {
                            trigger: 'item',
                            show: false, // 不显示点击的黑色提示框
                            formatter: '{a} <br/>{b}: {c} ({d}%)' // 提示框浮层内容格式器
                        },
                        color:['#FE6859','#FFAC37','#3E7ED9'],  //手动设置每个图例的颜色
                        legend: {
                            left: '49.5%',  // 用来调节图例组件距离左边圆环的距离
                            orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                            width:40,      // 接合horizontal及width宽度，将图例换行
                            x : 'right',   // 图例显示在右边
                            y: 'center',   // 图例在垂直方向上面显示居中
                            // itemGap: 12,   // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
                            itemWidth:6,  // 图例标记的图形宽度
                            itemHeight:6, // 图例标记的图形高度
                            selectedMode: false, // 取消图例上的点击事件
                            data: positionSellingData,
                            formatter:  function(name){
                                var total = 0;
                                var target;
                                var data = positionSellingData;
                                for (var i = 0; i < data.length; i++) {
                                    total += data[i].value;
                                    if (data[i].name == name) {
                                        target = data[i].value;
                                    }
                                }
                                var arr = [
                                    '{a|'+name+' :}{b|'+((target/total)*100).toFixed(2)+'%}'
                                    
                                ]
                                return arr.join('\n')
                            },
                            textStyle:{         // 图例文字的样式
                                color:'#333',   // 文字颜色
                                fontSize:12,    // 文字大小
                                rich: {
                                    a: {
                                        fontSize: 12,
                                        align:'left',
                                        padding:[0,8,0,0],
                                        height: 18,
                                        lineHeight: 18,
                                        color: '#666'
                                    },
                                    b: {
                                        fontSize: 14,
                                        align:'right',
                                        padding:[0,0,0,0],
                                        height: 18,
                                        lineHeight: 18,
                                        color: '#333',
                                        fontFamily: 'DIN-Medium'
                                    }
                                }
                            }
                        },
                        graphic: [{ 
                            // 环形图中间添加自定义的文字
                            type: 'text', //通过不同top值可以设置上下显示
                            left: '25%',
                            top: '45%',
                            style: {
                                // text: '环图中添加颜色'+'\n'+'和series平级',
                                text: '买卖'+'\n'+'偏好',
                                textAlign: 'center',
                                fill: '#333', //文字的颜色
                                width: 30,
                                height: 30,
                                fontSize: 12,
                                fontFamily: "PingFangSC-Regular",
                                letterSpacing: 0,
                                lineHeight: 14
                            }
                        }],
                        series: [
                            {
                                name: '访问来源',
                                type: 'pie',
                                center:['28%','50%'],        // 设置饼的原心坐标 不设置就会默认在中心的位置
                                radius: ['55%', '70%'],      // 饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                                avoidLabelOverlap: false,    // 是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠，如果不需要开启该策略，例如圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                                hoverAnimation:false,        // 里外饼图鼠标移入均不放大
                                label: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    label: {
                                        show: false // 鼠标聚焦时，环形图中间不显示图例的name
                                    }
                                },
                                labelLine: {
                                    show: false
                                },
                                itemStyle: {
                                    borderWidth: 2, // 环形与环形之间的间距
                                    borderColor: '#fff'
                                },
                                data: positionSellingData
                            }
                        ]
                    };
                    // 买卖偏好echarts
                    var buySellingEcharts = echarts.init(document.getElementById('buySellingEcharts'));
                    buySellingEcharts.setOption(positionSellingOption);


                    // 购沽偏好
                    var positionPurchaseData = [
                        // name: 图例项的名称，icon：图例项的icon
                        {value: 335, name: '认购', icon: 'circle'}, 
                        {value: 310, name: '认沽', icon: 'circle'}
                    ];
                    var positionPurchaseOption = {
                        backgroundColor: '#fff',
                        tooltip: {
                            trigger: 'item',
                            show: false, // 不显示点击的黑色提示框
                            formatter: '{a} <br/>{b}: {c} ({d}%)' // 提示框浮层内容格式器
                        },
                        color:['#FE6859','#FFAC37'],  //手动设置每个图例的颜色
                        legend: {
                            left: '49.5%',  // 用来调节图例组件距离左边圆环的距离
                            orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                            width:40,      // 接合horizontal及width宽度，将图例换行
                            x : 'right',   // 图例显示在右边
                            y: 'center',   // 图例在垂直方向上面显示居中
                            // itemGap: 12,   // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
                            itemWidth:6,  // 图例标记的图形宽度
                            itemHeight:6, // 图例标记的图形高度
                            selectedMode: false, // 取消图例上的点击事件
                            data: positionPurchaseData,
                            formatter:  function(name){
                                var total = 0;
                                var target;
                                var data = positionPurchaseData;
                                for (var i = 0; i < data.length; i++) {
                                    total += data[i].value;
                                    if (data[i].name == name) {
                                        target = data[i].value;
                                    }
                                }
                                var arr = [
                                    '{a|'+name+' :}{b|'+((target/total)*100).toFixed(2)+'%}'
                                    
                                ]
                                return arr.join('\n')
                            },
                            textStyle:{         // 图例文字的样式
                                color:'#333',   // 文字颜色
                                fontSize:12,    // 文字大小
                                rich: {
                                    a: {
                                        fontSize: 12,
                                        align:'left',
                                        padding:[0,8,0,0],
                                        height: 18,
                                        lineHeight: 18,
                                        color: '#666'
                                    },
                                    b: {
                                        fontSize: 14,
                                        align:'right',
                                        padding:[0,0,0,0],
                                        height: 18,
                                        lineHeight: 18,
                                        color: '#333',
                                        fontFamily: 'DIN-Medium'
                                    }
                                }
                            }
                        },
                        graphic: [{ 
                            // 环形图中间添加自定义的文字
                            type: 'text', //通过不同top值可以设置上下显示
                            left: '25%',
                            top: '45%',
                            style: {
                                // text: '环图中添加颜色'+'\n'+'和series平级',
                                text: '购沽'+'\n'+'偏好',
                                textAlign: 'center',
                                fill: '#333', //文字的颜色
                                width: 30,
                                height: 30,
                                fontSize: 12,
                                fontFamily: "PingFangSC-Regular",
                                letterSpacing: 0,
                                lineHeight: 14
                            }
                        }],
                        series: [
                            {
                                name: '访问来源',
                                type: 'pie',
                                center:['28%','50%'],        // 设置饼的原心坐标 不设置就会默认在中心的位置
                                radius: ['55%', '70%'],      // 饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                                avoidLabelOverlap: false,    // 是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠，如果不需要开启该策略，例如圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                                hoverAnimation:false,        // 里外饼图鼠标移入均不放大
                                label: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    label: {
                                        show: false // 鼠标聚焦时，环形图中间不显示图例的name
                                    }
                                },
                                labelLine: {
                                    show: false
                                },
                                itemStyle: {
                                    borderWidth: 2, // 环形与环形之间的间距
                                    borderColor: '#fff'
                                },
                                data: positionPurchaseData
                            }
                        ]
                    };
                    var purchasePreferenceEcharts = echarts.init(document.getElementById('purchasePreferenceEcharts'));
                    purchasePreferenceEcharts.setOption(positionPurchaseOption);

                    
                    // 期限偏好
                    var limitOptionData = [
                        {value: 335, name: '当月', icon: 'circle'},
                        {value: 310, name: '下月', icon: 'circle'},
                        {value: 310, name: '季度月', icon: 'circle'},
                        {value: 310, name: '下季月', icon: 'circle'}
                    ];
                    var positionLimitOption = {
                        backgroundColor: '#fff',
                        tooltip: {
                            trigger: 'item',
                            show: false, // 不显示点击的黑色提示框
                            formatter: '{a} <br/>{b}: {c} ({d}%)' // 提示框浮层内容格式器
                        },
                        color:['#FE6859','#FFAC37','#3E7ED9', '#C85FFF'],  //手动设置每个图例的颜色
                        legend: {
                            left: '49.5%',  // 用来调节图例组件距离左边圆环的距离
                            orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                            width:40,      // 接合horizontal及width宽度，将图例换行
                            x : 'right',   // 图例显示在右边
                            y: 'center',   // 图例在垂直方向上面显示居中
                            // itemGap: 12,   // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
                            itemWidth:6,  // 图例标记的图形宽度
                            itemHeight:6, // 图例标记的图形高度
                            selectedMode: false, // 取消图例上的点击事件
                            data: limitOptionData,
                            formatter:  function(name){
                                var total = 0;
                                var target;
                                var data = limitOptionData
                                for (var i = 0; i < data.length; i++) {
                                    total += data[i].value;
                                    if (data[i].name == name) {
                                        target = data[i].value;
                                    }
                                }
                                var arr = [
                                    '{a|'+name+' :}{b|'+((target/total)*100).toFixed(2)+'%}'
                                    
                                ]
                                return arr.join('\n')
                            },
                            textStyle:{         // 图例文字的样式
                                color:'#333',   // 文字颜色
                                fontSize:12,    // 文字大小
                                rich: {
                                    a: {
                                        fontSize: 12,
                                        align:'left',
                                        padding:[0,8,0,0],
                                        height: 18,
                                        lineHeight: 18,
                                        color: '#666'
                                    },
                                    b: {
                                        fontSize: 14,
                                        align:'right',
                                        padding:[0,0,0,0],
                                        height: 18,
                                        lineHeight: 18,
                                        color: '#333',
                                        fontFamily: 'DIN-Medium'
                                    }
                                }
                            }
                        },
                        graphic: [{ 
                            // 环形图中间添加自定义的文字
                            type: 'text', //通过不同top值可以设置上下显示
                            left: '25%',
                            top: '45%',
                            style: {
                                // text: '环图中添加颜色'+'\n'+'和series平级',
                                text: '购沽'+'\n'+'偏好',
                                textAlign: 'center',
                                fill: '#333', //文字的颜色
                                width: 30,
                                height: 30,
                                fontSize: 12,
                                fontFamily: "PingFangSC-Regular",
                                letterSpacing: 0,
                                lineHeight: 14
                            }
                        }],
                        series: [
                            {
                                name: '访问来源',
                                type: 'pie',
                                center:['28%','50%'],        // 设置饼的原心坐标 不设置就会默认在中心的位置
                                radius: ['55%', '70%'],      // 饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                                avoidLabelOverlap: false,    // 是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠，如果不需要开启该策略，例如圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                                hoverAnimation:false,        // 里外饼图鼠标移入均不放大
                                label: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    label: {
                                        show: false // 鼠标聚焦时，环形图中间不显示图例的name
                                    }
                                },
                                labelLine: {
                                    show: false
                                },
                                itemStyle: {
                                    borderWidth: 2, // 环形与环形之间的间距
                                    borderColor: '#fff'
                                },
                                data: limitOptionData
                            }
                        ]
                    };
                    var timeLimitEcharts = echarts.init(document.getElementById('timeLimitEcharts'));
                    timeLimitEcharts.setOption(positionLimitOption);
                    // 标的证券偏好
                    var option = {
                        backgroundColor: '#fff',
                        tooltip: {
                            trigger: 'item',
                            show: false, // 不显示点击的黑色提示框
                            formatter: '{a} <br/>{b}: {c} ({d}%)' // 提示框浮层内容格式器
                        },
                        color:['#48cda6','#fd87fb','#11abff','#ffdf6f','#968ade'],  //手动设置每个图例的颜色
                        legend: {
                            left: '49.5%',  // 用来调节图例组件距离左边圆环的距离
                            orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                            width:40,      // 接合horizontal及width宽度，将图例换行
                            x : 'right',   // 图例显示在右边
                            y: 'center',   // 图例在垂直方向上面显示居中
                            // itemGap: 12,   // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
                            itemWidth:6,  // 图例标记的图形宽度
                            itemHeight:6, // 图例标记的图形高度
                            selectedMode: false, // 取消图例上的点击事件
                            data: [
                                // name: 图例项的名称，icon：图例项的icon
                                {name: '直接访问', icon: 'circle'}, 
                                {name: '邮件营销', icon: 'circle'}, 
                                {name: '联盟广告', icon: 'circle'}, 
                                {name: '视频广告', icon: 'circle'}, 
                                {name: '搜索引擎', icon: 'circle'}
                            ],
                            formatter:  function(name){
                                var total = 0;
                                var target;
                                var data = [
                                    {value: 335, name: '直接访问'},
                                    {value: 310, name: '邮件营销'},
                                    {value: 234, name: '联盟广告'},
                                    {value: 135, name: '视频广告'},
                                    {value: 1548, name: '搜索引擎'}
                                ];
                                for (var i = 0; i < data.length; i++) {
                                    total += data[i].value;
                                    if (data[i].name == name) {
                                        target = data[i].value;
                                    }
                                }
                                var arr = [
                                    '{a|'+name+' :}{b|'+((target/total)*100).toFixed(2)+'%}'
                                    
                                ]
                                return arr.join('\n')
                            },
                            textStyle:{         // 图例文字的样式
                                color:'#333',   // 文字颜色
                                fontSize:12,    // 文字大小
                                rich: {
                                    a: {
                                        fontSize: 12,
                                        align:'left',
                                        padding:[0,8,0,0],
                                        height: 18,
                                        lineHeight: 18,
                                        color: '#666'
                                    },
                                    b: {
                                        fontSize: 14,
                                        align:'right',
                                        padding:[0,0,0,0],
                                        height: 18,
                                        lineHeight: 18,
                                        color: '#333',
                                        fontFamily: 'DIN-Medium'
                                    }
                                }
                            }
                        },
                        graphic: [{ 
                            // 环形图中间添加自定义的文字
                            type: 'text', //通过不同top值可以设置上下显示
                            left: '25%',
                            top: '45%',
                            style: {
                                // text: '环图中添加颜色'+'\n'+'和series平级',
                                text: '买卖'+'\n'+'偏好',
                                textAlign: 'center',
                                fill: '#333', //文字的颜色
                                width: 30,
                                height: 30,
                                fontSize: 12,
                                fontFamily: "PingFangSC-Regular",
                                letterSpacing: 0,
                                lineHeight: 14
                            }
                        }],
                        series: [
                            {
                                name: '访问来源',
                                type: 'pie',
                                center:['28%','50%'],        // 设置饼的原心坐标 不设置就会默认在中心的位置
                                radius: ['55%', '70%'],      // 饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                                avoidLabelOverlap: false,    // 是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠，如果不需要开启该策略，例如圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                                hoverAnimation:false,        // 里外饼图鼠标移入均不放大
                                label: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    label: {
                                        show: false // 鼠标聚焦时，环形图中间不显示图例的name
                                    }
                                },
                                labelLine: {
                                    show: false
                                },
                                itemStyle: {
                                    borderWidth: 2, // 环形与环形之间的间距
                                    borderColor: '#fff'
                                },
                                data: [
                                    {value: 335, name: '直接访问'},
                                    {value: 310, name: '邮件营销'},
                                    {value: 234, name: '联盟广告'},
                                    {value: 135, name: '视频广告'},
                                    {value: 1548, name: '搜索引擎'}
                                ]
                            }
                        ]
                    };
                    var underlyingEcharts = echarts.init(document.getElementById('underlyingEcharts'));
                    underlyingEcharts.setOption(option);
                })   
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
            goShowRiskMessage: function () {
                this.showRiskWindow = true
            },
            closeRiskMessage: function () {
                this.showRiskWindow = false
            },
            calculateRiskLevel: function () {
                var riskValue = Number(this.riskValue);
                if (riskValue == 0) {
                    return 0;
                }else if (0 < riskValue && riskValue <= 26.66) {
                    return 1;
                }else if (26.66 < riskValue && riskValue <= 53.33) {
                    return 2;
                }else if (53.33 < riskValue && riskValue < 80) {
                    return 3;
                }else if (80 <= riskValue && riskValue <= 83.33) {
                    return 4;
                }else if (83.33 < riskValue && riskValue <= 86.66) {
                    return 5;
                }else if (86.66 < riskValue && riskValue < 90) {
                    return 6;
                }else if (90 <= riskValue && riskValue <= 93.33) {
                    return 7;
                }else if (93.33 < riskValue && riskValue <= 96.66) {
                    return 8;
                }else if (96.66 < riskValue && riskValue < 100) {
                    return 9;
                }else {
                    return 10;
                }
            }
        },

        filters: {

        },

        watch: {

        }
    });
}

