<template>
  <b-container fluid class="todos">
    <router-link to="/">
      <b-row align-h="center">
        <b-col
          class="m-2 p-2 text-center text-shadow-dark-md bg-transparent text-light text-wrap border border-light rounded shadow"
          cols="12"
          sm="3"
        >Back To Dashboard</b-col>
      </b-row>
    </router-link>
    <b-row class="vh-25"></b-row>
    <b-form class="w-100" @submit.prevent="onSubmit">
      <b-row>
        <b-col cols="12" md="2">
          <h3 class="text-shadow-dark-md bg-transparent text-light text-wrap">NEW TODO:</h3>
        </b-col>
        <b-col cols="12" md="8">
          <b-form-group class="w-100" id="newTodoForm" label-for="newTodoForm">
            <b-form-input
              class="w-100 text-shadow-dark-md bg-transparent text-light text-wrap border-light rounded-0 border-top-0 border-right-0 border-left-0"
              id="newTodoForm"
              v-model="form.newTodoDesc"
              required
              placeholder=". . ."
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="2">
          <b-button
            class="w-100 text-center text-shadow-dark-md bg-transparent text-light text-wrap border-light shadow"
            type="submit"
            variant="primary"
          >OK</b-button>
        </b-col>
      </b-row>
    </b-form>
    <b-row class="m-4 p-2"></b-row>
    <b-row align-h="center">
      <todo :key="todoData._id" v-for="todoData in todoList" :data="todoData"></todo>
    </b-row>
  </b-container>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  name: "todos",
  props: [],
  data() {
    return {
      form: {
        newTodoDesc: ""
      }
    };
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  },
  methods: {
    onSubmit() {
      let desc = this.form.newTodoDesc;
      this.form.newTodoDesc = "";
      this.$store.dispatch("postTodo", desc);
    }
    // newTodoSort(method, cb = {}) {
    //   let SortedTodos = this.$store.dispatch("sortTodos", { method, cb });
    //   console.error(SortedTodos);
    //   return SortedTodos;
    // }
    //will most likely write method for add a todo here
  },
  components: { Todo }
};
</script>