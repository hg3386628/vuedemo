<template>
  <div>
      main的子组件
    <p>{{"父组件传给子组件的值-----"+msg}}</p>

  </div>
</template>

<script>
export default {
    props:['msg']
}
</script>

<style scoped>
div{
    background: red;
}
</style>>

