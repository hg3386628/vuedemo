<template>
  <div>
    <p v-for="item in data" :key="item.docid">
        {{item.digest}}
    </p>

  </div>


</template>

<script>
export default {
    data() {
        return {
           apiAddr:"/journalismApi" ,
           data:[]
        }
    },
       mounted() {
            this.test();
       },
    methods: {
        //http://suggest.taobao.com/sug?code=utf-8&q=商品关键字&callback=cb
        test(){
            this.axios.get(this.apiAddr).then((response) => {
             console.log(response.data)
             this.data=response.data.data.dy
            }).catch((e) => {console.log(e)});
        }
    }

}
</script>

<style scoped>
 p{
     padding:2px;
     margin:5 0;
     border:1px solid #ddd;
 }
</style>

