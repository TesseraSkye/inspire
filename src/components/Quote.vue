<template>
  <div v-if="quoteData.quote" class="mt-4 mb-4 border border-light rounded shadow">
    <b-button
      id="quote-button"
      class="w-100 text-center text-shadow-dark-md bg-transparent text-light text-wrap text-ul"
      v-b-toggle.quote-collapse
      variant="transparent"
    >
      <i>{{ prefixifyQuote }}</i>
      <b-collapse
        id="quote-collapse"
        class="text-center text-shadow-dark-md bg-transparent text-light text-wrap mt-n2 text-ul"
        v-b-toggle.quote-collapse
      >
        <b-button
          class="w-100 text-center text-shadow-dark-md bg-transparent text-light text-wrap text-ul"
          variant="transparent"
          v-b-toggle.quote-collapse
        >
          <i>{{ suffixifyQuote }}</i>
          <br>
          <br>
          - {{quoteData.quote.author}}
        </b-button>
      </b-collapse>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "quote",
  props: [],
  data() {
    return {};
  },
  computed: {
    prefixifyQuote() {
      return this.quoteText
        .split(" ")
        .slice(0, 5)
        .join(" ");
    },
    suffixifyQuote() {
      return this.quoteText
        .split(" ")
        .slice(5)
        .join(" ");
    },
    quoteText() {
      return this.$store.state.quoteData.quote.body;
    },
    quoteData() {
      return this.$store.state.quoteData;
    }
  },
  methods: {},
  components: {}
};
</script>

<style>
</style>
