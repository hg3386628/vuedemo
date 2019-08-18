<template>
  <div>
    <van-button type="primary" @click="showpop">默认按钮</van-button>
    <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
<van-dialog
  v-model="show"
  title="标题"
  show-cancel-button
>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
</van-dialog>
    <router-link to="/main/27">下一页</router-link>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    data() {
        return {
           show:false
        }
    },
    methods: {
        showpop(){
           Dialog({ message: '提示' });
        }
    }
}
</script>

<style>

</style>