<template>
  <div class="vh-100" id="app">
    <div id="bg-image" class="bg-dark fixed-top border border-dark border-lg"></div>
    <div class="m-0 p-4 position-fixed vh-100 vw-100">
      <transition :name="transitionType" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
//vars

let default_transition = "fade";

//
export default {
  name: "app",
  props: [],
  data() {
    return {
      transitionType: "fade"
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let _transitionType = from.meta.transitionType || default_transition;
      this.transitionType = _transitionType || default_transition;
      next();
    });
  },
  computed: {
    imageData() {
      //this logic is watching the value of imageData in the state within the store.js file
      return this.$store.state.imageData;
    }
  },
  methods: {},
  components: {},
  watch: {
    //Don't Modify This. This logic will set the background image when a url is available
    imageData: {
      handler: image => {
        document.querySelector("#bg-image").style.backgroundImage = `url('${
          image.url
        }')`;
      }
    }
  }
};
</script>

<style>
/* css rules here (with the style tages not scoped) will permeate throughout the app and can help with organization */
#bg-image {
  /* write the rules here that will style the background image pleasantly */
  /* EXAMPLES: */
  filter: drop-shadow(0 0 20px black) blur(5px) saturate(25%) sepia(30%)
    brightness(75%);
  background-size: cover;
  background-position: center;
  height: 100vh;
  z-index: -10;
}

.text-shadow-sm {
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
}
.text-shadow-md {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
}
.text-shadow-lg {
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.75);
}
.text-shadow-dark-sm {
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
}
.text-shadow-dark-md {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
}
.text-shadow-dark-lg {
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.75);
}
.text-shadow-light-sm {
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.75);
}
.text-shadow-ligt-md {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.75);
}
.text-shadow-light-lg {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.75);
}
.text-shadow-grey-sm {
  text-shadow: 0 0 5px rgba(127, 127, 127, 0.75);
}
.text-shadow-grey-md {
  text-shadow: 0 0 10px rgba(127, 127, 127, 0.75);
}
.text-shadow-grey-lg {
  text-shadow: 0 0 20px rgba(127, 127, 127, 0.75);
}
.text-shadow-gray-sm {
  text-shadow: 0 0 5px rgba(127, 127, 127, 0.75);
}
.text-shadow-gray-md {
  text-shadow: 0 0 10px rgba(127, 127, 127, 0.75);
}
.text-shadow-gray-lg {
  text-shadow: 0 0 20px rgba(127, 127, 127, 0.75);
}
.text-center {
  text-align: center;
}
.bottom-0 {
  bottom: 0;
}
.top-0 {
  top: 0;
}
.left-0 {
  left: 0;
}
.right-0 {
  right: 0;
}
.text-ul {
  text-decoration: underline, white;
}
.rotate-90 {
  transform: rotate(90);
}
.rotate-180 {
  transform: rotate(180);
}
.rotate-n90 {
  transform: rotate(-90);
}
.rotate-n180 {
  transform: rotate(-180);
}
.vh-25 {
  height: 25vh;
}
.vh-50 {
  height: 50vh;
}
.vh-75 {
  height: 75vh;
}
.vw-25 {
  height: 25vw;
}
.vw-50 {
  height: 50vw;
}
.vw-75 {
  height: 75vw;
}
/*RE-STYLING*/

::placeholder {
  color: #f8f9fa !important;
  opacity: 1 !important;
}
input:active,
input:focus,
button:active,
button:focus {
  box-shadow: none !important;
}

/* TRANSITIONS */

.fade-enter,
.fade-leave-active {
  transition-duration: 0.75s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  opacity: 0;
}
.custom-enter,
.custom-enter-active {
  transition-duration: 1s;
  transition-property: opacity transform;
  transition-timing-function: ease;
  opacity: 0;
  transform: translateY(-2vh);
}
.custom-leave,
.custom-leave-active {
  transition-duration: 1s;
  transition-property: opacity transform;
  transition-timing-function: ease;
  opacity: 0;
  transform: translateY(2vh);
}

.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition-duration: 2s;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  overflow: hidden;
}

.slide-up-enter,
.slide-down-leave-active {
  transform: translate(0, 100vh);
}

.slide-up-leave-active,
.slide-down-enter {
  transform: translate(0, -100vh);
}
</style>
