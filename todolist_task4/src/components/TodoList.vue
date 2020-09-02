<temlate>
    <div>
        <ul>


            <li v-for="(item,i) in todolist": key="i"></li>

            <TodoItem: item="item"/>
        </ul>
    </div>
</temlate>
<script>
    import {todoListModule} from "../store/todolist/todolist";
    import {createNamespacedHelpers} from "vuex";
    import {TODOS} from "../store/todolist/types";
    import TodoItem from "./TodoItem";

    const {mapGetters} = createNamespacedHelpers(todoListModule)
    export default {
        name:'TodoList',
        comments:{
            TodoItem
        },
        computed:{
            ...mapGetters({
                todolist: TODOS
            })
        }


    }
</script>