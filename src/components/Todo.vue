<template>
  <transition name="custom" mode="in-out">
    <b-col class="my-3" cols="12" sm="6" md="4" lg="3">
      <div class="mt-4 mb-4 border border-light rounded shadow">
        <b-button
          :id="'todo-btn-wrap-' + this.data._id"
          class="w-100 text-center text-shadow-dark-md bg-transparent text-light text-wrap"
          v-b-toggle="'todo-collapse-' + this.data._id"
          variant="transparent"
        >
          <i>{{ prefixifyDesc(this.data.description) }}</i>
          <b-collapse
            :id="'todo-collapse-' + this.data._id"
            class="text-center text-shadow-dark-md bg-transparent text-light text-wrap mt-n2"
            v-b-toggle="'todo-collapse-' + this.data._id"
          >
            <b-button
              class="w-100 text-center text-shadow-dark-md bg-transparent text-light text-wrap"
              variant="transparent"
              v-b-toggle="'todo-collapse-' + this.data._id"
            >
              <i>{{ suffixifyDesc(this.data.description) }}</i>
              <br>
            </b-button>
            <b-row class="my-2">
              <b-col cols="12">
                <b-button
                  class="mt-2 w-75 text-center text-shadow-dark-md bg-light text-dark text-wrap border border-dark rounded shadow"
                  @click="toggleTodoState(data._id)"
                  v-if="!this.isComplete"
                >Complete?</b-button>
                <b-button
                  class="mt-2 w-75 text-center text-shadow-dark-md bg-light text-primary text-wrap border border-dark rounded shadow"
                  @click="toggleTodoState(data._id)"
                  v-if="this.isComplete"
                >Completed!</b-button>
              </b-col>
              <b-col cols="12">
                <b-button
                  class="mt-4 w-75 text-center text-shadow-dark-md bg-dark text-light text-wrap border border-light rounded shadow"
                  v-b-toggle="'delete-confirm-collapse-' + this.data._id"
                >More</b-button>
              </b-col>
              <b-col cols="12">
                <b-collapse :id="'delete-confirm-collapse-' + this.data._id">
                  <b-button
                    class="mt-4 text-center text-shadow-dark-md bg-warn text-warn text-wrap border border-warn rounded shadow"
                    v-b-toggle="'todo-collapse-' + this.data._id"
                    @click="deleteTodo(data._id)"
                  >Delete</b-button>
                </b-collapse>
              </b-col>
            </b-row>
          </b-collapse>
        </b-button>
      </div>
    </b-col>
  </transition>
</template>

<script>
export default {
  name: "todo",
  props: ["data"],
  data() {
    return {
      complete: this.data.completed
    };
  },
  computed: {
    isComplete() {
      return this.complete;
    }
  },
  methods: {
    markCompleted() {
      this.complete = !this.complete;
    },
    prefixifyDesc(todo) {
      return todo
        .split(" ")
        .slice(0, 4)
        .join(" ");
    },
    suffixifyDesc(todo) {
      return todo
        .split(" ")
        .slice(4)
        .join(" ");
    },
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    toggleTodoState(id) {
      this.markCompleted();
      this.$store.dispatch("toggleTodoState", id);
    }
  },
  components: {}
};
</script>