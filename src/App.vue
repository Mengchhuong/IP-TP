<template>
<div>
  <TodoItem @todo-deleted="deleteItem" :key="item.id" v-for="item in tasklist" :todo="item"></TodoItem>
</div>

</template>

<script>

import TodoItem from './components/TodoItem'
export default {
  name: 'App',
  data() {
    return {
      tasklist: [
        {
          id: 1,
          task: "Wash cloths",
          state: "pending"
        },
        {
          id: 2,
          task: "Submit assignment",
          state: "pending"
        },
        {
          id: 3,
          task: "Write user story",
          state: "done"
        },
        {
          id: 4,
          task: "Read book",
          state: "pending"
        }
      ],
    }
  },
  components: {
    TodoItem
  },
  methods:{
    deleteItem(id){
      let TaskList =[];
      let item;
      for (item of this.tasklist){
        if(item.id!=id){
          TaskList.push(item)
        }
      }
      this.tasklist = TaskList;
    },
  }
}
</script>

<style>

</style>
