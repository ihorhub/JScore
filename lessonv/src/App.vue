<template>
  <div id="app">

    <input type="text" v-model="items">
    {{items}}
      <ul v-for="(item,index) in items " :key="index"></ul>
      <buton @click="additem()"> ADD</buton>
      <buton v-if="arr.length!==0" @click="removeitem()"> REMOVE</buton>


  </div>
</template>

<script>


export default {
  name: 'App',

    data() {
        return {
            arr : [],
            items: ''
        }
      }
    }
    methods:{
      additem(){
             this.arr.push(this.items)
        }

    },
{
    removeitem()
    {

        this.arr.slice(this.index)
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
