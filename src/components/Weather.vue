<template>
  <div v-if="weatherData.main" class="mt-4 mb-4 border border-light rounded shadow">
    <b-button
      id="weather-button"
      class="w-100 text-center text-shadow-dark-lg bg-transparent text-light text-wrap text-ul"
      v-b-toggle.weather-collapse
      variant="transparent"
    >
      <i>{{convertToF(weatherData.main.temp)}} &#x00B0; F</i>
      <b-collapse
        id="weather-collapse"
        class="text-center text-shadow-dark-lg bg-transparent text-light text-wrap mt-n2 text-ul"
        v-b-toggle.weather-collapse
      >
        <b-button
          class="w-100 text-center text-shadow-dark-lg bg-transparent text-light text-wrap text-ul"
          variant="transparent"
          v-b-toggle.weather-collapse
        >
          <i>
            {{convertToF(weatherData.main.temp_max)}} &#x00B0; F -> {{convertToF(weatherData.main.temp_min)}} &#x00B0; F
            <br>
            {{weatherData.wind.speed}} MPH
            <br>
            {{weatherData.weather[0].main}}
          </i>
        </b-button>
      </b-collapse>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "weather",
  props: [],
  data() {
    return {};
  },
  computed: {
    weatherData() {
      return this.$store.state.weatherData;
    }
  },
  methods: {
    convertToF(temp) {
      return Math.trunc(((temp - 273.15) * 9) / 5 + 32);
    }
  },
  components: {}
};
</script>