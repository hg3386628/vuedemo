<template>
  <div>
    <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
   
    />
    main组件
    <br>
    <p>{{"路由中传过来的值"+$route.params.id}}</p>
    <van-loading type="spinner" color="#1989fa" />
    <subMain :msg="msg"></subMain>

    <!-- 路由嵌套 -->
    <span  @click="go(1)"  class="ha">axios测试嵌套路由一</span>
    <span @click="go(2)" class="ha">axios测试嵌套路由二</span>

    <router-view></router-view>
  </div>
</template>
<script>
import subMain from '../subComponents/subMain.vue';

export default {
    data() {
        return {
            msg:'测试子组件向父组件传值'
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push("/");
        },

        go(index){
            if(index==1){
                this.$router.push("/main/27/axiosTest1")
            }else{
                this.$router.push("/main/77/axiosTest2")
            }
        }
    },
    components:{
        subMain
    }
}
</script>

<style>
.ha{
    display:inline-block;
    border: 1px solid #ccc;
    padding:5px;
    margin: 0 5px;
    border-radius:5px;
}
</style>