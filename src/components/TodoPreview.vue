<template>
  <b-row align-h="center">
    <todo :key="todoData._id" v-for="todoData in appendedTodoList" :data="todoData"></todo>
  </b-row>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "todo-preview",
  props: [],
  data() {
    return {};
  },
  computed: {
    appendedTodoList() {
      let list = this.$store.state.todoList;
      if (list) {
        return list.slice(0, 3);
      }
    },
    todoList() {
      return this.$store.state.todoList;
    }
  },
  methods: {},
  components: {
    Todo
  }
};
</script>