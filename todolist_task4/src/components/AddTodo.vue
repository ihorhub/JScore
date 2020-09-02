<temlate>
    <div>
        <input type="text" v-model="text">
        <button @click="add">Add </button>
    </div>
</temlate>
<script>
    import {createNamespacedHelpers} from "vuex";
    import {todoListModule} from "../store/todolist/todolist";
    import {ADD_TODO} from "../store/todolist/types";

    const {mapActions}=createNamespacedHelpers(todoListModule)
    export default {
        name:'AddTodo',
        date(){
            return{
            text:''
        }

        },
        methods:{
            ...mapActions({
                addTodo:ADD_TODO
            }),
            async add(){
                try {
                    console.log(this.text);
                    const todo ={
                        text: this.text
                    }
                    await this.addTodo(todo)
                    this.text='';

                } catch (e) {
                    console.log(e)

                }

            }
        }
    }
</script>