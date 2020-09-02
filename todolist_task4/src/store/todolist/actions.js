
import {ADD_TODO, GET_TODOS, REMOVE_TODO, REMOVED_TODO, SET_TODO, SET_TODOS} from "./types";
import Vue from 'vue';
export const actions={
[ADD_TODO]: async ({commit},todo)=>{
    try {
        const {body:{name}}=await  Vue.http.post('https://http-lesson-vue-da16f.firebaseio.com/http-lesson.json',todo);
        const todoItem={...todo,id:name}
        commit(SET_TODO,todoItem)
       // console.log(todoItem)
    } catch (e) {
        console.log(e)

    }

},
    [GET_TODOS]:async ({commit})=>{
    try {
        const todos =[];
       const {body}= await Vue.http.get('https://http-lesson-vue-da16f.firebaseio.com/http-lesson.json');
    for (let item in body){
        todos.push({...body[item],id:item})
    }
    commit(SET_TODOS,todos)
    console.log(commit)
    } catch (e) {
        console.log(e)

    }
    },
    [REMOVE_TODO]: async ({commit},id)=>{

try {
    await  Vue.http.delete(`https://http-lesson-vue-da16f.firebaseio.com/http-lesson/${id}.json`)
    commit(REMOVED_TODO,id)
} catch (e) {
    console.log(e)
}
    }
}