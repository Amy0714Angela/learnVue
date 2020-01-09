<template>
  <div class="hello">
    把 count 方法直接写入，可自己执行
    <h1>{{count}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      //count: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  }
}
</script>

<style scoped>
</style>
