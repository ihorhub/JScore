<template>
  <div >
    <h1>
      TODOLIST WITH VUEX and VueResource
    </h1>
    <AddTodo></AddTodo>
    <hr>
    <TodoList></TodoList>

  </div>
</template>

<script>


import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {todoListModule} from "./store/todolist/todolist";

export default {
  name: 'App',
  comments:{
    AddTodo,
    TodoList
  },
   async beforeMount() {
    try {
      await this.$store.dispatch(`${todoListModule}/${GET_TODOS}`)
    } catch (e) {
      console.log(e);

    }
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
