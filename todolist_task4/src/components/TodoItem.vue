<temlate>
    <div>
<p>
    {{item.text}} <button @click="remove">Remove Todo</button>
</p>

    </div>
</temlate>
<script>
    import {todoListModule} from "../store/todolist/todolist";
    import {REMOVE_TODO} from "../store/todolist/types";

    const {mapActions}=createNamespacedHelpers(todoListModule)
    export default {
        name:'TodoItem',
        props:{
            item:{
                type:Object
            }
        },
        methods:{
            ...mapActions({
                removeTodo:REMOVE_TODO
            }),
            async remove(){
               try {
                   await this.removeTodo(this.item.id)
               } catch (e) {
                   console.log(e);
               }


            }
        },
        beforeMount() {
            console.log(this.item)
        }
    }

</script>