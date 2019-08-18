<template>
  <div>ceshi 1
      <p v-for="item in data" :key="item.docid">
        {{item.digest}}
    </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            apiAddr:"/journalismApi",
             data:[]
        }
    },
    mounted() {
       this.test(); 
    },
    methods: {
        //

        test(){
            this.$http.get(this.apiAddr).then((response) => {
             console.log(response.data)
             this.data=response.data.data.auto
            }).catch((e) => {});
        }
    }

}
</script>

<style>

</style>