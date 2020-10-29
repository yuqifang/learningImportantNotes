<template>
    <div class="debugger">
        <wxc-mask
            height="1200"
            width="720"
            border-radius="0"
            duration="200"
            mask-bg-color="#FFFFFF"
            :has-overlay="true"
            :show="weexDebugger.show"
            :show-close="false"
        >
            <scroller class="scroller">
                <div>
                    <div class="logs"
                        v-for="(log, index) in weexDebugger.logs"
                        :key="index"
                    >
                        <text class="descText" @click="copyLog(log)">{{log.wordDesc + '：'}}</text>
                        <text class="resText">{{log.res}}</text>
                    </div>
                </div>
            </scroller>
        </wxc-mask>
    </div>
</template>

<script>
    import { WxcMask } from 'weex-ui';
    const modal = weex.requireModule('modal');
    const clipboard = weex.requireModule('clipboard')
    export default {
        components: { WxcMask },
        props: {
            weexDebugger: {
                type: Object,
                default: {
                    show: false,
                    logs: []
                }
            }
        },
        data () {
            return {
            
            }
        },
        computed: {},
        mounted () {

        },
        methods: {
            copyLog (log) {
                // 复制的日志
                clipboard.setString(JSON.stringify(log))
            },
            pushLogs(wordDesc, res, show) {
                // weex调试公共函数的封装
                var weexDebugger = this.weexDebugger;
                // 控制日志列表
                var item = {
                    wordDesc,
                    res
                };
                var logs = weexDebugger.logs || [];
                logs.push(item);
                weexDebugger.logs = logs;
                
                // 控制日志的显示隐藏
                show = show || false;
                weexDebugger.show = show;
                this.weexDebugger = JSON.parse(JSON.stringify(weexDebugger));
            }
        }
    }
</script>

<style scoped>
    .logs {
        flex-direction: row;
    }
    .descText {
        width: 220px;
        color: #e7c000;
        font-size: 30px;
    }
    .resText {
        width: 500px;
        color: #333;
        font-size: 30px;
    }
</style>
