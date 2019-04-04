<template>
  <div>
    <b-row class="d-flex justify-content-center">
      <div>
        <b-collapse class :visible="!!username" id="greeting-motd">
          <b-button class="btn-light bg-transparent border-0 mt-4" @dblclick="changeName">
            <h1
              id="UNCheck"
              class="text-center text-shadow-dark-md bg-transparent text-light text-wrap"
            >Good {{ToD}}{{", " + username}}.</h1>
          </b-button>
        </b-collapse>
      </div>
    </b-row>
    <b-row class="d-flex justify-content-center">
      <div>
        <b-collapse class :visible="!username" id="name-form-area">
          <b-form class="d-flex" @submit.prevent="onSubmit">
            <b-form-group class="m-1" id="usernameForm" label-for="usernameForm">
              <b-form-input
                class="text-shadow-dark-md bg-transparent text-light text-wrap border-light shadow"
                id="usernameForm"
                v-model="form.username"
                required
                placeholder="Username"
              />
            </b-form-group>
            <b-button
              class="m-1 text-center text-shadow-dark-md bg-transparent text-light text-wrap border-light shadow"
              type="submit"
              variant="primary"
            >Submit</b-button>
          </b-form>
        </b-collapse>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "greeting",
  props: [],
  data() {
    return {
      form: {
        username: ""
      },
      show: false
    };
  },
  computed: {
    dateData() {
      return this.$store.state.dateData;
    },
    ToD() {
      if (this.dateData.getHours > 3 && this.dateData.getHours < 12) {
        return "morning";
      } else if (this.dateData.getHours > 12 && this.dateData.getHours < 5) {
        return "afternoon";
      } else return "evening";
    },
    username() {
      return this.$store.state.username;
    }
  },
  methods: {
    changeName() {
      localStorage["inspUser"] = "";
      this.$store.dispatch("getLocalName");
    },
    onSubmit() {
      localStorage["inspUser"] = this.form.username;
      this.$store.dispatch("getLocalName");
    }
  },
  components: {}
};
</script>