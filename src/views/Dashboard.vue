<template>
  <b-container fluid class="dashboard vh-100">
    <b-row>
      <b-col class="mt-4">
        <greeting/>
      </b-col>
    </b-row>
    <b-row class="p-4 h-50 m-auto" align-h="between" id="status-row">
      <b-col cols="12" sm="6" lg="4" align-self="center">
        <weather/>
      </b-col>
      <b-col cols="12" sm="6" lg="4" align-self="center">
        <quote></quote>
      </b-col>
    </b-row>
    <router-link to="/todos">
      <b-row align-h="center">
        <b-col
          class="m-2 mt-4 p-2 text-center text-shadow-dark-md bg-transparent text-light text-wrap border border-light rounded shadow"
          cols="12"
          md="3"
        >Show All My Todos</b-col>
      </b-row>
    </router-link>
    <todo-preview/>
  </b-container>
</template>

<script>
import Quote from "@/components/Quote.vue";
import Weather from "@/components/Weather.vue";
import Greeting from "@/components/Greeting.vue";
import TodoPreview from "@/components/TodoPreview.vue";

export default {
  name: "dashboard",
  props: [],
  data() {
    return {};
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
    load() {
      setTimeout(() => {
        console.log("done");
        return true;
      }, 5000);
    }
  },
  methods: {},
  components: {
    Quote,
    Weather,
    Greeting,
    TodoPreview
  }
};
</script>