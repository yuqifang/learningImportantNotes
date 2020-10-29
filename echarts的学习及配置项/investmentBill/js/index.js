window.onload = function () {
    // 信用交易
    var investmentBill = new Vue({
        el: '#investmentBill',
        data: {
            // text: "交易未登录",
            // islogin: false,
            // zzc: '',
            // zsz: '',
            // fdyk: '',
            // kyzj: '',
            // kqzj: '',
            // wcdbbl: '',
            // hosttype: '',
            // hide_data: false,
            // closeCardMsg: true,
            // ZJZH: "",
            // shortcuts: [{
            //     mode: 'JavaMode',
            //     title: '普通买入',
            //     url: 'DBP.Credit.buy',
            //     shareinfo: 'l',
            //     imgSrc: 'img/ptmr.png'
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '普通卖出',
            //     url: 'DBP.Credit.sell',
            //     shareinfo: '',
            //     imgSrc: 'img/ptmc.png'
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '融资买入',
            //     url: 'Credit.rzmr',
            //     shareinfo: '',
            //     imgSrc: 'img/rqmr.png'
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '融券卖出',
            //     url: 'Credit.rqmc',
            //     shareinfo: '',
            //     imgSrc: 'img/rqmc.png'
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '还款还券',
            //     url: 'Credit.hkhq',
            //     shareinfo: '',
            //     imgSrc: 'img/hqhk.png'
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '委托撤单',
            //     url: 'Credit.cancel',
            //     shareinfo: '',
            //     imgSrc: 'img/cdwt.png'
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '持仓查询',
            //     url: 'Credit.ch',
            //     shareinfo: '',
            //     imgSrc: 'img/xy_cc.png'
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '综合查询',
            //     url: 'Credit.rzrqcx',
            //     shareinfo: '',
            //     imgSrc: 'img/xy_more.png'
            // },

            // ],
            // shortcuts1: [{
            //     mode: 'JavaMode',
            //     title: '新股申购',
            //     subtitle: '',
            //     url: 'Credit.xgsg.xgsg',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '科创板新股申购',
            //     subtitle: '',
            //     url: 'Credit.xgsg.xgsgkcb',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '创业板盘后固定价格交易',
            //     subtitle: '',
            //     url: 'Credit.cyb',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '合约展期',
            //     url: 'Credit.hyzq',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '合约查询',
            //     url: 'Credit.rzrqcx.ychhycx',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '还款查询',
            //     url: 'Credit.rzrqcx.hkcx',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '担保品划转',
            //     url: 'Credit.dbphz.dbphz',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '投资账单',
            //     url: 'Credit.tzzd',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '额度申请',
            //     url: 'Credit.rzrqcx.edsq',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '银证业务',
            //     url: 'Credit.yzyw',
            //     shareinfo: '',
            // },
            // {
            //     mode: 'JavaMode',
            //     title: '其他业务',
            //     url: 'Credit.jysz',
            //     shareinfo: '',
            // },
            // ],
            // clientid: "",
            // brokeid: "",
            // theGemData: { // 信用交易创业板权限提醒功能数据
            //     show: false, // true表示：满足深证股东账号权限有j且没有w, false表示不满足该条件
            //     dontRemind: false, // false仅表示当前没有选中不再提醒
            // },
            // titleHtml: '', // 公告弹窗的头部
            // contentHtml: '' // 公告弹窗的内容 
        },
        created: function () {
            
            // this.initStart();

            // var _ = this;
            // var d = new Date();
            // var d1 = Date.parse(d.toUTCString());
            // _.activitDate = d1;

            // window.tdxActivity = function () {
            //     _.initStart();

            // }

            // window.OnTdxTradeLoginOK = function () { }

            // window.OnTdxTradeLoginQuit = function () {
            //     // _.initStart();
            // }

            // var webCallTql1 = new WEBCallTql();
            // var entry1 = 'tdxRegNotification';
            // var param1 = {
            //     "NotificationName": "CONNECTSUCECCESS", //通知名称
            //     "OperCallBack": 'callBack' // callBack为 链接成功后回调方法 ，可自定义
            // };

            // webCallTql1.send(entry1, param1, function () { });

            // function callBack(data) {
            //     data = base64Decode(data);
            //     data = JSON.parse(data);
            //     /** 刷新界面 **/
            //     location.reload();
            // }
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
            }
            //// 注释掉
            // initStart: function () {
            //     var _self = this;
            //     var u = navigator.userAgent;
            //     if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
            //         __tdxgetAccList(function (data) {
            //             if (data.length == 0) {
            //                 _self.islogin = false;
            //                 _self.ZJZH = "";
            //                 _self.text = "交易未登录";
            //             } else {
            //                 for (var i in data) {
            //                     var newListdata = JSON.parse(data[i]);
            //                     if (newListdata.HostType == 1) {
            //                         // HostType的值含义 0-普通交易  1-信用交易 2-期货 3-港股 4-期权
            //                         _self.islogin = true;
            //                         var str1 = newListdata.Name.split("");
            //                         str1.splice(1, 3, "**");
            //                         var name_arr = str1.join("");
            //                         _self.ZJZH = JSON.parse(newListdata.ZJZH)[0];
            //                         _self.clientid = newListdata.DFKHDM; // 客户编号
            //                         _self.brokeid = newListdata.broker_id;
            //                         var str2 = JSON.parse(newListdata.ZJZH)[0].substr(0, 3) + '**' + JSON.parse(newListdata.ZJZH)[0].substr(-4);
            //                         _self.text = "姓名:" + name_arr + "  " + "账号:" + str2;
            //                         var param = [
            //                             { "F1207": "P" },
            //                             { "F130": "0" }
            //                         ];
            //                         __jyCallTql.send("104", param, function (res) {
            //                             var jsonData = FormatResult(res);
            //                             if (jsonData.ErrorCode != "0") {
            //                                 _self.kqzj = "--";
            //                                 _self.zzc = "--";
            //                                 _self.zsz = "--";
            //                                 _self.kyzj = "--";
            //                             } else {
            //                                 _self.kqzj = jsonData.rows[0]["F302"]
            //                                 _self.zzc = jsonData.rows[0]["F310"];
            //                                 _self.zsz = jsonData.rows[0]["F205"];
            //                                 _self.kyzj = jsonData.rows[0]["F301"];
            //                             }
            //                         });
            //                         var para2 = [
            //                             { "F1207": "P" }
            //                         ];
            //                         __jyCallTql.send("1114", para2, function (res) {
            //                             var jsonData = FormatResult(res);
            //                             if (jsonData.ErrorCode != "0") {
            //                                 _self.fdyk = "--";
            //                             } else {
            //                                 var num = 0;
            //                                 for (var i = 0; i < jsonData.rows.length; i++) {
            //                                     num += Number(jsonData.rows[i]["F204"]);
            //                                 }
            //                                 if (num > 0) {
            //                                     _self.fdyk = "+" + num.toFixed(2);
            //                                 } else {
            //                                     _self.fdyk = num.toFixed(2);
            //                                 }
            //                             }
            //                         });
            //                         var para3 = [
            //                             { "F110": "7" }, { "F1207": "p" }, { "F132": "-1" }
            //                         ];
            //                         __jyCallTql.send("3210", para3, function (res) {
            //                             var jsonData = FormatResult(res);
            //                             if (jsonData.ErrorCode != "0") {
            //                                 _self.wcdbbl = "--";
            //                             } else {
            //                                 if (Number(jsonData.rows[0]["F1172"]) == -1) {
            //                                     _self.wcdbbl = "无负债";
            //                                 } else {
            //                                     var anum = Number(jsonData.rows[0]["F1172"]) * 100;
            //                                     // 维持担保比例
            //                                     _self.wcdbbl = anum.toFixed(2) + "%";
            //                                 }
            //                             }
            //                         });
            //                         break;
            //                     } else {
            //                         _self.islogin = false;
            //                         _self.ZJZH = "";
            //                     }
            //                 }
            //             }
            //         });
            //     } else if (u.indexOf('iPhone') > -1) { // 苹果手机
            //         __tdxgetAccList(function (data) {
            //             if (typeof (data) == "string") {
            //                 data = data.replace(/[\r\n]/g, "");
            //                 data = data.replace(/[\5]/g, "\\u0005");
            //                 var Listdata1 = JSON.parse(data);
            //             } else {
            //                 data = JSON.stringify(data);
            //                 var Listdata1 = JSON.parse(data);
            //             }
            //             if (Listdata1.length == 0) {
            //                 _self.islogin = false;
            //                 _self.ZJZH = "";
            //             } else {
            //                 var n = 0;
            //                 for (var i in Listdata1) {
            //                     if (Listdata1[i].HostType == 1) {
            //                         _self.islogin = true;
            //                         n++;
            //                         var str1 = Listdata1[i].Name.split("");
            //                         str1.splice(1, 3, "**");
            //                         var name_arr = str1.join("");
            //                         var newListdata = Listdata1[i];
            //                         var _ZJZH = newListdata.ZJZH
            //                         _self.ZJZH = _ZJZH[0];
            //                         _self.clientid = newListdata.DFKHDM;
            //                         _self.brokeid = newListdata.broker_id;

            //                         var str2 = _self.ZJZH.substr(0, 3) + '**' + _self.ZJZH.substr(-4);
            //                         _self.text = "姓名:" + name_arr + "  " + "账号:" + str2;

            //                         var param = [
            //                             { "F1207": "P" },
            //                             { "F130": "0" }
            //                         ];
            //                         __jyCallTql.send("104", param, function (res) {
            //                             var jsonData = FormatResult(res);

            //                             if (jsonData.ErrorCode != "0") {
            //                                 _self.kqzj = "--";
            //                                 _self.zzc = "--";
            //                                 _self.zsz = "--";
            //                                 _self.kyzj = "--";
            //                             } else {
            //                                 _self.kqzj = jsonData.rows[0]["F302"]
            //                                 _self.zzc = jsonData.rows[0]["F310"];
            //                                 _self.zsz = jsonData.rows[0]["F205"];
            //                                 _self.kyzj = jsonData.rows[0]["F301"];
            //                             }

            //                             //浮动盈亏
            //                             var para2 = [
            //                                 { "tdxPageID": "_Base64" },
            //                                 { "F1207": "P" }
            //                             ];
            //                             __jyCallTql.send("1114", para2, function (res) {
            //                                 var jsonData = FormatResult(res);

            //                                 if (jsonData.ErrorCode != "0") {
            //                                     _self.fdyk = "--";
            //                                 } else {
            //                                     var num = 0;
            //                                     for (var i = 0; i < jsonData.rows.length; i++) {
            //                                         num += Number(jsonData.rows[i]["F204"]);
            //                                     }
            //                                     if (num > 0) {
            //                                         _self.fdyk = "+" + num.toFixed(2);
            //                                     } else {
            //                                         _self.fdyk = num.toFixed(2);
            //                                     }
            //                                 }

            //                                 //维持担保比例
            //                                 var para3 = [
            //                                     { "tdxPageID": "_Base64" },
            //                                     { "F110": "7" }, { "F1207": "p" }, { "F132": "-1" }
            //                                 ];
            //                                 __jyCallTql.send("3210", para3, function (res) {
            //                                     var jsonData = FormatResult(res);

            //                                     if (jsonData.ErrorCode != "0") {
            //                                         _self.wcdbbl = "--";
            //                                     } else {
            //                                         if (Number(jsonData.rows[0]["F1172"]) == -1) {
            //                                             _self.wcdbbl = "无负债";
            //                                         } else {
            //                                             var anum = Number(jsonData.rows[0]["F1172"]) * 100;
            //                                             _self.wcdbbl = anum.toFixed(2) + "%";
            //                                         }
            //                                     }
            //                                 });
            //                             });
            //                         });
            //                         break;
            //                     } else {
            //                         _self.islogin = false;
            //                         _self.ZJZH = "";

            //                     }
            //                 }
            //                 _self.num = n;
            //             }
            //         });
            //     }

            //     var tdxFuncParam = {
            //         OpenParam: {
            //             Target: '0'
            //         }
            //     };
            //     //新股发行信息
            //     __hqCallTql.send("CWServ.SecuInfo", {
            //         "CallName": "phsj_sc_xgrl",
            //         "Params": ["2"]
            //     }, function (data) {
            //         var ResultSets = JSON.parse(data).ResultSets[0];
            //         try {
            //             var RowNum = ResultSets.RowNum || ResultSets.Content.length;
            //             if (Number(RowNum) > 0) {
            //                 _self.shortcuts1[0].subtitle = "今日有" + RowNum + "只新股发行"
            //             }else{
            //                 _self.shortcuts1[0].subtitle = "今日无新股发行"
            //             }

            //         } catch (err) {
            //             console.error('新股发行信息获取失败==', err);
            //         }
            //     })
            //     var param_hs = [{
            //         Code: '204007',
            //         Setcode: '1'
            //     }];
            //     var jsonStr_hs = {
            //         WantCol: ['NOW', 'YIELD'],
            //         Secu: param_hs
            //     };
            //     __hqCallTqlEx.send('HQServ.CombHQ', jsonStr_hs, function (data) {
            //         var newdata = JSON.parse(data);
            //         var arr1 = newdata.List || [];
            //         var arr2 = arr1[0];
            //         var num1 = arr2[3];
            //         _self.shortcuts2 = num1;

            //         var param_sh = [{
            //             Code: '131801',
            //             Setcode: '0'
            //         }];

            //         var jsonStr_sh = {
            //             WantCol: ['NOW', 'YIELD'],
            //             Secu: param_sh
            //         };
            //         __hqCallTqlEx.send('HQServ.CombHQ', jsonStr_sh, function (data) {
            //             var newdata = JSON.parse(data);
            //             var arr1 = newdata.List;
            //             var arr2 = arr1[0];
            //             var num2 = arr2[3];
            //             _self.shortcuts3 = num2;

            //             if (num1 - num2 < 0) {
            //                 _self.shortcuts1[2].subtitle_2 = num2 + "%";
            //             } else {
            //                 _self.shortcuts1[2].subtitle_2 = num1 + "%";
            //             }
            //         });
            //     });
            // },

            // returnSpeClass: function () {
            //     if (this.fdyk.indexOf("+") != -1) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // },

            // show_curtain: function () {
            //     var param = {
            //         "HostType": "1"
            //     };
            //     var _self = this;
            //     var u = navigator.userAgent;
            //     if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
            //         __tdxgetAccList(function (data) {
            //             var n = 0;
            //             for (var i in data) {
            //                 var Listdata = JSON.parse(data[i]);
            //                 if (Listdata.HostType == 1) {
            //                     n++;
            //                 }
            //             }
            //             if (n == 0) {
            //                 __tdxLoginBox(param, function (data) {  });
            //             } else {
            //                 __webCallTql.send('tdxOpenJySwitchAcc', param, function (data) { });
            //             }
            //         });
            //     } else if (u.indexOf('iPhone') > -1) { //苹果手机
            //         __tdxgetAccList(function (data) {
            //             if (typeof (data) == "string") {
            //                 data = data.replace(/[\r\n]/g, "");
            //                 data = data.replace(/[\5]/g, "\\u0005");
            //                 var Listdata = JSON.parse(data);
            //             } else {
            //                 data = JSON.stringify(data);
            //                 var Listdata = JSON.parse(data);
            //             }
            //             var n = 0;
            //             for (var i in Listdata) {
            //                 if (Listdata[i].HostType == 1) {
            //                     n++;
            //                 }
            //             }

            //             if (n == 0) {
            //                 __tdxLoginBox(param, function (data) { });

            //             } else {
            //                 __webCallTql.send('tdxOpenJySwitchAcc', param, function (data) {
            //                     // _self.initStart()
            //                 });
            //             }
            //         });
            //     }
            // },

            // closeAccCd: function () {
            //     this.closeCardMsg = !this.closeCardMsg;
            // },

            // first: function (d) {
            //     //页面跳转
            //     // alert(d.url);
            //     toCallJavaUrl(d.mode, d.title, d.url, '')
            // },
            // two: function (e) {
            //     //页面跳转
            //     // alert(e.url);
            //     toCallJavaUrl(e.mode, e.title, e.url, '')
            // },

            // noRemind: function () {
            //     var theGemData = this.theGemData;
            //     theGemData.dontRemind = !theGemData.dontRemind;
            //     this.theGemData = theGemData;

            //     var dontRemindStorage = 'dontRemindStorage' + this.ZJZH;
            //     if (theGemData.dontRemind) {
            //         // 如果"不再提醒"勾中了
            //         localStorage.setItem(dontRemindStorage, 'choice');
            //     } else {
            //         localStorage.removeItem(dontRemindStorage);
            //     }
            // },

            // nextBesides: function () {
            //     var theGemData = this.theGemData;
            //     theGemData.show = false;
            //     theGemData.dontRemind = false;
            //     this.theGemData = theGemData;
            // },

            // goOpen: function () {
            //     var theGemData = this.theGemData;
            //     theGemData.show = false;
            //     theGemData.dontRemind = false;
            //     this.theGemData = theGemData;
            //     // __webCallTql.send(
            //     //     "tdxOpenUrl", 
            //     //     {
            //     //     OpenName: '业务办理',
            //     //     OpenType: "native",
            //     //     OpenUrl: home_config.goBusinessDealt,
            //     //     OpenParam: {
            //     //         UrlType: "Remote"
            //     //         // UrlType: "Absolute"
            //     //     }
            //     //   }, 
            //     //   function() {}
            //     // );
            //     __webCallTql.send(
            //         'tdxOpenNativeModule',
            //         {
            //             'OpenName': "业务办理",
            //             'OpenType': 'native',
            //             'OpenID': 'GOYWBL',
            //             'OpenParam': {
            //                 "UrlType": "Absolute",
            //             }
            //         }
            //     )
            // },

            // hideData: function () {
            //     this.hide_data = !this.hide_data;
            // },

            // returnSpeClass: function (data) {
            //     data = data + '';
            //     if (data != undefined) {
            //         if (data.indexOf("+") != -1) {
            //             return 1;
            //         } else if (Number(data) < 0) {
            //             return 2;
            //         } else {
            //             return 3;
            //         }
            //     } else {
            //         return 3;
            //     }
            // },

            // judgeShenZhenJW: function () {
            //     // 判断是否为深证股东权限包含"j"且不包含"w"
            //     var that = this;
            //     var funcid = "SIMPLE:331300";
            //     var requestParam = [{
            //         "op_branch_no": that.brokeid, // 操作分支机构
            //         "op_entrust_way": "7", // 7：网上委托
            //         "op_station": "test", // 站点地址
            //         "branch_no": that.brokeid, // 分支机构
            //         "client_id": that.clientid, // 客户编号
            //         "fund_account": that.ZJZH,   
            //         "password": "#PASSWORD#", // 密码
            //     }];

            //     var __hqCallTql = new HQCallTql();
            //     __hqCallTql.objOptParam = {
            //         'sessionType': 'HQSession',
            //         "PasswordSessionID": "CurSession"
            //     };

            //     // 登录时查询深圳股东账号权限判断客户深圳股东账户权限是否有j且没有W
            //     __hqCallTql.send(funcid, requestParam, function (data) {
            //         data = FormatResult(data);
            //         if (data && data.ErrorCode == 0) {
            //             var rows = data.rows || [];
            //             for (var i = 0; i < rows.length; i++) {
            //                 var holder_rights = rows[i].holder_rights;
            //                 if (rows[i].exchange_type == 2 && rows[i].asset_prop == '7' && holder_rights.indexOf('j') != -1 && holder_rights.indexOf('W') == -1) {
            //                     // 如果是深证股东权限，是信用账号，包含"j"且不包含"W"
            //                     var theGemData = that.theGemData;
            //                     theGemData.show = true;


            //                     // 如果对应账号点过不在提醒
            //                     var dontRemindStorage = 'dontRemindStorage' + that.ZJZH;
            //                     if (localStorage.getItem(dontRemindStorage) == 'choice') {
            //                         theGemData.show = false
            //                     }

            //                     // 判断是否切换了资金账号登录
            //                     if (localStorage.getItem('local-zjzh')) {
            //                         // 第二次及以上登录
            //                         if (localStorage.getItem('local-zjzh') != that.ZJZH) {
            //                             // 切换了资金账号, 默认“不再提醒”是未勾中状态
            //                             theGemData.dontRemind = false;
            //                             localStorage.setItem('local-zjzh', that.ZJZH)
            //                         }
            //                     }else{
            //                         // 第一次登录
            //                         localStorage.setItem('local-zjzh', that.ZJZH)
            //                         theGemData.dontRemind = false;
            //                     }
                                
            //                     // 获取公告弹窗的文字内容
            //                     $.ajax({
            //                         type: 'GET',
            //                         url: home_config.yspzjurl + '/homepage/theGemAnnouncement.js',
            //                         success: function (data) {
            //                             if (localStorage.getItem('theGemVersion')) {
            //                                 if (localStorage.getItem('theGemVersion') != announcementConfig.version) {
            //                                     // 版本发生了变化
            //                                     theGemData.show = true;
            //                                     theGemData.dontRemind = false;
            //                                     localStorage.setItem('theGemVersion', announcementConfig.version)
            //                                     // 解决A账号登录，点击了不再提醒，关闭弹框，这个时候版本发生了变化，重新登录A账号，弹窗弹出，不点击“不再提醒”关闭弹框--再次登录A账号--弹框不再显示的问题
            //                                     if (localStorage.getItem(dontRemindStorage)) {
            //                                         localStorage.removeItem(dontRemindStorage)
            //                                     }
            //                                 }
            //                             }else{
            //                                 // 如果是第一个版本，第一次登录
            //                                 localStorage.setItem('theGemVersion', announcementConfig.version)
            //                             }
            //                             that.theGemData = JSON.parse(JSON.stringify(theGemData));
            //                             that.titleHtml = announcementConfig.title;
            //                             that.contentHtml = announcementConfig.content;
            //                         },
            //                         error: function (err) {
            //                             console.error('获取公告失败', err);
            //                         }
            //                     })
            //                     break
            //                 }
            //             }
            //         }
            //     })
            // }
            //// 注释掉
        },

        filters: {

            // toFixtwo: function (data) {
            //     var parts = Number(data).toFixed(2).split(".");
            //     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            //     if (data != null && data != undefined && data != "--" && data != "****") {
            //         return parts.join(".");
            //     } else {
            //         if (data == "****") {
            //             return data;
            //         } else {
            //             return "--";
            //         }
            //     }
            // },
        },

        watch: {
            // ZJZH: function (value) {
            //     var that = this;
            //     if (value) {
            //         that.judgeShenZhenJW(); // 如果登录了资金账户
            //     }
            // }
        }
    });
}

// function checkTdxJava() {
//     if (window.tdx_java && window.tdx_java.TdxWebCall) {
//         return true;
//     } else {
//         return false;
//     }
// }



// 页面切换
// function toCallJavaUrl(mode, title, url, shareinfo) {
//     if (checkTdxJava()) {
//         if (typeof url !== 'string') {
//             var url = url["android"];
//         }
//         if (mode == "Java") {
//             var tdxFuncParam = {
//                 "JumpPageID": url
//             }
//             // window.tdx_java.TdxWebCall("tdxOpenNativeModule", JSON.stringify(tdxFuncParam), "", "");
//             window.tdx_java.TdxWebCall("tdxJumpPage", JSON.stringify(tdxFuncParam), "", "");
//         } else if (mode == "JavaMode") {
//             var tdxFuncParam = {
//                 "OpenID": url
//             }
//             // alert("Proc: " + "TdxWebCall" + "\nParams: " + JSON.stringify(["tdxOpenNativeModule", tdxFuncParam, "", ""]));
//             window.tdx_java.TdxWebCall("tdxOpenNativeModule", JSON.stringify(tdxFuncParam), "", "");
//         } else if (mode == "JavaHQMode") {
//             var tdxFuncParam = {
//                 "OpenID": "HQMG",
//                 "OpenParam": url
//             }
//             // alert("Proc: " + "TdxWebCall" + "\nParams: " + JSON.stringify(["tdxOpenNativeModule", tdxFuncParam, "", ""]));
//             window.tdx_java.TdxWebCall("tdxOpenNativeModule", JSON.stringify(tdxFuncParam), "", "");
//         } else if (mode == "newFunc") {
//             window.tdx_java.TdxWebCall(url, '', "", "");
//         } else if (mode == "JavaSec") {
//             var tdxFuncParam = {
//                 "OpenID": "tdxJycc",
//                 "OpenParam": {
//                     "HostType": url
//                 }
//             }
//             window.tdx_java.TdxWebCall("tdxOpenJyFunc", JSON.stringify(tdxFuncParam), "", "");
//         } else if (mode == "NetURL") {
//             var _shareinfo = shareinfo || {};
//             _shareinfo["Time"] = +new Date().toString();
//             _shareinfo["DisableShare"] = '1';

//             var tdxFuncParam = {
//                 "OpenName": title,
//                 "OpenType": "native",
//                 "OpenUrl": url,
//                 "OpenParam": {
//                     "UrlType": "Remote"
//                 },
//                 "ShareInfo": _shareinfo
//             }
//             window.tdx_java.TdxWebCall("tdxOpenUrl", JSON.stringify(tdxFuncParam), "", "");
//         } else if (mode == "LocalURL") {
//             var _shareinfo = shareinfo || {};
//             _shareinfo["Time"] = +new Date().toString();
//             _shareinfo["DisableShare"] = '1';

//             var tdxFuncParam = {
//                 "OpenName": title,
//                 "OpenType": "native",
//                 "OpenUrl": url,
//                 "OpenParam": {
//                     "UrlType": "Absolute"
//                 },
//                 "ShareInfo": _shareinfo
//             }
//             window.tdx_java.TdxWebCall("tdxOpenUrl", JSON.stringify(tdxFuncParam), "", "");
//         } else if (mode == "Browser") {
//             var tdxFuncParam = {
//                 "OpenName": title,
//                 "OpenType": "browser",
//                 "OpenUrl": url,
//                 "OpenParam": {
//                     "UrlType": "Remote"
//                 },
//                 "ShareInfo": {
//                     "Time": new Date().getTime().toString()
//                 }
//             }
//             window.tdx_java.TdxWebCall("tdxOpenUrl", JSON.stringify(tdxFuncParam), "", "");
//         } else if (mode == "xgrl") {
//             var tdxFuncParam = {
//                 "OpenParam": {
//                     "Target": url
//                 }
//             }
//             window.tdx_java.TdxWebCall("tdxXgslReq", JSON.stringify(tdxFuncParam), title, "");
//         }
//     } else {
//         if (typeof url !== 'string') {
//             var url = url["ios"];
//         }
//         if (mode == "Java") {
//             var tdxFuncParam = {
//                 "JumpPageID": url
//             }
//             // IOS_Bridge.call("WebCall", JSON.stringify(tdxFuncParam), "tdxOpenNativeModule", "", undefined);
//             IOS_Bridge.call("WebCall", JSON.stringify(tdxFuncParam), "tdxJumpPage", "", undefined);
//         } else if (mode == "JavaHQMode") {
//             var tdxFuncParam = {
//                 "OpenID": "HQMG",
//                 "OpenParam": JSON.parse(url)
//             }
//             IOS_Bridge.call("WebCall", JSON.stringify(tdxFuncParam), "tdxOpenNativeModule", "", undefined);
//         } else if (mode == "JavaMode") {
//             var tdxFuncParam = {
//                 "OpenID": url
//             }
//             IOS_Bridge.call("WebCall", JSON.stringify(tdxFuncParam), "tdxOpenNativeModule", "", undefined);
//         } else if (mode == "JavaSec") {
//             var tdxFuncParam = {
//                 "OpenID": "tdxJycc",
//                 "OpenParam": {
//                     "HostType": url
//                 }
//             }
//             IOS_Bridge.call("WebCall", JSON.stringify(tdxFuncParam), "tdxOpenJyFunc", "", undefined);
//         } else if (mode == "NetURL") {
//             var tdxFuncParam = {
//                 "OpenName": title,
//                 "OpenType": "native",
//                 "OpenUrl": url,
//                 "OpenParam": {
//                     "UrlType": "Remote"
//                 },
//                 "ShareInfo": {
//                     "Time": new Date().getTime().toString(),
//                     "DisableShare": 1
//                 }
//             }
//             IOS_Bridge.call("WebCall", JSON.stringify(tdxFuncParam), "tdxOpenUrl", "", undefined);
//         } else if (mode == "LocalURL") {
//             var tdxFuncParam = {
//                 "OpenName": title,
//                 "OpenType": "native",
//                 "OpenUrl": url,
//                 "OpenParam": {
//                     "UrlType": "Absolute"
//                 },
//                 "ShareInfo": {
//                     "Time": new Date().getTime().toString(),
//                     "DisableShare": 1
//                 }
//             }
//             IOS_Bridge.call("WebCall", JSON.stringify(tdxFuncParam), "tdxOpenUrl", "", undefined);
//         } else if (mode == "Browser") {
//             var tdxFuncParam = {
//                 "OpenName": title,
//                 "OpenType": "browser",
//                 "OpenUrl": url,
//                 "OpenParam": {
//                     "UrlType": "Remote"
//                 },
//                 "ShareInfo": {
//                     "Time": new Date().getTime().toString(),
//                     "DisableShare": 1
//                 }
//             }
//             IOS_Bridge.call("WebCall", JSON.stringify(tdxFuncParam), "tdxOpenUrl", "", undefined);
//         } else if (mode == "xgrl") {
//             var tdxFuncParam = {
//                 "OpenParam": {
//                     "Target": url
//                 }
//             }
//             IOS_Bridge.call("WebCall", JSON.stringify(tdxFuncParam), "tdxXgslReq", "", title);
//         } else if (mode == "newFunc") {
//             IOS_Bridge.call("WebCall", "", url, "", title);
//         }
//     }
// }


/*
 * IOS函数桥接
 */
// var IOS_Bridge = {

//     callbacksCount: 1,
//     callbacks: {},

//     resultForCallback: function resultForCallback(callbackId, resultArray) {
//         try {
//             var callback = IOS_Bridge.callbacks[callbackId];
//             if (!callback) {
//                 return;
//             }
//             callback.apply(null, resultArray);
//         } catch (e) {
//             // alert(e);
//         }
//     },


//     //  * functionName: 调用函数名称
//     //  * args:json 格式参数
//     //  * callback 回调函数，可有可无
//     call: function call(functionName, args, funcID, frameID, callback) {

//         var hasCallback = callback && typeof callback == "function";
//         var callbackId = hasCallback ? IOS_Bridge.callbacksCount++ : 0;

//         if (hasCallback) {
//             IOS_Bridge.callbacks[callbackId] = callback;
//         }
//         var iframe = document.createElement("IFRAME");
//         iframe.setAttribute("src", "tdx-frame:" + functionName + ";;" + frameID + ";;" + funcID + ";;" + args + ";;" + callback);

//         document.documentElement.appendChild(iframe);
//         iframe.parentNode.removeChild(iframe);
//         iframe = null;

//     }
// };