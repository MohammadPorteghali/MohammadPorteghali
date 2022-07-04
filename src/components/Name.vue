<template>
  <div>
    <section>
      <div class="hero">
        <div class="name">
          <vue-typer
            :text="['Mohammad Porteghali']"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="86"
            :type-delay="80"
            :pre-erase-delay="200"
            :erase-delay="250"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="blink"
          ></vue-typer>
        </div>
        <div class="title">
          <vue-typer
            v-if="showJobTitle"
            :text="['Front-end Developer']"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="86"
            :type-delay="70"
            :pre-erase-delay="200"
            :erase-delay="250"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="blink"
          ></vue-typer>
        </div>
        <div class="location">
          <vue-typer
            v-if="showLocation"
            :text="['Based in Turkey']"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="86"
            :type-delay="70"
            :pre-erase-delay="200"
            :erase-delay="250"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="blink"
          ></vue-typer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  data() {
    return {
      showJobTitle: false,
      showLocation: false,
    }
  },
  components: { VueTyper },
  methods: {
    showJobTitleFunction() {
      setTimeout(() => { this.showJobTitle = true } ,1600);
      setTimeout(() => { this.showLocation = true } ,3000);
    }
  },
  mounted() {
    this.showJobTitleFunction()
  }
}
</script>